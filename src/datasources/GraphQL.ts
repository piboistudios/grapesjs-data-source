/*
 * Silex website builder, free/libre no-code tool for makers.
 * Copyright (c) 2023 lexoyo and Silex Labs foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Backbone from "backbone"
import { DATA_SOURCE_ERROR, DATA_SOURCE_READY, Expression, Field, FieldKind, FieldOptions, FieldProperty, IDataSource, IDataSourceOptions, Type, TypeId, builtinTypeIds, builtinTypes } from "../types"
import graphqlIntrospectionQuery from "./graphql-introspection-query"
import dedent from "dedent-js"

/**
 * @fileoverview GraphQL DataSource implementation
 */

/**
 * GraphQL Data source options
 */
export interface GraphQLOptions extends IDataSourceOptions {
  url: string
  headers: Record<string, string>
  method: 'GET' | 'POST'
  queryable?: TypeId[] | ((type: GQLType) => boolean)
}

// GraphQL specific types
// Exported for unit tests
export type GQLKind = 'SCALAR' | 'OBJECT' | 'LIST' | 'NON_NULL' | 'UNION'

export interface GQLOfType {
  name?: string,
  kind: GQLKind,
  ofType?: GQLOfType,
  possibleTypes?: {name: string, kind: GQLKind}[],
}
export interface GQLField {
  name: string,
  type: GQLOfType,
  args?: {
    name: string,
    type: GQLOfType,
    defaultValue?: string,
  }[],
}
export interface GQLType {
  name: string,
  fields: GQLField[],
}

/**
 * Useful interface to create a tree of fields
 * Exported for unit tests
 */
export interface Tree {
  token: FieldProperty
  children: Tree[]
}

/**
 * Utility function to shallow compare two objects
 * Used to compare options of tree items
 */
function shallowEqual(option1: FieldOptions | undefined, option2: FieldOptions | undefined) {
  // Handle the case where one or both are undefined
  if(!option1 && !option2) return true
  if(!option1 || !option2) return false

  const keys1 = Object.keys(option1);
  const keys2 = Object.keys(option2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (option1[key] !== option2[key]) {
      return false;
    }
  }

  return true;
}

/**
 * GraphQL DataSource implementation
 * This is a Backbone model used in the DataSourceManager collection
 */
export default class GraphQL extends Backbone.Model<GraphQLOptions> implements IDataSource {
  protected types: Type[] = []
  protected queryables: Field[] = []
  protected ready = false
  constructor(options: GraphQLOptions) {
    super(options)
    this.set('id', options.id)
    this.set('label', options.label)
    this.set('url', options.url)
    this.set('headers', options.headers)
    this.set('queryable', options.queryable)
  }
  /**
   * @throws Error
   */
  protected triggerError<T>(message: string): T {
    this.trigger(DATA_SOURCE_ERROR, {message})
    throw new Error(message)
  }
  protected async loadData(): Promise<[Type[], Field[]]> {
    try {
      const result = await this.call(graphqlIntrospectionQuery) as {data: {__schema: {types: GQLType[]}}}
      if (!result.data?.__schema?.types) return this.triggerError(`Invalid response: ${JSON.stringify(result)}`)
      const allTypes = result.data.__schema.types.map((type: GQLType) => type.name)
          .concat(builtinTypeIds)

      const query: GQLType | undefined = result.data.__schema.types.find((type: GQLType) => type.name === 'Query')

      if(!query) return this.triggerError(`Invalid response: ${JSON.stringify(result)}`)

      // Get non-queryable types
      const nonQueryables = result.data.__schema.types
        // Filter out Query, Mutation, Subscription
        .filter((type: GQLType) => !['Query', 'Mutation', 'Subscription'].includes(type.name))
        // Filter out introspection types
        .filter((type: GQLType) => !type.name.startsWith('__'))
        // Filter out types that are not in Query
        //.map((type: GQLType) => query?.fields.find((field: GQLField) => field.name === type.name) ?? type)
        // Filter out types that are in Query (the queryables are handled separately)
        .filter((type: GQLType) => !query?.fields.find((field: GQLField) => field.name === type.name))

        // Map to Type
        .map((type: GQLType) => this.graphQLToType(allTypes, type, 'SCALAR', false))
        // Add builtin types
        .concat(builtinTypes)

      // Get queryable types
      const queryableTypes = query.fields
        // Map to GQLType, keeping kind for later
        .map((field: GQLField) => ({
          type: {
            ...result.data.__schema.types.find((type: GQLType) => type.name === this.getOfTypeProp<string>('name', field.type, field.name)),
            name: field.name,
          } as GQLType,
          kind: this.ofKindToKind(field.type),
        }))
        // Map to Type
        .map(({type, kind}) => this.graphQLToType(allTypes, type, kind, true))
      
      // Get all queryables as fields
      const queryableFields = query.fields
        // Map to Field
        .map((field: GQLField) => this.graphQLToField(field))
      
      // Return all types, queryables and non-queryables
      return [queryableTypes.concat(nonQueryables), queryableFields]
    } catch (e) {
      return this.triggerError(`GraphQL introspection failed: ${(e as Error).message}`)
    }
  }
  protected graphQLToField(field: GQLField): Field {
    return {
      id: field.name,
      dataSourceId: this.get('id')!,
      label: field.name,
      typeIds: this.graphQLToTypes(field),
      kind: this.graphQLToKind(this.ofKindToKind(field.type)),
      arguments: field.args?.map(arg => ({
        name: arg.name,
        typeId: this.getOfTypeProp<string>('name', arg.type, arg.name),
        defaultValue: arg.defaultValue,
      })),
    }
  }

  /**
   * Recursively search for a property on a GraphQL type
   * Check the deepest values in ofType first
   */
  protected getOfTypeProp<T>(prop: string, type: GQLOfType, defaultValue?: T): T {
    const result = this.getOfTypePropRecursive<T>(prop, type)
    if(result) return result
    if(defaultValue) return defaultValue
    throw new Error(`Type ${JSON.stringify(type)} has no property ${prop} and no default was provided`)
  }

  protected getOfTypePropRecursive<T>(prop: string, type: GQLOfType): T | undefined {
    if(!type) {
      console.error('Invalid type', type)
      throw new Error('Invalid type')
    }
    if(type.ofType) {
      const ofTypeResult = this.getOfTypePropRecursive<T>(prop, type.ofType)
      if(ofTypeResult) return ofTypeResult
    }
    return type[prop as keyof GQLOfType] as T
  }

  /**
   * Recursively search for a property on a GraphQL type
   * Handles Union types with possibleTypes
   * Handles list and object and non-null types with ofType
   */
  protected graphQLToTypes(field: GQLField): TypeId[] {
    if(field.type.possibleTypes) return field.type.possibleTypes.map(type => type.name)
    return [this.getOfTypeProp<string>('name', field.type, field.name)]
  }

  /**
   * Convert GraphQL kind to FieldKind
   * @throws Error if kind is not valid or is NON_NULL
   */
  protected graphQLToKind(kind: GQLKind): FieldKind {
    switch(kind) {
      case 'LIST': return 'list'
      case 'OBJECT': return 'object'
      case 'SCALAR': return 'scalar'
      case 'UNION':
      case 'NON_NULL':
      default:
        throw new Error(`Unable to find a valid kind for ${kind}`)
    }
  }

  /**
   * Check if a GraphQL kind has a valid FieldKind equivalent
   */
  protected validKind(kind: GQLKind): boolean {
    return ['LIST', 'OBJECT', 'SCALAR'].includes(kind)
  }

  /**
   * Recursively search for a GraphQL kind of type list, object or scalar
   */
  protected ofKindToKind(ofKind: GQLOfType): GQLKind {
    if(ofKind.possibleTypes) {
      const foundKind = ofKind.possibleTypes
      .reduce((prev: GQLKind | null, type: {kind: GQLKind, name: string}) => {
        if(!prev) return type.kind as GQLKind
        if(prev !== type.kind) {
          console.error('Unable to find a valid kind, union types with different kind is not supported', ofKind)
          throw new Error(`Unable to find a valid kind for ${ofKind.kind}. Union types with different kind is not supported`)
        }
        return prev as GQLKind
      }, null)
      if(!foundKind) {
        console.error('Unable to find a valid kind', ofKind)
        throw new Error(`Unable to find a valid kind for ${ofKind.kind}`)
      }
      return foundKind
    }
    if(this.validKind(ofKind.kind)) return ofKind.kind
    if(ofKind.ofType) return this.ofKindToKind(ofKind.ofType)
    console.error('Unable to find a valid kind', ofKind)
    throw new Error(`Unable to find a valid kind for ${ofKind.kind}`)
  }

  /**
   * Convert a GraphQL type to a Type
   */
  protected graphQLToType(allTypes: TypeId[], type: GQLType, kind: GQLKind, queryable: boolean): Type {
    const queryableOverride = this.get('queryable')
    const result = {
      id: type.name,
      dataSourceId: this.get('id')!,
      label: type.name,
      fields: type.fields
        // Do not include fields that are not in the schema
        // FIXME: somehow this happens with fields of type datetime_functions for directus
        //?.filter((field: {name: string, type: any}) => allTypes.includes(field.name))
        ?.filter((field) => allTypes.includes(this.getOfTypeProp<string>('name', field.type, field.name)))
        ?.map(field => this.graphQLToField(field))
        ?? [],
      queryable: queryable && (!queryableOverride || (queryableOverride instanceof Array
        ? queryableOverride!.includes(type.name)
        : queryableOverride!(type))
      ),
    }
    return result
  }

  /**
   * Connect to the GraphQL endpoint and load the schema
   * This has to be implemented as it is a DataSource method
   */
  async connect(): Promise<void> {
    try {
      // const result = await this.call(`
      //     query {
      //       __typename
      //     }
      //   `) as any
      // if (!result?.data?.__typename) return this.triggerError(`Invalid response: ${JSON.stringify(result)}`)
      const [types, fields] = await this.loadData()
      this.types = types
      this.queryables = fields
      this.ready = true
      this.trigger(DATA_SOURCE_READY)
    } catch (e) {
      return this.triggerError(`GraphQL connection failed: ${(e as Error).message}`)
    }
  }

  /**
   * Get all types
   * This has to be implemented as it is a DataSource method
   */
  getTypes(): Type[] {
    return this.types
  }

  /**
   * Get all queryable fields
   * This has to be implemented as it is a DataSource method
   */
  getQueryables(): Field[] {
    return this.queryables
  }

  /**
   * Call the GraphQL endpoint
   */
  protected async call(query: string): Promise<unknown> {
    const url = this.get('url')
    if (!url) return this.triggerError('Missing GraphQL URL')
    const headers = this.get('headers')
    if(!headers) return this.triggerError('Missing GraphQL headers')
    const method = this.get('method') ?? 'POST'
    // GraphQL Introspcetion
    const response = await fetch(url, {
      method,
      headers,
      // Body when POST
      ...(method === 'POST' ? {
        body: JSON.stringify({ query }),
      } : {}),
    })
    if (!response?.ok) {
      console.error('GraphQL call failed', response?.status, response?.statusText, query)
      return this.triggerError(`GraphQL call failed with \`${response?.statusText}\` and status ${response?.status}`)
    }
    return response.json()
  }

  getQuery(expressions: Expression[]): string {
    if(expressions.length === 0) return ''
    const tree: Tree = expressions
      // From Expression to Tree
      .map(expression => this.getTree(expression
        // Ignore filters
        .filter(token => token.type !== 'filter'))
      )
      // Add the main query object which is the root of the tree
      .map(tree => ({
        token: {
          dataSourceId: tree.token.dataSourceId,
          fieldId: 'query',
          kind: 'object',
        },
        children: [tree],
      } as Tree))
      // Merge all trees from the root
      .reduce((finalTree, tree) => this.mergeTrees(finalTree, tree))
    // To GraphQL query
    return this.buildQuery(tree)
  }

  protected getTree(expression: Expression): Tree {
    const next = expression[0]
    switch(next.type) {
      case 'property':
        return {
          token: next,
          children: expression.length > 1
            ? [this.getTree(expression.slice(1))]
            : [],
        }

      case 'filter':
      case 'state': // This will not occure as components states are resolved to properties and filters
      default:
        console.error('Invalid expression', expression)
        throw new Error(`Invalid expression ${JSON.stringify(expression)}`)
    }
  }

  /**
   * Recursively merge two trees
   */
  protected mergeTrees(tree1: Tree, tree2: Tree): Tree {
    if (tree1.token.kind !== tree2.token.kind || tree1.token.dataSourceId !== tree2.token.dataSourceId) {
      console.error('Unable to merge trees', tree1, tree2)
      throw new Error(`Unable to build GraphQL query: unable to merge trees ${JSON.stringify(tree1)} and ${JSON.stringify(tree2)}`)
    }
    const different = tree1.children
      .filter(child1 => !tree2.children.find(child2 =>
        child1.token.fieldId === child2.token.fieldId
        && shallowEqual(child1.token.options, child2.token.options)
      ))
      .concat(tree2.children
        .filter(child2 => !tree1.children.find(child1 =>
          child1.token.fieldId === child2.token.fieldId
          && shallowEqual(child1.token.options, child2.token.options)
        ))
      )
    const same = tree1.children
      .filter(child1 => tree2.children.find(child2 =>
        child1.token.fieldId === child2.token.fieldId
        && shallowEqual(child1.token.options, child2.token.options)
      ))

    return {
      token: tree1.token,
      children: different
        .concat(same
          .map(child1 => {
            const child2 = tree2.children.find(child2 => child1.token.fieldId === child2.token.fieldId)
            return this.mergeTrees(child1, child2!)
          })),
    }
  }

  /**
   * Build a GraphQL query from a tree
   */
  protected buildQuery(tree: Tree, indent = ''): string {
    switch(tree.token.kind) {
      case 'scalar':
        return indent + tree.token.fieldId
      case 'object':
      case 'list': {
        // Children
        const children = tree.children
          .map(child => this.buildQuery(child, indent + '  '))
          .join('\n')
        // Arguments
        const args = tree.token.options ? `(${
          Object
          .keys(tree.token.options)
          .map(key => ({key, value: tree.token.options![key]}))
          .map(({key, value}) => typeof value === 'string' ? `${key}: "${value}"` : `${key}: ${value}`)
          .join(', ')
        })` : ''
        // The query
        return dedent`${indent}${tree.token.fieldId}${args} {
        ${children}
        ${indent}}`
      }
      default:
        console.error('Unable to build GraphQL query', tree)
        throw new Error(`Unable to build GraphQL query: unable to build tree ${JSON.stringify(tree)}`)
    }
  }

  //async getData(query: Query): Promise<any[]> {
  //  const result = await this.call(`
  //      query {
  //        ${this.buildQuery(query)}
  //      }
  //    `) as any
  //  return result.data.Query[query.name]
  //}
}
