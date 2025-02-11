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

import Backbone from 'backbone'
import { DATA_SOURCE_ERROR, DATA_SOURCE_READY, Field, FieldKind, IDataSource, IDataSourceOptions, Tree, Type, TypeId, builtinTypeIds, builtinTypes } from '../types'
import { FIXED_TOKEN_ID } from '../utils'
import { buildArgs } from '../model/token'
import snakecase from 'snakecase';
const TYPE_MAP = {
  'string': "String",
  "number": "Number",
  "integer": "Int",
  "boolean": "Boolean",
  "array": "Array",
  "object": "Object"
}
const KIND_PRIORITY = {
  'list': 0,
  'object': 1,
  'scalar': 2,
  'unknown': 3
}
const KINDS = {
  'object': 'object',
  'array': 'list'
}
/**
 * OpenApi Data source options
 */
interface OpenApiQueryOptions {
  url: string
  headers: Record<string, string>
  method: 'GET'
  queryable?: TypeId[]
  readonly?: boolean
  doc?: any,
}

/**
 * OpenApi Data source options with server to server options
 */
export interface OpenApiOptions extends OpenApiQueryOptions, IDataSourceOptions {
  serverToServer?: OpenApiQueryOptions
}

/**
 * OpenApi DataSource implementation
 * This is a Backbone model used in the DataSourceManager collection
 */
export default class OpenApi extends Backbone.Model<OpenApiOptions> implements IDataSource {


  protected _types: Type[] = [];
  protected _queryables: Field[] = [];
  protected connected: boolean = false;
  get types() {
    if (this._types) {
      const doc = this.get('doc');
      if (doc) {
        this._types = Object.entries(doc.components.schemas)
          .map(([type, schema]) => {
            return this.toType(type, schema)
          })
          .concat(
            ['String', 'Int', 'Float', 'Boolean', 'ID', 'Unknown']
              .map(t => ({
                id: t,
                dataSourceId: this.get('id'),
                label: t,
                fields: []
              }))
          )
      }
    }
    return this._types;
  }
  get queryables() {
    if (this._queryables) {
      const doc = this.get('doc');
      if (doc) {
        this._queryables = Object.entries(doc.paths)
          .flatMap(([path, methods]) => {
            return Object.entries(methods as any)
              .map(([method, def]) => {
                return this.toQueryable(path, method, def)
              })
          });
      }
    }
    return this._queryables;
  }
  constructor(options: OpenApiOptions) {
    super(options)
    this.set('id', options.id)
    this.set('label', options.label)
    this.set('url', options.url)
    this.set('headers', options.headers)
    this.set('queryable', options.queryable)
    this.set('method', 'GET')
    this.set('readonly', options.readonly)
  }
  hidden?: boolean | undefined
  async connect(): Promise<void> {
    const res = await fetch((this.get('url') as string), {
      method: this.get('method')
    });
    const doc = await res.json();
    doc.fieldMappings = {};
    Object.entries(doc.paths).forEach(([path, methods]) => {
      Object.entries(methods).forEach(([method, def]) => {
        const fieldId = this.getFieldId(path, method, def);
        doc.fieldMappings[fieldId] = {
          path,
          method
        };
      });
    });
    this.set('doc', doc);
    this.connected = true;

  }
  isConnected(): boolean {
    return this.connected;
  }
  getTypes(): Type[] {
    return this.types;
  }
  getQueryables(): Field[] {
    return this.queryables;
  }
  getQuery(trees: Tree[]): string {
    return '<server-side-rendered>'
  }
  toType(type: string, schema: any): Type {
    return {
      id: '#/components/schemas/' + type,
      dataSourceId: this.get('id'),
      label: type,
      fields: Object.entries(schema.properties)
        .map(([name, schema]) => this.toField(name, schema))
    }
  }
  toField(name: string, schema: any): Field {
    return ({
      id: name,
      label: name,
      typeIds: [...new Set(this.getSchemaTypes(schema))],
      kind: this.getKind(schema),
      dataSourceId: this.get('id')
    })
  }
  getSchemaTypes(schema: any): string[] {
    if (!schema) return [];
    if (schema.oneOf) {
      return schema.oneOf.flatMap((s: any) => this.getSchemaTypes(s));
    }
    if (schema.anyOf) {
      return schema.anyOf.flatMap((s: any) => this.getSchemaTypes(s));
    }
    if (schema.allOf) {
      return schema.allOf.flatMap((s: any) => this.getSchemaTypes(s));
    }
    if (schema.type === 'array' && schema.items) {
      return this.getSchemaTypes(schema.items);
    }
    return [schema.$ref || TYPE_MAP[schema.type as keyof typeof TYPE_MAP] || schema.type];
  }
  resolve($ref: string): any {
    if (!$ref) return null;
    if ($ref.charAt(0) !== '#') throw new Error('Can only resolve local references.');
    const path = $ref.split('/').slice(1);
    const ret = path.reduce((target: any, part) => {
      return target?.[part];
    }, this.get('doc'))
    if (ret.$ref) return this.resolve(ret.$ref);
    return ret;
  }

  getKind(schema: any): FieldKind {
    if (schema.oneOf) {
      return schema.oneOf.flatMap((s: any) => this.getKind(s)).sort((a: FieldKind, b: FieldKind) => KIND_PRIORITY[a] - KIND_PRIORITY[b])[0];
    }
    if (schema.anyOf) {
      return schema.anyOf.flatMap((s: any) => this.getKind(s)).sort((a: FieldKind, b: FieldKind) => KIND_PRIORITY[a] - KIND_PRIORITY[b])[0];
    }
    if (schema.allOf) {
      return schema.allOf.flatMap((s: any) => this.getKind(s)).sort((a: FieldKind, b: FieldKind) => KIND_PRIORITY[a] - KIND_PRIORITY[b])[0];
    }

    const type = schema.type || (this.resolve(schema.$ref))?.type;
    if (type === 'array') return 'list';
    if (type === 'object') return 'object';
    else return Boolean(type) ? 'scalar' : 'unknown';
  }
  toQueryable(path: string, method: string, def: any): Field {

    const body: any = Object.values(def?.requestBody?.content || {})[0];
    const responses: any[] = Object.values(def?.responses || {}).filter((r: any) => r.content);
    const schemas = responses.flatMap(r => Object.values(r.content).flatMap((c: any) => c.schema)).filter(Boolean);
    let kind: FieldKind = 'scalar';
    for (const schema of schemas) {
      const newKind = this.getKind(schema);
      if (KIND_PRIORITY[newKind] < KIND_PRIORITY[kind]) {
        kind = newKind;
        if (kind === 'list') break;
      }
    }
    method = method.toUpperCase();
    const bodyType = this.resolve(body?.schema?.items?.$ref) || body?.type || this.resolve(body?.schema?.$ref);
    return {
      id: this.getFieldId(path, method, def),
      label: def.operationId ? `${def.operationId} (${method} ${path})` : method + ' ' + path,
      arguments: (def.parameters || [])
        .map((t: any) => ({
          name: t.name,
          typeId: this.getSchemaTypes(t.schema)[0],
          defaultValue: '',
        }))
        .concat(body && bodyType?.type === 'object' && Object.entries(bodyType.properties)
          .map(([k, v]) => ({
            name: 'body.' + k,
            typeId: this.getSchemaTypes(v)[0],
            defaultValue: '',
          })))
        .filter(Boolean),
      dataSourceId: this.get('id'),
      typeIds: [...new Set(schemas.flatMap(this.getSchemaTypes.bind(this)))] as any[],
      kind
    }
  }
  getFieldId(path: string, method: string, def: any): string {
    let fieldId = def.operationId ? `${def.operationId} (${method} ${path})` : method + ' ' + path;
    fieldId = snakecase(fieldId);
    return fieldId;
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
