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
import { debounce } from 'underscore'
import _set from 'lodash.set';
import Backbone from 'backbone'
import { COMPONENT_STATE_CHANGED, DATA_SOURCE_CHANGED, DATA_SOURCE_ERROR, DATA_SOURCE_READY, DataSourceId, Field, Filter, IDataSource, IDataSourceModel, Property, StoredToken, Type } from '../types'
import { DataSourceEditor, DataSourceEditorOptions, getComponentDebug, NOTIFICATION_GROUP } from '..'
import { DataTree } from './DataTree'
import { Component, Page } from 'grapesjs'
import { StoredState, StoredStateWithId, onStateChange } from './state'
import getLiquidFilters from '../filters/liquid'
import getGenericFilters from '../filters/generic'
import { createJSONEditor, renderValue } from 'vanilla-jsoneditor/standalone.js'
import { html, render } from 'lit'
import { ref } from 'lit/directives/ref.js'
import jsoneditorCss from './fixtures/jsoneditor.css.js'
import { JSONEditorPropsOptional } from 'vanilla-jsoneditor'


/**
 * FIXME: Why sometimes the methods of the data source are in the attributes?
 * @return ds if it has the getTypes method or ds.attributes if it has the getTypes method
 */
export function getDataSourceClass(ds: IDataSource | { attributes: IDataSource }): IDataSource {
  const unknownTyped = ds as Record<string, unknown>
  if (typeof unknownTyped.getTypes === 'function') return ds as IDataSource
  const unknownAttributes = unknownTyped.attributes as Record<string, unknown>
  if (typeof unknownAttributes.getTypes === 'function') return unknownTyped.attributes as IDataSource
  console.error('Data source has no getTypes method', ds)
  throw new Error('Data source has no getTypes method')
}

/**
 * GrapesJs plugin to manage data sources
 */
export class DataSourceManager extends Backbone.Collection<IDataSourceModel> {
  protected dataTree: DataTree
  get filters() {
    return this.dataTree.filters
  }
  set filters(filters: Filter[]) {
    this.dataTree.filters = this.filters
  }
  editor: DataSourceEditor
  constructor(models: IDataSourceModel[], editor: DataSourceEditor, protected options: DataSourceEditorOptions) {
    super(models, options)
    this.editor = editor;
    // Make sure the operations are undoable
    this.editor.UndoManager.add(this)

    // Add filters from config
    const filters = (() => {
      // Include preset from filters/
      if (typeof options.filters === 'string') {
        return [
          ...getGenericFilters(editor),
          ...getLiquidFilters(editor),
        ]
      } else {
        // Define filters in the options
        return (options.filters as Filter[])
          .flatMap((filter: Partial<Filter> | string): Filter[] => {
            if (typeof filter === 'string') {
              switch (filter) {
                case 'liquid': return getLiquidFilters(editor)
                case 'generic': return getGenericFilters(editor)
                default: throw new Error(`Unknown filters ${filter}`)
              }
            } else {
              return [{
                ...filter as Partial<Filter>,
                type: 'filter',
              } as Filter]
            }
          })
          .map((filter: Filter) => ({ ...filter, type: 'filter' })) as Filter[]
      }
    })()
    const actions = new ActionsDataSource(this.editor);
    this.models.push(actions);

    const core = new CoreDataSource(this.editor);
    this.models.push(core);

    const http = new HttpDataSource(this.editor);
    this.models.push(http);

    // Init the data tree
    this.dataTree = new DataTree(editor, {
      dataSources: this.models,
      filters,
    })
    this.dataTree.BASE_DATA_SOURCES.push(actions);
    this.dataTree.BASE_DATA_SOURCES.push(core);
    this.dataTree.BASE_DATA_SOURCES.push(http);
    // Update the data tree when the data sources change
    this.on('add update remove change', () => this.modelChanged())
    this.on(DATA_SOURCE_READY, () => this.modelReady())

    // Start listening to data sources
    this.modelChanged()

    // Relay state changes to the editor
    onStateChange((state: StoredState | null, component: Component) => this.editor.trigger(COMPONENT_STATE_CHANGED, { state, component }))
  }

  /**
   * Get all data sources
   */
  getAll(): IDataSourceModel[] {
    return this.models
  }

  /**
   * Forward events from data sources to the editor
   */
  protected dataChangedBinded = this.dataChanged.bind(this)
  dataChanged(e?: CustomEvent) {
    this.editor.trigger(DATA_SOURCE_CHANGED, e?.detail)
  }

  /**
   * Forward events from data sources to the editor
   */
  protected dataSourceReadyBinded = this.dataSourceReady.bind(this)
  dataSourceReady(ds: IDataSource) {
    this.editor.trigger(DATA_SOURCE_READY, ds)
  }

  /**
   * Forward events from data sources to the editor
   */
  protected dataSourceErrorBinded = this.dataSourceError.bind(this)
  dataSourceError(message: string, ds: IDataSource) {
    this.editor.trigger(DATA_SOURCE_ERROR, message, ds)
  }

  /**
   * Listen to data source changes
   */
  modelChanged(e?: CustomEvent) {
    this.dataTree.dataSources = this.models.map(ds => getDataSourceClass(ds)) as IDataSourceModel[]
    // Remove all listeners
    this.models.forEach((dataSource: IDataSourceModel) => {
      dataSource.off(DATA_SOURCE_READY, this.dataSourceReadyBinded)
      dataSource.off(DATA_SOURCE_CHANGED, this.dataChangedBinded)
      dataSource.off(DATA_SOURCE_ERROR, this.dataSourceErrorBinded)
    })
    // Add listeners on all data sources
    this.models.forEach((dataSource: IDataSourceModel) => {
      dataSource.on(DATA_SOURCE_READY, this.dataSourceReadyBinded)
      dataSource.on(DATA_SOURCE_CHANGED, this.dataChangedBinded)
      dataSource.on(DATA_SOURCE_ERROR, this.dataSourceErrorBinded)
    })
    // Update undo manager
    this.editor.getModel().handleUpdates(this, this.toJSON())
    // Forward the event
    this.editor.trigger(DATA_SOURCE_CHANGED, e?.detail)
  }

  /**
   * Listen to data source changes
   */
  modelReady(e?: CustomEvent) {
    // Forward the event
    this.editor.trigger(DATA_SOURCE_READY, e?.detail)
  }

  getDataTree() {
    return this.dataTree
  }

  getPageQuery(page: Page): Record<DataSourceId, string> {
    const expressions = this.dataTree.getPageExpressions(page)
    return this.models
      .map(ds => {
        const dsExpressions = expressions
          // Resolve all states
          .map((componentExpression) => ({
            component: componentExpression.component,
            expression: componentExpression.expression.flatMap((token: StoredToken) => {
              switch (token.type) {
                case 'property':
                case 'filter':
                  return token
                case 'state': {
                  const resolved = this.dataTree.resolveState(token, componentExpression.component)
                  if (!resolved) {
                    this.editor.runCommand('notifications:add', {
                      type: 'error',
                      group: NOTIFICATION_GROUP,
                      message: `Unable to resolve state ${JSON.stringify(token)}. State defined on component ${getComponentDebug(componentExpression.component)}`,
                      componentId: componentExpression.component.getId(),
                    })
                    throw new Error(`Unable to resolve state ${JSON.stringify(token)}. State defined on component ${getComponentDebug(componentExpression.component)}`)
                  }
                  return resolved
                }
              }
            })
          }))
          // Keep only the expressions for the current data source
          .filter(componentExpression => {
            const e = componentExpression.expression
            if (e.length === 0) return false
            // We resolved all states
            // An expression can not start with a filter
            // So this is a property
            const first = e[0] as Property
            // Keep only the expressions for the current data source
            return first.dataSourceId === ds.id
          })
        const trees = this.dataTree.toTrees(dsExpressions, ds.id)
        if (trees.length === 0) {
          return {
            dataSourceId: ds.id.toString(),
            query: '',
          }
        }
        const query = getDataSourceClass(ds).getQuery(trees)
        return {
          dataSourceId: ds.id.toString(),
          query,
        }
      })
      .filter(obj => !!obj.query)
      .reduce((acc, { dataSourceId, query }) => {
        acc[dataSourceId] = query
        return acc
      }, {} as Record<DataSourceId, string>)
  }
}
function stateSetter(editor: DataSourceEditor, opts: any, anyKey = false): Field {
  const saveState = debounce(() => {
    editor.store();
  }, 1000);
  return {
    arguments: [
      {
        name: "key",
        typeId: "string",
        defaultValue: "key"
      },
      {
        name: "value",
        typeId: "unknown",
        defaultValue: "[]"
      }
    ],
    optionsForm: (selected, input, options: any, state) => {
      options.key ??= '';
      options.value ??= '[]';

      const states: StoredStateWithId[] = [];
      if (!anyKey) {

        let el: Component | undefined = selected;
        let elStates = el.get('publicStates');
        do {
          states.push(...(el.get('publicStates') || []));
        } while ((el = el.parent()))
      }
      return html`
      <label>
        <p>Key:</p>
        ${anyKey ?
          html`<input name="key" value=${options.key} type="text"/>`
          :
          html`<select @input=${saveState} name="key" value=${options.key}>
          ${states.map(s => {
            return html`
            ${s.id === options.key ?
                html`<option value=${s.id} selected>${s.label}</option>` :
                html`<option value=${s.id}>${s.label}</option>`
              }
            `
          })}`}
        </select>
    }
      </label>
      <state-editor
        .selected=${selected}
        .editor=${editor}
        name="value"
        data-is-input
        class="ds-state-editor__options"
        .value=${options.value}
        @change=${saveState}
      >
        <label slot="label">Value</label>
      </state-editor>
      `
    },
    typeIds: ['__actions'],
    kind: 'object',
    dataSourceId: ActionsDataSourceId,
    ...opts,

  }
}
function stateGetter(editor: DataSourceEditor, opts: any, ds?: string, type?: string): Field {
  // const saveState = debounce(() => {
  //   editor.store();
  // }, 1000);
  return {
    arguments: [
      {
        name: "key",
        typeId: "string",
        defaultValue: "key"
      },
      {
        name: "value",
        typeId: "unknown",
        defaultValue: "[]"
      }
    ],
    optionsForm: (selected, input, options: any, state) => {
      options.key ??= '';

      return html`
      <label>
        <p>Key:</p>
        <input name="key" value=${options.key} type="text"/>
      </label>
      `
    },
    typeIds: ['string', 'number', 'date'],
    kind: 'scalar',
    dataSourceId: ds,
    ...opts,

  }
}
export const ActionsDataSourceId = 'actions';
class ActionsDataSource extends Backbone.Model<{}> implements IDataSource {
  constructor(editor: DataSourceEditor) {
    super()
    this.editor = editor;
  }
  /**
   * FIXME: this is required because _.uniqueId in backbone gives the same id as the one in the main app (c1), so we probably use a different underscore instance?
   */
  cid = ActionsDataSourceId
  editor: DataSourceEditor
  /**
   * Unique identifier of the data source
   * This is used to retrieve the data source from the editor
   */
  id = ActionsDataSourceId
  label = 'Actions'
  hidden = false

  /**
   * Implement IDatasource
   */
  async connect(): Promise<void> { }
  isConnected(): boolean { return true }

  /**
   * Implement IDatasource
   */
  getQuery(/*expressions: Expression[]*/): string { return '' }

  /**
   * Implement IDatasource
   */
  getTypes(): Type[] {

    return [{
      id: '__actions',
      label: 'Actions',
      fields: [
        stateSetter(this.editor, { label: "Set State", id: 'set_state' }),
        stateSetter(this.editor, { label: "Coalesce w/ State", id: 'coalesce_w_state' }),
        stateSetter(this.editor, { label: "Set Session", id: 'set_session' }, true),
        stateSetter(this.editor, { label: "Set Cookie", id: 'set_cookie' }, true),
        stateSetter(this.editor, { label: "Set Local", id: 'set_local' }, true),
        stateSetter(this.editor, { label: "Coalesce w/ Session", id: 'coalesce_w_session' }, true),
        stateSetter(this.editor, { label: "Coalesce w/ Cookie", id: 'coalesce_w_cookie' }, true),
        stateSetter(this.editor, { label: "Coalesce w/ Local", id: 'coalesce_w_local' }, true),
        // stateSetter(editor, {label: "Coalesce w/ State", id: 'coalesce_w_state'}),

      ]

      // .map(e => ({
      //   ...e,
      //   kind: 'object',
      //   typeIds: ['actions']
      // }))
    }]
  }

  /**
   * Implement IDatasource
   */
  getQueryables(): Field[] {
    return []
  }
}
export const CoreDataSourceId = 'core';
class CoreDataSource extends Backbone.Model<{}> implements IDataSource {
  constructor(editor: DataSourceEditor) {
    super()
    this.editor = editor;
  }
  /**
   * FIXME: this is required because _.uniqueId in backbone gives the same id as the one in the main app (c1), so we probably use a different underscore instance?
   */
  cid = CoreDataSourceId
  editor: DataSourceEditor
  /**
   * Unique identifier of the data source
   * This is used to retrieve the data source from the editor
   */
  id = CoreDataSourceId
  label = 'Core'
  hidden = false

  /**
   * Implement IDatasource
   */
  async connect(): Promise<void> { }
  isConnected(): boolean { return true }

  /**
   * Implement IDatasource
   */
  getQuery(/*expressions: Expression[]*/): string { return '' }

  /**
   * Implement IDatasource
   */
  getTypes(): Type[] {
    const saveState = debounce(() => {
      this.editor.store();
    }, 1000);
    return [{
      id: '__core',
      label: 'Core',
      fields: [
        {
          id: "json",
          label: "JSON",
          arguments: [
            {
              name: "value",
              typeId: "unknown",
              defaultValue: "{}"
            }
          ],
          optionsForm: (selected, input, options: any, state) => {
            let inputEl: HTMLInputElement;
            let root;
            options.value ??= "{}";
            return html`
            <style>
              ${jsoneditorCss}
            </style>
            <input data-json-editor-input-el name="value" value=${options.value} hidden type="text" ${ref(el => {
              inputEl = el as any;
            })}/>
            <div ${ref(el => {
              console.log("Value?", options);
              const jeditor = createJSONEditor({
                target: el,
                props: {
                  content: { text: options.value },
                  onRenderValue: (props) => {
                    const key = props?.path?.[(props?.path?.length ?? 0) - 1]
                    if (key && key.charAt(0) === '#') {
                      return [{
                        action: (node: HTMLElement, _props) => {
                          let props: any = _props;

                          console.log("action", node, props);

                          let stateEditor;
                          const updt = async (evt?) => {
                            console.log(" updt value", stateEditor?.value, stateEditor);
                            if (stateEditor?.value) {
                              // await jeditor.patch([
                              // {
                              // op: 'replace',
                              // path: '/' + props.path.join('/'),
                              // value: stateEditor.value
                              // }
                              // ]);
                              // const v = ;
                              const v = stateEditor.value;
                              const _data: any = jeditor.get();
                              const data = _data.json ? _data.json : JSON.parse(_data.text);
                              console.log("data before", { ...data });
                              _set(data, props.path.join('.'), v);
                              console.log("data after", { ...data });
                              console.log("input/options", { inputEl, options });
                              props.value = data;
                              options.value = JSON.stringify(data);
                              if (!inputEl) {
                                console.log("El before I even try getting parent element", el, el?.parentElement);
                                inputEl = el.parentElement.querySelector('input[data-json-editor-input-el]');
                                console.log("revived input el");
                              }
                              if (inputEl) {
                                inputEl.value = options.value;
                                console.log("updated input el", inputEl.value);
                              }
                              console.log("jeditor data", jeditor, data);
                              await jeditor.set({ text: options.value });
                              saveState();
                              node.innerText = "{...}"
                              node.setAttribute('tabindex', '0');


                            }
                          }
                          const handleValueDoubleClick = (event) => {
                            let isArray;
                            try {
                              let arr = JSON.parse(props.value)
                              isArray = arr instanceof Array;
                            } catch (e) {

                            }
                            const v = isArray ? props.value : '[]';
                            console.log('rendering state editor', { v, props });
                            let t = html`
                           <state-editor
                            .selected=${selected}
                            .editor=${this.editor}
                            name="value"
                            ${ref(el => {
                              stateEditor = el;
                            })}
                            data-is-input
                            class="ds-state-editor__options"
                            .value=${v}
                            @change=${updt}
                          >
                            <label slot="label">Value</label>
                          </state-editor>
                          `;
                            const child = document.createElement('div');
                            render(t, child);
                            this.editor.Modal.open({
                              title: "Editing " + props.path.join('/'),
                              content: child,
                              attributes: {}
                            });
                          }
                          const setupNode = (node) => {
                            node.innerText = "{...}"
                            node.setAttribute('tabindex', '0');

                            node.addEventListener('dblclick', handleValueDoubleClick)
                          }
                          setupNode(node);
                          return {
                            update: (_props) => {
                              props = _props;
                              // return updt()
                            },
                            destroy: () => {
                              node.removeEventListener('dblclick', handleValueDoubleClick)
                              node.classList.remove('custom-evaluator-component')
                            }
                          }

                        },
                        props
                      }]
                    }
                    return renderValue(props);
                  },
                  onChange(updatedContent, previousContent, info) {
                    console.log("updated JSON", ...arguments);
                    if (!inputEl) {
                      console.log("El before I even try getting parent element", el, el?.parentElement);
                      inputEl = el.parentElement.querySelector('input[data-json-editor-input-el]');
                      console.log("revived input el");
                    }
                    if (inputEl) {
                      const v: any = updatedContent;
                      console.log("updating input el", v);
                      options.value = inputEl.value = (v.text || JSON.stringify(v.json));
                      console.log("Value?", options);
                      saveState();
                    }
                  }
                } as JSONEditorPropsOptional
              });
              console.log("jeditor", jeditor);
            })}>
            </div>
            `
          },
          typeIds: ['__core'],
          kind: 'object',
          dataSourceId: CoreDataSourceId,

        }
        // stateSetter(editor, {label: "Coalesce w/ State", id: 'coalesce_w_state'}),

      ]

      // .map(e => ({
      //   ...e,
      //   kind: 'object',
      //   typeIds: ['actions']
      // }))
    }]
  }

  /**
   * Implement IDatasource
   */
  getQueryables(): Field[] {
    return this.getTypes()[0].fields;
  }
}
export const HttpDataSourceId = 'http';
class HttpDataSource extends Backbone.Model<{}> implements IDataSource {
  constructor(editor: DataSourceEditor) {
    super()
    this.editor = editor;
  }
  /**
   * FIXME: this is required because _.uniqueId in backbone gives the same id as the one in the main app (c1), so we probably use a different underscore instance?
   */
  cid = HttpDataSourceId
  editor: DataSourceEditor
  /**
   * Unique identifier of the data source
   * This is used to retrieve the data source from the editor
   */
  id = HttpDataSourceId
  label = 'HTTP'
  hidden = false

  /**
   * Implement IDatasource
   */
  async connect(): Promise<void> { }
  isConnected(): boolean { return true }

  /**
   * Implement IDatasource
   */
  getQuery(/*expressions: Expression[]*/): string { return '' }

  /**
   * Implement IDatasource
   */
  getTypes(): Type[] {

    return [{
      id: '__http',
      label: 'HTTP',
      fields: [
        stateGetter(this.editor, { label: "Get Session", id: "get_session" }, "http", "__http"),
        stateGetter(this.editor, { label: "Get Cookie", id: "get_cookie" }, "http", "__http"),
        stateGetter(this.editor, { label: "Get Header", id: "get_header" }, "http", "__http"),
        stateGetter(this.editor, { label: "Get Query", id: "get_query" }, "http", "__http"),
        stateGetter(this.editor, { label: "Get Body", id: "get_body" }, "http", "__http"),
        stateGetter(this.editor, { label: "Get Local", id: "get_local" }, "http", "__http"),
        // stateSetter(editor, {label: "Coalesce w/ State", id: 'coalesce_w_state'}),

      ]

      // .map(e => ({
      //   ...e,
      //   kind: 'object',
      //   typeIds: ['actions']
      // }))
    }, ...['string', 'number', 'date'].map(t => ({
      id: t,
      dataSourceId: undefined,
      label: t,
      fields: [],

    }))]
  }

  /**
   * Implement IDatasource
   */
  getQueryables(): Field[] {
    return this.getTypes()[0].fields;
  }
}