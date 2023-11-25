import { Component } from "grapesjs"
import { Expression, Field, FieldKind, Options, State, Token, TypeId } from "./types"
import { DataTree } from "./model/DataTree"
import { TemplateResult, html } from "lit"
import { Ref, ref } from "lit/directives/ref.js"
import { getParentByPersistentId, getPersistantId, getState, getStateLabel, getStateVariableName, setState } from "./model/state"
import { Step, StepsSelector } from "@silexlabs/steps-selector"
import { OPTIONS_STYLES } from "./view/defaultStyles"
import { DataSourceEditor } from "."

/**
 * Get the display type of a field
 */
function getDisplayType(typeIds: TypeId[], kind: FieldKind | null): string {
  const typeLabel = typeIds.join(', ')
  return kind === 'list' ? `${typeLabel} [ ]` : kind === 'object' ? `${typeLabel} { }` : typeLabel
}

/**
 * Add css styles to options forms
 */
let _styles = ''
export function setOptionsFormStyles(styles: string) {
  _styles = styles
}
function addStyles(optionsForm: string | null): string {
  if(!optionsForm) return ''
  return `
    <style>
      ${OPTIONS_STYLES}
      ${_styles}
    </style>
    ${optionsForm}
  `
}

/**
 * Create a "fixed" token
 * It is a hard coded content with which you can start an expression
 */
export function getFixedToken(value: string | number | boolean, typeId: TypeId): Token {
  return {
    type: 'filter',
    id: 'fixed',
    label: 'Fixed value',
    output: () => ({
      id: 'fixed_value',
      label: 'Fixed value',
      kind: 'scalar',
      typeIds: [typeId],
    }),
    validate: field => !field,
    apply: () => value,
    options: {
      value,
    },
    optionsForm: () => addStyles(`
      <form>
        <label>Value
          <input type="text" name="value" value="${value.toString()}">
          <div class="buttons">
            <input type="submit" value="Apply"/>
            <input type="reset" value="Cancel"/>
          </div>
        </label>
      </form>
    `),
  }
}

/**
 * Set the completion function of a steps selector
 */
export function setCompletion(dataTree: DataTree, component: Component, stepsSelector: StepsSelector) {
  stepsSelector.completion = (steps: Step[]): Step[] => {
    // Current expression
    const expression = steps.map(step => step.meta.token)
    // Get the completion, which is a context
    // It is a list of tokens, each one can be added at the end of the expression
    const tokens = dataTree.getCompletion(component, expression)
    // Get the type for each token
    // The filters output types are resolved
    const fields = tokens
      .map(token => dataTree.getExpressionResultType(tokens.concat(token), component))
    // Convert the context to steps
    return fields
    .map((field, index) => {
      const prev = index > 0 ? fields[index - 1] : null
      return toStep(dataTree, field, prev, tokens[index], component)
    })
  }
}

/**
 * Handle the change event of a steps selector
 */
export function chagedStepsSelector(component: Component, name: string, stepsSelector: StepsSelector) {
  // Check input
  if(!component) throw new Error('Component is required')
  if(!name) throw new Error('Name is required')
  // Update the tokens with new options values
  const steps = stepsSelector.steps.map(step => {
    const token = step.meta?.token ?? getFixedToken(step.options?.value ?? '', 'String') // Add a fixed string if the token is not found
    token.options = step.options
    return {
      ...step,
      meta: {
        ...step.meta,
        token,
      }
    }
  })
  // Update the state
  setState(component, name, {
    expression: steps.map(step => step.meta.token),
  }, false)
  stepsSelector.steps = steps
}

/**
 * Convert an expression to steps
 * This will resolve the types of filters
 */
export function toSteps(dataTree: DataTree, expression: Expression, component: Component): Step[] {
  const fields = dataTree.expressionToFields(expression, component)
  return fields
    .map((type, index) => {
      const token = expression[index]
      if (!type) {
        console.error('Unknown type (reading type)', token)
        throw new Error(`Unknown type`)
      }
      const prev = index > 0 ? fields[index - 1] : null
      return toStep(dataTree, type, prev, token, component)
    })
}

/**
 * Render an expression with the steps-selector web component
 */
export function renderExpression(component: Component, dataTree: DataTree, name: string, label: string, allowFixed: boolean, reference: Ref<StepsSelector>, maxSteps?: number): TemplateResult {
  const state = getState(component, name, false) ?? {expression: []}
  const steps = toSteps(dataTree, state.expression, component)
  const fixed = allowFixed && !state.expression.length || state.expression.length === 1 && steps[0].meta?.type?.id === 'String'
  const stepsSelector = reference?.value
  if(stepsSelector) {
    // This will not happen for the first render
    // The first render will use onload
    stepsSelector.steps = steps
    setCompletion(dataTree, component, stepsSelector)
  }
  return html`
    <steps-selector
      ${ref(reference)}
      group-by-category
      ?allow-fixed=${allowFixed}
      max-steps=${maxSteps ?? -1}
      @load=${(e: CustomEvent) => {
        const stepsSelector = e.target as StepsSelector
        stepsSelector.steps = steps
        setCompletion(dataTree, component, stepsSelector)
      }}
      @change=${(e: SubmitEvent) => chagedStepsSelector(component, name, e.target as StepsSelector)}
      .fixed=${fixed}
      >
      ${label}
    </steps-selector>
  `
}

/**
 * Convert a token to a step
 * This will resolve the types of filters
 * @param field can be null, this happens when token is a filter with output resolving to null
 */
export function toStep(dataTree: DataTree, field: Field | null, prev: Field | null, token: Token, component: Component): Step {
  switch (token.type) {
    case 'property':
      if(!field) {
        console.error('Unknown type (reading type)', token)
        throw new Error(`Unknown type`)
      }
      switch (token.propType) {
        //case 'type': return {
        //  name: type.id,
        //  icon: '',
        //  type: getDisplayType([type.dataSourceId as string ?? 'Type'], null), // FIXME: use a data source option as a name
        //  meta: { token, type }
        //}
        case 'field': return {
          name: token.label,
          icon: '',
          type: getDisplayType(token.typeIds, token.kind),
          meta: { token, type: field },
          options: token.options,
          optionsForm: token.optionsForm ? addStyles(token.optionsForm(prev, token.options ?? {})) ?? undefined : undefined,
          category: token.dataSourceId as string,
        }
        default:
          console.error('Unknown property type (reading propType)', token)
          throw new Error(`Unknown property type`)
      }
    case 'filter':
      return {
        name: token.label,
        icon: '',
        type: 'Filter',
        options: token.options,
        optionsForm: token.optionsForm ? addStyles(token.optionsForm(prev, token.options ?? {})) ?? undefined : undefined,
        meta: { token, type: field },
        category: 'Filters',
      }
    case 'state': {
      const parent = getParentByPersistentId(token.componentId, component)
      if(!parent) {
        console.warn('Component not found', token.componentId)
        // TODO: notification
      }
      return {
        name: getStateLabel(parent, token),
        icon: '',
        type: token.forceKind ?? field?.label ?? 'Unknown',
        meta: { token, type: field },
        category: 'States',
      }
    }
    default:
      console.error('Unknown token type (reading type)', token)
      throw new Error(`Unknown token type`)
  }
}

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
export function optionsFormButtons(): string {
  return `
      <div class="buttons">
        <input type="reset" value="Cancel" />
        <input type="submit" value="Apply" />
      </div>
    `
}
export function optionsFormKeySelector(editor: DataSourceEditor, field: Field | null, options: Options, name: string): string {
  const dataTree = editor.DataSourceManager.getDataTree()
  if (!field) return `
      <label>${name}
        <input type="text" name="${name}" />
      </label>
    `
  return `
      <select name="${name}">
        <option value="">Select a ${name}</option>
        ${field ? field.typeIds
      .flatMap(typeId => dataTree.findType(typeId)!.fields)
      .map(f => `<option value="${f.label}" ${f.label === options.key ? 'selected' : ''}>${f.label}</option>`)
      .join('\n')
      : ''
    }
      </select>
    `
}
export function optionsFormStateSelector(editor: DataSourceEditor, options: Options, name: string): string {
  const dataTree = editor.DataSourceManager.getDataTree()
  return `
          <select name="${name}">
            ${dataTree.getContext()
      .filter(token => token.type === 'state' && token.exposed)
      .map(token => {
        const state = token as State
        const value = getStateVariableName(state.componentId, state.storedStateId)
        const component = (() => {
          let c = editor.getSelected()
          while (c) {
            if (getPersistantId(c) === state.componentId) return c
            c = c.parent()
          }
          return null
        })()
        if (!component) {
          console.warn(`Could not find component with persistent ID ${state.componentId}`, { state })
          return ''
        }
        return `<option selected="${options[name] === value}" value="${value}">${component.getName()}'s ${state.label}</option>`
      })
      .join('\n')
    }
          </select>
          `
}