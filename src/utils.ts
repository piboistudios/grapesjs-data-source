import { Expression, Field, FieldKind, IDataSourceModel, Options, Token, TypeId } from "./types"
import { DataSourceEditor } from "."
import { getParentByPersistentId, getStateDisplayName } from "./model/state"
import { TemplateResult, html } from "lit"
import { Component } from "grapesjs"

/**
 * Get the display type of a field
 * For the dropdown in expressions
 * @example "String", "String [ ]", "String { }"
 */
function getTypeDisplayName(typeIds: TypeId[], kind: FieldKind | null): string {
  const typeLabel = typeIds.join(', ')
  return kind === 'list' ? `${typeLabel} [ ]` : kind === 'object' ? `${typeLabel} { }` : typeLabel
}

/**
 * Get the label for a token
 * This is mostly about formatting a string for the dropdowns
 */
export function getTokenDisplayName(component: Component, token: Token, desiredNumChars = -1): string {
  switch (token.type) {
    case 'property': {
      const type = getTypeDisplayName(token.typeIds, token.kind)
      if(desiredNumChars > 0) {
        const diff = desiredNumChars - `${token.label} ${type}`.length
        return `${token.label}${'\xA0'.repeat(diff * 2)} ${type}`
      }
      return `${token.label} ${type}`
    }
    case 'filter': return token.label
    case 'state': return getStateDisplayName(component, token)
    default:
      console.error('Unknown token type (reading type)', token)
      throw new Error(`Unknown token type`)
  }
}

/**
 * Group tokens by type
 * This is used to create the groups in dropdowns
 */
export function groupByType(editor: DataSourceEditor, component: Component, completion: Token[], expression: Expression): Record<string, Token[]> {
  return completion
    .reduce((acc, token) => {
      let label
      switch (token.type) {
        case 'filter': label = 'Filters'; break
        case 'property': {
          if(token.dataSourceId) {
            if(expression.length) {
              const type = editor.DataSourceManager.getDataTree().getExpressionResultType(expression, component)
              label = type?.label ?? type?.id ?? 'Unknown'
            } else {
              const dataSource: IDataSourceModel = editor.DataSourceManager.get(token.dataSourceId)
              if(dataSource) {
                label = dataSource.get('label')
              } else {
                console.error('Data source not found', token.dataSourceId)
                throw new Error(`Data source not found: ${token.dataSourceId}`)
              }
            }
          } else {
            label = 'Fields';
          }
          break
        }
        case 'state': {
          const parent = getParentByPersistentId(token.componentId, component)
          const name = parent?.get('tagName') === 'body' ? 'Website' : parent?.getName()
          label = name ? `${name}'s states` : 'States'
          break
        }
        default:
          console.error('Unknown token type (reading type)', token)
          throw new Error(`Unknown token type`)
      }
      if (!acc[label]) acc[label] = []
      acc[label].push(token)
      return acc
    }, {} as Record<string, Token[]>)
}

/**
 * Create a "fixed" token
 * It is a hard coded content with which you can start an expression
 */
export const FIXED_TOKEN_ID = 'fixed'
export function getFixedToken(value: string): Token {
  return {
    type: 'property',
    propType: 'field',
    fieldId: FIXED_TOKEN_ID,
    label: 'Fixed value',
    kind: 'scalar',
    typeIds: ['String'],
    options: {
      value,
    },
    optionsForm: () => html`
        <label>Value
          <input type="text" name="value" value=${value}>
        </label>
    `,
  }
}

/**
 * Convert a token to a string
 * This is used to store the token in the component
 */
export function toString(token: Token): string {
  return JSON.stringify({
    ...token,
  })
}

/**
 * Convert a token to an option's tag value (json string)
 */
export function toId(token: Token): string {
  switch (token.type) {
    case 'property': return `property__${token.dataSourceId || ''}__${token.fieldId}`
    case 'filter': return `filter____${token.id}`
    case 'state': return `state__${token.componentId}__${token.storedStateId}`
    default:
      console.error('Unknown token type (reading type)', token)
      throw new Error(`Unknown token type`)
  }
}

/**
 * Revert an option's tag value to a token
 */
export function fromString(editor: DataSourceEditor, id: string): Token {
  return editor.DataSourceManager.getDataTree().fromStored(JSON.parse(id)) as Token
}

/**
 * Compare two tokens by stringifying them
 */
export function equals(a: Token, b: Token): boolean {
  return toId(a) === toId(b)
}

/**
 * Apply a kind to a field
 */
export function convertKind(field: Field | null, from: FieldKind, to: FieldKind): Field | null {
  if (!field) {
    return null
  }
  if (field.kind !== from) {
    console.error(`Field is not a ${from}`, field)
    throw new Error(`Field ${field.label} is not a ${from}`)
  }
  return {
    ...field,
    kind: to,
  }
}

/**
 * Get the type of a field, as provided by the data source
 */
export function getFieldType(editor: DataSourceEditor, field: Field | null, key: string | undefined): Field | null {
  const dataTree = editor.DataSourceManager.getDataTree()
  if (!field || !key) return null
  const types = field.typeIds.map(typeId => dataTree.findType(typeId))
  const fields = types.map(type => type?.fields.find(field => field.label === key))
  switch (fields.length) {
    case 0: return null
    case 1: return fields[0]!
    default: return {
      id: `${field.id}.${key}`,
      label: `${field.label}.${key}`,
      typeIds: fields.reduce((typeIds, field) => typeIds
        // Add typeIds of the field if not already present
        .concat(field!.typeIds.filter(t => !typeIds.includes(t)))
        , [] as string[]),
      kind: 'object',
    }
  }
}

/**
 * Generate a form to edit the options of a token
 */
export function optionsFormKeySelector(editor: DataSourceEditor, field: Field | null, options: Options, name: string): TemplateResult {
  const dataTree = editor.DataSourceManager.getDataTree()
  if (!field) return html`
      <label>${name}
        <input type="text" name=${name} />
      </label>
    `
  return html`
      <select name=${name}>
        <option value="">Select a ${name}</option>
        ${field ? field.typeIds
      .flatMap(typeId => dataTree.findType(typeId)!.fields)
      .map(f => html`<option value=${f.label} ${f.label === options.key ? 'selected' : ''}>${f.label}</option>`)
      : html``
    }
      </select>
    `
}
