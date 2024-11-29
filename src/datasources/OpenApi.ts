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
import * as hashes from 'hash-wasm';
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
  protected securityParams: any[] = [];
  get types() {
    if (this._types) {
      const doc = this.get('doc');
      if (doc) {
        this._types = Object.entries(doc.components.schemas)
          .map(([type, schema]) => {
            return this.toType(type, schema)
          })
          .concat(
            Object.entries(doc.paths)
              .flatMap(
                ([path, methods]) => Object.entries(methods)
                  .flatMap(([method, def]) => {
                    const auxTypes = [];
                    const type = {
                      id: [method, path, 'response'].join('_'),
                      dataSourceId: this.get('id'),
                      label: [method.toUpperCase(), path, 'Response'].join(' '),
                      fields: Object.entries(def.responses)
                        .map(([code, { content }]: [string, any]) => {
                          const namespace = [method, path, code, 'response'].join('_');
                          const jsonSchema = content?.['application/json']?.schema;
                          const id = code.toString();
                          const dataSourceId = this.get('id');
                          const label = [code, "Response"].join(' ');
                          if (!jsonSchema) return {
                            id,
                            label,
                            dataSourceId,
                            kind: 'scalar',
                            typeIds: ['String']
                          };
                          const schema = jsonSchema.$ref ? this.resolve(jsonSchema.$ref) : jsonSchema;
                          // console.log("the schema", { method, path, code, content, schema });
                          let kind = 'object';
                          const typeIds = [];
                          if (schema.type) {
                            if (schema.type === 'object') kind = 'object'
                            else if (schema.type === 'array') kind = 'list'
                            else kind = 'scalar';
                          }
                          if (jsonSchema.$ref) {
                            typeIds.push(jsonSchema.$ref);
                          } else {
                            if (schema.type === 'array' && schema.items) {
                              typeIds.push(namespace);
                              auxTypes.push(this.toType(namespace, schema.items, false))
                            } else if (schema.type === 'object' && schema.properties) {
                              auxTypes.push(this.toType(namespace, schema, false))
                              typeIds.push(namespace);
                            } else if (TYPE_MAP[schema.type]) {
                              typeIds.push(TYPE_MAP[schema.type]);
                            }
                          }
                          // auxTypes.length && console.log("aux types:", auxTypes);
                          return {
                            id,
                            label,
                            typeIds,
                            kind,
                            dataSourceId,
                          } as Field
                        }).filter(Boolean)
                    } as any;
                    return [...auxTypes, type];
                  })
              )
          )
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
      method: this.get('method'),
      headers: this.get('headers') || {}
    });
    const doc = await res.json();
    if (doc?.components?.securitySchemes)
      for (const name in doc.components.securitySchemes) {
        const securitySchema = doc.components.securitySchemes[name];
        if (securitySchema.in && securitySchema.name) {
          this.securityParams.push({
            name: securitySchema.name,
            in: securitySchema.in,
            schema: {
              type: 'string'
            }
          })
        }
      }
    doc.fieldMappings = {};
    (Object.entries(doc.paths).forEach(([path, methods]) => {
      (Object.entries(methods).forEach(([method, def]) => {
        if (!def) return;
        const fieldId = this.getFieldId(path, method, def);
        const options = {};
        const body = this.getBody(def);
        const bodyType = body && this.getBodyType(body);
        def?.parameters && (def.parameters.concat(this.securityParams).filter(Boolean).forEach(_param => {
          const param = _param?.$ref ? this.resolve(_param?.$ref) : _param;
          if (!param) return;
          const key = OpenApi.toFieldId(path, method, param.name);
          options[key] = {
            name: param.name,
            in: param.in
          }
        }));
        bodyType && bodyType?.properties && (Object.entries(bodyType.properties).forEach(([k, v]) => {
          const key = OpenApi.toFieldId(path, method, k);
          options[key] = {
            name: k,
            in: "body"
          }
        }));
        doc.fieldMappings[fieldId] = {
          path,
          method,
          options
        };
      }));
    }));
    
    this.set('doc', doc);
    this.connected = true;

  }
  static toFieldId(path, method: string, name: any) {
    let str = [path, method, name].join(':').toLowerCase();
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32bit integer
    }
    const ret = btoa(hash.toString());
    return ret;
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
  toType(type: string, schema: any, prefixed = true): Type {
    if (schema.$ref) schema = this.resolve(schema.$ref);
    return {
      id: (prefixed ? '#/components/schemas/' : '') + type,
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
    if (ret?.$ref) return this.resolve(ret.$ref);
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

    const body: any = this.getBody(def);
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
    const bodyType = this.getBodyType(body);
    return {
      id: this.getFieldId(path, method, def),
      label: def.operationId ? `${def.operationId} (${method} ${path})` : method + ' ' + path,
      arguments: (def.parameters || []).concat(this.securityParams)
        .map(_param => _param?.$ref ? this.resolve(_param?.$ref) : _param)
        .filter(Boolean)
        .map((t: any) => ({
          name: OpenApi.toFieldId(path, method, t.name),
          label: t.name,
          typeId: this.getSchemaTypes(t.schema)[0],
          defaultValue: '',
        }))
        .concat(body && bodyType?.type === 'object' && Object.entries(bodyType.properties)
          .map(([k, v]) => ({
            name: OpenApi.toFieldId(path, method, k),
            label: k,
            typeId: this.getSchemaTypes(v)[0],
            defaultValue: '',
          })))
        .filter(Boolean),
      dataSourceId: this.get('id'),
      typeIds: [[method.toLowerCase(), path, 'response'].join('_')],// [...new Set(schemas.flatMap(this.getSchemaTypes.bind(this)))] as any[],
      kind: 'object'
    }
  }
  getBodyType(body: any) {
    return body?.schema?.items?.$ref ? this.resolve(body?.schema?.items?.$ref) : body?.type ? body.type : this.resolve(body?.schema?.$ref)
  }
  getBody(def: any): any {
    return Object.values(def?.requestBody?.content || {})[0]
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
