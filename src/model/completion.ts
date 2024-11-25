import { Component } from 'grapesjs'
import { Context, DataSourceEditor, Expression, Field, Filter, Property, State, StateId, Token, Type, TypeId } from '../types'
import { DataTree } from './DataTree'
import { getOrCreatePersistantId, getState, getStateIds, StoredState, StoredStateWithId } from './state'
import { getExpressionResultType, getTokenOptions } from './token'
import { getFixedToken } from '../utils'
import { html } from 'lit'
import {debounce} from 'underscore'

/**
 * Get the context of a component
 * This includes all parents states, data sources queryable values, values provided in the options
 */
export function getContext(component: Component, dataTree: DataTree, currentStateId?: StateId, hideLoopData = false): Context {
  if (!component) {
    console.error('Component is required for context')
    throw new Error('Component is required for context')
  }
  // Get all queryable values from all data sources
  const queryable: Property[] = dataTree.queryables
    .map((field: Field) => {
      if (!field.dataSourceId) throw new Error(`Type ${field.id} has no data source`)
      return fieldToToken(field)
    })
  // Get all states in the component scope
  const states: State[] = []
  const loopProperties: Token[] = []
  let parent = component
  while (parent) {
    // Get explicitely set states
    states
      .push(...(getStateIds(parent, true, parent === component ? currentStateId : undefined)
        .map((stateId: StateId): State => ({
          type: 'state',
          storedStateId: stateId,
          label: getState(parent, stateId, true)?.label || stateId,
          componentId: getOrCreatePersistantId(parent),
          exposed: true,
        }))))
    // Get states from loops
    if (parent !== component || !hideLoopData) { // If it is a loop on the parent or if we don't hide the loop data
      const loopDataState = getState(parent, '__data', false)
      if (loopDataState) {
        try {
          const loopDataField = getExpressionResultType(loopDataState.expression, parent, dataTree)
          if (loopDataField) {
            const displayName = (label: string) => `${parent.getName() ?? 'Unknown'}'s ${loopDataField.label} ${label}`
            if (loopDataField.kind === 'list') {
              loopProperties.push({
                type: 'state',
                storedStateId: '__data',
                componentId: getOrCreatePersistantId(parent),
                exposed: false,
                forceKind: 'object', // FIXME: this may be a scalar
                label: `Loop data (${loopDataField.label})`,
              }, {
                type: 'property',
                propType: 'field',
                fieldId: 'forloop.index0',
                label: displayName('forloop.index0'),
                kind: 'scalar',
                typeIds: ['number'],
              }, {
                type: 'property',
                propType: 'field',
                fieldId: 'forloop.index',
                label: displayName('forloop.index'),
                kind: 'scalar',
                typeIds: ['number'],
              })
            } else {
              console.warn('Loop data is not a list for component', parent, 'and state', loopDataState)
            }
          } else {
            console.warn('Loop data type not found for component', parent, 'and state', loopDataState)
          }
        } catch (e) {
          console.error('Error while getting loop data for component', parent, 'and state', loopDataState)
        }
      }
    }
    // Go up to parent
    parent = parent.parent() as Component
  }
  // Get filters which accept no input
  const filters: Filter[] = dataTree.filters
    .filter(filter => filter.validate(null))
  // Add a fixed value
  const fixedValue = getFixedToken('')
  // Return the context
  return [
    ...queryable,
    ...states,
    ...loopProperties,
    ...filters,
    fixedValue,
  ]
}
/**
 * Create a property token from a field
 */
export function fieldToToken(field: Field): Property {
  if (!field) throw new Error('Field is required for token')
  if (!field.dataSourceId) throw new Error(`Field ${field.id} has no data source`)
  const ret: Property = {
    type: 'property',
    propType: 'field',
    fieldId: field.id,
    label: field.label,
    typeIds: field.typeIds,
    dataSourceId: field.dataSourceId,
    kind: field.kind,
    ...getTokenOptions(field) ?? {},
    optionsForm: field.optionsForm
  }
  
  return ret;
}
export let ACTIONS: Type & {editor:DataSourceEditor};
function stateSetter(editor:DataSourceEditor, opts:any): Field {
  const saveState = debounce(()=>{
    editor.store();
  },1000);
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
    optionsForm: (selected, input, options:any, state) => {
      options.key ??= '';
      options.value ??= '[]';
      
      const states: StoredStateWithId[] = [];
      let el: Component | undefined = selected;
      let elStates = el.get('publicStates');
      do {
        states.push(...(el.get('publicStates') || []));
      } while((el = el.parent()))
      return html`
      <label>
        <p>Key:</p>
        <select @input=${saveState} name="key" value=${options.key}>
          ${states.map(s => {
            return html`
            ${
            s.id === options.key ?
              html`<option value=${s.id} selected>${s.label}</option>` :
              html`<option value=${s.id}>${s.label}</option>`
              }
            `
          })}
        </select>
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
    dataSourceId: "actions",
    ...opts,

  }
}
export function getActionsType(editor: DataSourceEditor) {
    if (!editor) throw new Error("`editor` is required.");
    const saveState = debounce(()=>{
      editor.store();
    },1000);
    ACTIONS = {
      editor,
      id: '__actions',
      label: 'Actions',
      fields: [
        stateSetter(editor, {label: "Set State", id: 'set_state'}),
        stateSetter(editor, {label: "Coalesce w/ State", id: 'coalesce_w_state'}),
        // stateSetter(editor, {label: "Coalesce w/ State", id: 'coalesce_w_state'}),

      ]
      // .map(e => ({
      //   ...e,
      //   kind: 'object',
      //   typeIds: ['actions']
      // }))
    };
  return ACTIONS;
}
/**
 * Auto complete an expression
 * @returns a list of possible tokens to add to the expression
 */
export function getCompletion(options: { component: Component, expression: Expression, dataTree: DataTree, rootType?: TypeId, currentStateId?: StateId, hideLoopData?: boolean }): Context {
  const { component, expression, dataTree, rootType, currentStateId, hideLoopData } = options
  if (!component) throw new Error('Component is required for completion')
  if (!expression) throw new Error('Expression is required for completion')
  if (expression.length === 0) {
    if (rootType) {
      const type = dataTree.getType(rootType, null, component.getId())
      if (!type) {
        console.warn('Root type not found', rootType)
        return []
      }
      return type.fields
        .map((field: Field) => fieldToToken(field))
    }
    return getContext(component, dataTree, currentStateId, hideLoopData)
  }
  const field = getExpressionResultType(expression, component, dataTree)
  if (!field) {
    console.warn('Result type not found for expression', expression)
    return []
  }
  return ([] as Token[])
    // Add fields if the kind is object
    .concat(field.kind === 'object' ? field.typeIds
      // Find possible types
      .map((typeId: TypeId) => dataTree.getType(typeId, field.dataSourceId ?? null, component.getId()))
      // Add all of their fields
      .flatMap((type: Type | null) => type?.fields ?? [])
      // To token
      .flatMap(
        (fieldOfField: Field): Token[] => {
          // const t: Type | null = this.findType(field.typeIds, field.dataSourceId) 
          // if(!t) throw new Error(`Type ${field.typeIds} not found`)
          return fieldOfField.typeIds.map((typeId: TypeId) => ({
            ...fieldToToken(fieldOfField),
            typeIds: [typeId],
          }))
        }
      ) : [])
    // Add filters
    .concat(
      dataTree.filters
        // Match input type
        .filter(filter => filter.validate(field))
    )
}
