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
import {debounce} from 'underscore';
import {LitElement, html} from 'lit'
import { ref } from 'lit/directives/ref.js'
import {customElement, property} from 'lit/decorators.js'
import { StoredState, StoredStateWithId, getState, getStateIds, removeState, setState } from '../model/state'
import { DataSourceEditor, Token  } from '../types'

import './state-editor'
import { StateEditor } from './state-editor'
import { Component } from 'grapesjs'
import { PROPERTY_STYLES } from './defaultStyles'
import { fromStored } from '../model/token'
import { DataTree } from '../model/DataTree'
import { cleanStateName } from '../utils'

interface Item {
  name: string
  publicState?: boolean
  state: StoredState
}

/**
 * Editor for selected element's states
 * 
 */
@customElement('custom-states-editor')
export class CustomStatesEditor extends LitElement {
  @property({type: Boolean})
    disabled = false

  @property({type: Boolean, attribute: 'private-state'})
    privateState = false

  @property({type: String})
    title = 'Custom states'

  @property({type: Boolean, attribute: 'default-fixed'})
    defaultFixed = false

  @property({type: String, attribute: 'create-prompt'})
    createPrompt = 'Name this state'

  @property({type: String, attribute: 'rename-prompt'})
    renamePrompt = 'Rename this state'

  @property({type: String, attribute: 'default-name'})
    defaultName = 'New state'

  // This is a comma separated list of reserved names
  // Or an array of reserved names
  @property({type: String, attribute: 'reserved-names'})
  get reservedNames() { return this._reservedNames }
  set reservedNames(value: string | string[]) {
    if(typeof value === 'string') this._reservedNames = value.split(',').map(s => s.trim())
    else this._reservedNames = value
  }

  @property({type: Boolean, attribute: 'hide-loop-data'})
    hideLoopData = false

  @property({type: String, attribute: 'help-text'})
    helpText = ''

  @property({type: String, attribute: 'help-link'})
    helpLink = ''

  private _reservedNames: string[] = []
  private editor: DataSourceEditor | null = null
  private redrawing = false

  setEditor(editor: DataSourceEditor) {
    if (this.editor) {
      console.warn('property-editor setEditor already set')
      return
    }
    this.editor = editor

    // Update the UI when a page is added/renamed/removed
    this.editor.on('page', () => this.requestUpdate())

    // Update the UI on component selection change
    this.editor.on('component:selected', () => this.requestUpdate())

    // Update the UI on component change
    this.editor.on('component:update', () => this.requestUpdate())
  }

  getHead(selected: Component | null) {
    return html`
      <style>
        ${PROPERTY_STYLES}
      </style>
      <slot></slot>
      <section class="ds-section">
        <div>
          <div class="gjs-traits-label">
            <span>${this.title}</span>
            ${ selected ? html`
            <button
              title="Add a new state"
              class="ds-states__add-button ds-states__button"
              @click=${() => {
    const item = this.createCustomState(selected)
    if(!item) return
    this.setState(selected, item.name, item.state)
  }}
              >+</button>
            ` : ''}
          </div>
        </div>
        ${this.helpText ? html`
        <details class="ds-states__help">
          <summary>Help</summary>
          <span>${ this.helpText }</span>
          ${this.helpLink ? html`
          <a
            class="ds-states__help-link"
            href="${this.helpLink}"
            target="_blank"
            >\u{1F517} Read more...</a>
          ` : ''}
        </details>
        ` : ''}
      </section>
    `
  }
  override render() {
    super.render()
    this.redrawing = true
    const selected = this.editor?.getSelected()
    const empty = html`
      ${this.getHead(null)}
      <p class="ds-empty">Select an element to edit its states</p>
    `
    if (!this.editor || this.disabled) {
      this.redrawing = false
      return html``
    }
    if (!selected) {
      this.redrawing = false
      return empty
    }
    let el: Component | undefined = selected;
    const states: StoredStateWithId[] = [];
    // let elStates = el.get('publicStates');
    do {
      states.push(...(el.get('publicStates') || []));
      const privateStates = el.get('privateStates');
      if (privateStates) {

        const loopData = el.get('privateStates').find(s => s.id === '__data');
        if (loopData) {
          states.push({
            ...loopData,
            id: ['state', el.get('id-plugin-data-source'), '__data'].join('_').replace(/-/gi, '$'),
            label: "Loop Data " + `(${el.tagName})`
          });
        }
      }
    } while ((el = el.parent()))
    const items: Item[] = this.getStateIds(selected)
      .map(stateId => ({
        name: stateId,
        publicState: !this.privateState,
        state: this.getState(selected, stateId)!,
      }))
      .filter(item => item.state && !item.state.hidden)
    const result = html`
      ${this.getHead(selected)}
      <div class="ds-states">
        <div class="ds-states__items">
          ${items
        .map((item, index) => html`
            <div class="ds-states__item">
              ${this.getStateEditor(selected, item.state.label || '', item.name)}
              <label>Computed?
                <input type="checkbox" name="computed" .checked=${(item as any).state?.computed} @change=${(e: any) => {
            // const newItem = {...item, state: {...item.state, computed: e.target.checked } };
            // this.removeState(selected, item.name);
            // this.setState(selected, newItem.name, newItem.state);
            const pub = selected.get('publicStates');
            const thisstate = pub.find(i => i.id === item.name);
            thisstate.computed = e.target.checked;
            selected.set('publicStates', pub);
          }}/>
              </label>
              <label>Setting?
                <input type="checkbox" name="hasSetting" .checked=${(item as any).state?.hasSetting} @change=${(e: any) => {
            // const newItem = {...item, state: {...item.state, hasSetting: e.target.checked } };
            // this.removeState(selected, item.name);
            // this.setState(selected, newItem.name, newItem.state);
            const pub = selected.get('publicStates');
            const thisstate = pub.find(i => i.id === item.name);
            thisstate.hasSetting = e.target.checked;
            selected.set('publicStates', pub);
            this.requestUpdate();
          }}/>
              </label>
              ${(item as any).state.hasSetting ? html`
              <section style="display:flex;justify-content:space-between;align-items: center;">
                <label>State
                  <select name="setKey" @input=${(e: any) => {
              // const newItem = {...item, state: {...item.state, hasSetting: e.target.checked } };
              // this.removeState(selected, item.name);
              // this.setState(selected, newItem.name, newItem.state);
              const pub = selected.get('publicStates');
              const thisstate = pub.find(i => i.id === item.name);
              thisstate.setKey = e.target.value;
              selected.set('publicStates', pub);
            }} value=${(item as any).state.setKey}>
          ${states.map(s => {
              return html`
            ${s.id === (item as any).state.setKey ?
                  html`<option value=${s.id} selected>${s.label}</option>` :
                  html`<option value=${s.id}>${s.label}</option>`
                }
            `
            })}
        </select>
            
                </label>
                <label>Property
                  <input name="setProp" ${ref(el => {
                    (item as any).input = el;
                  })} placeholder="property" value=${(item as any).state.setProp} type="text" @input=${debounce((e: any) => {
              // const newItem = {...item, state: {...item.state, hasSetting: e.target.checked } };
              // this.removeState(selected, item.name);
              // this.setState(selected, newItem.name, newItem.state);
              const pub = selected.get('publicStates');
              const thisstate = pub.find(i => i.id === item.name);
              thisstate.setProp = e?.target?.value || (item as any).input.value;
              selected.set('publicStates', pub);
            }, 100)} />

                </label>
                <label>
              </section>` : ''}
              <div class="ds-states__buttons">
                <button
                  title="Remove this state"
                  class="ds-states__remove-button ds-states__button"
                  @click=${() => {
            this.removeState(selected, item.name)
            this.requestUpdate()
          }}
                  >x</button>
                <button
                  title="Rename this state"
                  class="ds-states__rename-button ds-states__button"
                  @click=${() => {
            const newItem = this.renameCustomState(item)
            if (!newItem || newItem === item) return
            this.removeState(selected, item.name)
            this.setState(selected, newItem.name, newItem.state)
            this.requestUpdate()
          }}
                  >\u270F</button>
                  <button
                    title="Move this state up"
                    class="ds-states__item-move-up ds-states__button${index === 0 ? ' ds-states__button--disabled' : ''}"
                    @click=${() => {
            items.splice(index - 1, 0, items.splice(index, 1)[0])
            this.updateOrderCustomStates(selected, items)
          }}
                    >\u2191</button>
                  <button
                    title="Move this state down"
                    class="ds-states__item-move-down ds-states__button${index === items.length - 1 ? ' ds-states__button--disabled' : ''}"
                    @click=${() => {
            items.splice(index + 1, 0, items.splice(index, 1)[0])
            this.updateOrderCustomStates(selected, items)
          }}
                  >\u2193</button>
              </div>
            </div>
            <hr class="ds-states__sep" />
          `)
      }
        </div>
  </div>
    `
    this.redrawing = false
    return result
  }

  /**
   * Get the states for this type of editor
   */
  getStateIds(component: Component): string[] {
    return getStateIds(component, !this.privateState)
      // Filter out the states which are properties
      .filter(stateId => !this.reservedNames.includes(stateId))
  }

  /**
   * Get the states for this type of editor
   */
  getState(component: Component, name: string): StoredState | null {
    return getState(component, name, !this.privateState)
  }

  /**
   * Set the states for this type of editor
   */
  setState(component: Component, name: string, state: StoredState) {
    setState(component, name, state, !this.privateState)
  }

  /**
   * Remove the states for this type of editor
   */
  removeState(component: Component, name: string) {
    removeState(component, name, !this.privateState)
  }

  getStateEditor(selected: Component, label: string, name: string) {
    return html`
      <state-editor
        .selected=${selected}
        .editor=${this.editor}
        id="${name}"
        name=${name}
        ?hide-loop-data=${this.hideLoopData}
        default-fixed=${this.defaultFixed}
        ${ref(el => {
    if (el) {
      const stateEditor = el as StateEditor
      stateEditor.data = this.getTokens(this.editor!.DataSourceManager.getDataTree(), selected, name)
    }
  })}
        @change=${() => this.onChange(selected, name, label)}
        .disabled=${this.disabled}
      >
        <label slot="label">${label || name}</label>
      </state-editor>
    `
  }

  onChange(component: Component, name: string, label: string) {
    if(this.redrawing) return
    const stateEditor = this.shadowRoot!.querySelector(`#${name}`) as StateEditor
    this.setState(component, name, {
      expression: stateEditor.data,
      label,
    })
  }

  getTokens(dataTree: DataTree, component: Component, name: string): Token[] {
    const state = this.getState(component, name)
    if(!state || !state.expression) return []
    return state.expression.map(token => {
      try {
        return fromStored(token, dataTree, component.getId())
      } catch (e) {
        // FIXME: notify user
        console.error('Error while getting expression result type in getTokens', {expression: state.expression, component, dataTree, name})
        return {
          type: 'property',
          propType: 'field',
          fieldId: 'unknown',
          label: 'unknown',
          kind: 'scalar',
          typeIds: [],
        }
      }
    })
  }

  /**
   * Rename a custom state
   */
  renameCustomState(item: Item): Item {
    const label = prompt(this.renamePrompt, item.state.label)
      ?.toLowerCase()
      ?.replace(/[^a-z0-9]/g, '-')
      ?.replace(/^-+|-+$/g, '')
    if (!label || label === item.state.label) return item
    return {
      ...item,
      state: {
        ...item.state,
        label: label,
      }
    }
  }

  /**
   * Update the custom states, in the order of the list
   */
  updateOrderCustomStates(component: Component, items: Item[]) {
    const stateIds = this.getStateIds(component)
    // Remove all states
    stateIds.forEach(stateId => {
      if(items.map(item => item.name).includes(stateId)) {
        this.removeState(component, stateId)
      }
    })
    // Add states in the order of the list
    items.forEach(item => {
      this.setState(component, item.name, item.state)
    })
  }
  
  /**
   * Create a new custom state
   */
  createCustomState(component: Component): Item | null {
    const label = cleanStateName(prompt(this.createPrompt, this.defaultName))
    if (!label) return null
    
    if(this.reservedNames.includes(label)) {
      alert(`The name ${label} is reserved, please choose another name`)
      return null
    }
    const stateId = `${component.getId()}-${Math.random().toString(36).slice(2)}`
    const state: StoredState = {
      label,
      expression: [],
    }
    this.setState(component, stateId, state)
    return {
      name: stateId,
      state,
      publicState: !this.privateState,
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-states-editor': CustomStatesEditor
  }
}