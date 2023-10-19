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

import { Component } from 'grapesjs'
import { Context, DATA_SOURCE_CHANGED, DATA_SOURCE_READY, DataSourceId, Expression, Field, FieldArgument, FieldProperty, Filter, IDataSource, Options, State, StateId, Token, Type, TypeId } from '../types'
import { getStateIds, getState, getOrCreatePersistantId, findComponentByPersistentId } from './state'
import { DataSourceEditor } from '..'
import getLiquidFilters from '../filters/liquid'
import getGenericFilters from '../filters/generic'

/**
 * Options of the data tree
 * They can be set on the instance too
 */
export interface DataTreeOptions {
  filters: Partial<Filter>[]
  dataSources: IDataSource[]
}

export class DataTree {
  public dataSources: IDataSource[] = []
  public filters: Filter[] = []

  /**
   * All types from all data sources
   * Read only, updated when data sources are updated
   */
  protected _allTypes: Type[] = []
  public get allTypes(): Type[] {
    return this._allTypes
  }

  /**
   * All queryable fields from all data sources
   */
  protected _queryables: Field[] = []
  public get queryables(): Field[] {
    return this._queryables
  }

  constructor(protected editor: DataSourceEditor, options: DataTreeOptions) {
    this.dataSources = options.dataSources
    this.filters = typeof options.filters === 'string'
      // Include preset from filters/
      ? [
        ...getGenericFilters(this),
        ...getLiquidFilters(this),
      ]
      // Define filters in the options
      : options.filters.map((filter: Partial<Filter>) => ({
      type: 'filter',
      ...filter,
    } as Filter))
    // Check that all filters have required fields
    this.filters.forEach((filter: Filter) => {
      if(!filter.id) throw new Error('Filter id is required')
      if(!filter.name) throw new Error('Filter name is required')
      if(!filter.validate) throw new Error('Filter validate is required')
      if(!filter.output) throw new Error('Filter outputType is required')
      if(!filter.apply) throw new Error('Filter apply is required')
    })
    editor.on(`${DATA_SOURCE_CHANGED} ${DATA_SOURCE_READY}`, () => {
      this._allTypes = this.getAllTypes()
      this._queryables = this.getAllQueryables()
    })
    this._allTypes = this.getAllTypes()
    this._queryables = this.getAllQueryables()
  }

  /**
   * Get all types from all data sources
   */
  getAllTypes(): Type[] {
    return this.dataSources
      .flatMap((dataSource: IDataSource) => {
        return dataSource.getTypes()
      })
  }

  /**
   * Get all queryable fields from all data sources
   */
  getAllQueryables(): Field[] {
    return this.dataSources
      .flatMap((dataSource: IDataSource) => {
        return dataSource.getQueryables()
      })
  }

  /**
   * Get the options of a token
   */
  getTokenOptions(field: Field): { optionsForm: (input: Field | null, options: Options) => string, options: Options} | null {
    if (field.arguments && field.arguments.length > 0) {
      return {
        optionsForm: (input: Field | null, options: Options) => {
          return `
            <form>
              ${
                field.arguments!.map((arg: FieldArgument) => {
                  const value = options[arg.name] ?? arg.defaultValue ?? ''
                  return `<label>${arg.name}</label><input type="text" name="${arg.name}" value="${value}">`
                }).join('\n')
              }
              <div class="buttons">
                <input type="reset" value="Cancel">
                <input type="submit" value="Apply">
              </div>
            </form>
          `
        },
        options: field.arguments!.reduce((options: Record<string, unknown>, arg: FieldArgument) => {
          options[arg.name] = arg.defaultValue
          return options
        }, {}),
      }
    }
    return null
  }

  /**
   * Get the context of a component
   * This includes all parents states, data sources queryable values, values provided in the options
   */
  getContext(component = this.editor.getSelected()): Context {
    if(!component) {
      console.error('Component is required for context')
      throw new Error('Component is required for context')
    }
    // Get all queryable values from all data sources
    const queryable: FieldProperty[] = this.queryables
      .map((field: Field) => {
        if(!field.dataSourceId) throw new Error(`Type ${field.id} has no data source`)
        return {
          type: 'property',
          propType: 'field',
          fieldId: field.id,
          typeIds: field.typeIds,
          dataSourceId: field.dataSourceId,
          kind: field.kind,
          ...this.getTokenOptions(field) ?? {},
        }
      })
    // Get all states in the component scope
    const states: State[] = []
    let parent = component
    while(parent) {
      const parentStates: State[] = getStateIds(parent, true)
        .map((stateId: StateId) => ({
          type: 'state',
          id: stateId,
          componentId: getOrCreatePersistantId(parent),
          exposed: true,
        }))
      states.push(...parentStates)
      parent = parent.parent() as Component
    }
    // Get filters which accept no input
    const filters: Filter[] = this.filters
      .filter(filter => filter.validate(null))
    // Return the context
    return [
      ...queryable,
      ...states,
      ...filters,
    ]
  }

  /**
   * Evaluate an expression to a value
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getValue(context: Context, expression: Expression): unknown {
    throw new Error('Not implemented')
  }

  findType(typeId: TypeId, dataSourceId?: DataSourceId): Type | null {
    return this.allTypes
      .find((type: Type) => (!dataSourceId || type.dataSourceId === dataSourceId) && type.id === typeId) ?? null
  }

  /**
   * Get the type corresponding to a token
   */
  tokenToField(token: Token, prev: Field | null): Field | null {
    switch (token.type) {
      case 'filter': {
        if(token.validate(prev)) {
          return token.output(prev, token.options ?? {})
        }
        return null
      }
      case 'property':
        switch (token.propType) {
          //case 'type':
          //  return this.findType(token.typeId, token.dataSourceId) ?? null
          case 'field': {
            const typeNames = token.typeIds
              .map((typeId: TypeId) => this.findType(typeId, token.dataSourceId))
              .map((type: Type | null) => type?.name)

            return {
              id: token.fieldId,
              name: typeNames.join(', '),
              typeIds: token.typeIds,
              kind: token.kind,
              dataSourceId: token.dataSourceId,
            }
          }
          default:
            console.error('Unknown property type (reading propType)', token)
            throw new Error('Unknown property type')
        }
      case 'state': {
        const component = findComponentByPersistentId(token.componentId, this.editor)
        if(!component) {
          console.error('Component not found for state', token)
          throw new Error('Component not found for state evaluation')
        }
        const expression = getState(component, token.id, token.exposed)?.expression
        if(!expression) {
          console.warn('State is not defined on component', { component, token })
          return null
        }
        return this.getExpressionResultType(expression)
      }
      default:
        console.error('Unknown token type (reading type)', token)
        throw new Error('Unknown token type')
    }
  }

  /**
   * Evaluate the types of each token in an expression
   */
  expressionToFields(expression: Expression): Field[] {
    // Resolve type of the expression 1 step at a time
    let prev: Field | null = null
    return expression.map((token: Token) => {
      const field = this.tokenToField(token, prev)
      if(!field) {
        console.warn('Type not found for token in expressionToFields', {token, expression})
        return {
          id: 'unknown',
          name: 'unknown',
          typeIds: [],
          kind: 'scalar',
        }
      }
      prev = field
      return field
    })
  }

  /**
   * Evaluate an expression to a type
   * This is used to validate expressions and for autocompletion
   */
  getExpressionResultType(expression: Expression): Field | null {
    // Resolve type of the expression 1 step at a time
    return expression.reduce((prev: Field | null, token: Token) => {
      return this.tokenToField(token, prev)
    }, null)
  }

  /**
   * Auto complete an expression
   * @returns a list of possible tokens to add to the expression
   */
  getCompletion(component: Component, expression: Expression): Context {
    if(!component) throw new Error('Component is required for completion')
    if(!expression) throw new Error('Expression is required for completion')
    if(expression.length === 0) return this.getContext(component)
    const field = this.getExpressionResultType(expression)
    if(!field) {
      console.warn('Result type not found for expression', expression)
      return []
    }
    return ([] as Token[])
      // Add fields if the kind is object
      .concat(field.kind === 'object' ? field.typeIds
        // Find possible types
        .map((typeId: TypeId) => this.findType(typeId, field.dataSourceId))
        // Add all of their fields
        .flatMap((type: Type | null) => type?.fields ?? [])
        // To token
        .map(
          (field: Field): Token  => {
            // const t: Type | null = this.findType(field.typeIds, field.dataSourceId) 
            // if(!t) throw new Error(`Type ${field.typeIds} not found`)
            return {
              type: 'property',
              propType: 'field',
              typeIds: field.typeIds,
              fieldId: field.id,
              kind: field.kind,
              dataSourceId: field.dataSourceId,
              ...this.getTokenOptions(field) ?? {},
            }
          }
        ) : [])
      // Add filters
      .concat(
        this.filters
          // Match input type
          .filter(filter => filter.validate(field))
      )
  }
}
