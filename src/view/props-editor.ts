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

import { LitElement, html } from 'lit'
import { ref } from 'lit/directives/ref.js'
import { customElement, property } from 'lit/decorators.js'
import { StoredState, getState, getStateIds, removeState, setState } from '../model/state'
import { DataSourceEditor, Expression, Token } from '../types'
import { debounce } from 'underscore';
import './state-editor'
import { StateEditor } from './state-editor'
import { Component } from 'grapesjs'
import { PROPERTY_STYLES } from './defaultStyles'
import { fromStored } from '../model/token'
import { DataTree } from '../model/DataTree'
import { cleanStateName } from '../utils'
import { Collection, Model } from 'backbone'
interface ModifierData {
  id: string
  name: string
}

interface Item {
  id: string
  name: string
  expression: string
  modelable: boolean
}
const NS = 'props--' + ((Math.round(Math.random() * 100_000)) + Date.now());
/**
 * Editor for selected element's props
 * 
 */
@customElement('props-editor')
export class PropsEditor extends LitElement {
  @property({ type: String })
  rootType = ''
  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean, attribute: 'private-prop' })
  privateProp = false

  @property({ type: String })
  title = 'Custom props'

  @property({ type: Boolean, attribute: 'default-fixed' })
  defaultFixed = false

  @property({ type: String, attribute: 'create-prompt' })
  createPrompt = 'Name this prop'

  @property({ type: String, attribute: 'rename-prompt' })
  renamePrompt = 'Rename this prop'

  @property({ type: String, attribute: 'default-name' })
  defaultName = 'New prop'

  // This is a comma separated list of reserved names
  // Or an array of reserved names
  @property({ type: String, attribute: 'reserved-names' })
  get reservedNames() { return this._reservedNames }
  set reservedNames(value: string | string[]) {
    if (typeof value === 'string') this._reservedNames = value.split(',').map(s => s.trim())
    else this._reservedNames = value
  }

  @property({ type: Boolean, attribute: 'hide-loop-data' })
  hideLoopData = false

  @property({ type: String, attribute: 'help-text' })
  helpText = ''

  @property({ type: String, attribute: 'help-link' })
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
            ${selected ? html`
            <button
              title="Add a new prop"
              class="ds-props__add-button ds-props__button"
              @click=${() => {
          const item = this.createCustomProp(selected)
          if (!item) return
        }}
              >+</button>
            ` : ''}
          </div>
        </div>
        ${this.helpText ? html`
        <details class="ds-props__help">
          <summary>Help</summary>
          <span>${this.helpText}</span>
          ${this.helpLink ? html`
          <a
            class="ds-props__help-link"
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
      <p class="ds-empty">Select an element to edit its props</p>
    `
    if (!this.editor || this.disabled) {
      this.redrawing = false
      return html``
    }
    if (!selected) {
      this.redrawing = false
      return empty
    }

    const props = this.ensureProps(selected);
    const items: Model<Item>[] = props;
    const result = html`
      ${this.getHead(selected)}
      <div class="ds-props">
        <div class="ds-props__items">
          ${items
        .map((item, index) => html`
            <div class="ds-props__item">
              ${this.getStateEditor(selected, item.get('name')!)}
              <label>
                Modelable?
                <input type="checkbox" name="modelable" .checked=${(item as any).modelable || item.get('modelable')} @change=${(e:InputEvent) => {
                  item.set('modelable', (e.target as HTMLInputElement).checked);
                  this.requestUpdate()

                }}/>
              </label>
              <div class="ds-props__buttons">
                <button
                  title="Remove this prop"
                  class="ds-props__remove-button ds-props__button"
                  @click=${() => {
            this.removeProp(selected, item.get('name')!)
            this.requestUpdate()
          }}
                  >x</button>
                <button
                  title="Rename this prop"
                  class="ds-props__rename-button ds-props__button"
                  @click=${() => {
            this.renameCustomProp(selected, item)
            this.requestUpdate()
          }}
                  >\u270F</button>
                  <button
                    title="Move this prop up"
                    class="ds-props__item-move-up ds-props__button${index === 0 ? ' ds-props__button--disabled' : ''}"
                    @click=${() => {
            items.splice(index - 1, 0, items.splice(index, 1)[0])
            this.updateOrderCustomProps(selected, items)
          }}
                    >\u2191</button>
                  <button
                    title="Move this prop down"
                    class="ds-props__item-move-down ds-props__button${index === items.length - 1 ? ' ds-props__button--disabled' : ''}"
                    @click=${() => {
            items.splice(index + 1, 0, items.splice(index, 1)[0])
            this.updateOrderCustomProps(selected, items)
          }}
                  >\u2193</button>
              </div>
            </div>
            <hr class="ds-props__sep" />
          `)}
        </div>
      </div>
    `
    this.redrawing = false
    return result
  }
  ensureProps(component: Component): Array<Model<Item>> {
    if (!component.get('props')) {
      component.set('props', new Collection());
    }
    const props = component.get('props');
    // restore props from json array
    if (!(component as any).propsLoaded) {
      component.unset('props');
      component.set('props',

        props.map(
          (e: Item) => new Model<Item>({
            ...e,

          })
        )
      );
      (component as any).propsLoaded = true;
      return component.get('props');
    }
    return props;
  }

  /**
   * Get the props for this type of editor
   */
  getStateIds(component: Component): string[] {
    return getStateIds(component, !this.privateProp)
      // Filter out the props which are properties
      .filter(propId => !this.reservedNames.includes(propId))
  }

  /**
   * Get the props for this type of editor
   */
  getState(component: Component, name: string): StoredState | null {
    return getState(component, name, !this.privateProp)
  }

  /**
   * Set the props for this type of editor
   */
  setProp(component: Component, name: string, prop: Model<Item>) {
    const props = this.ensureProps(component);
    const existingPropIdx = props.findIndex(e => e.get('name') === name);
    if (existingPropIdx !== -1) {
      props.splice(existingPropIdx, 1, prop);
    } else {
      props.push(prop);
    }
    component.set('props', props.slice());
    this.requestUpdate();
    this.editor.trigger('component:update', component);

    this.requestUpdate()
  }

  /**
   * Remove the props for this type of editor
   */
  removeProp(component: Component, name: string) {
    const props = this.ensureProps(component);
    const idx = props.findIndex(e => e.get('name') === name);
    if (idx !== -1) {
      props.splice(idx, 1);
      component.set('props', props);
      this.requestUpdate();

      this.editor.trigger('component:update', component);

      this.requestUpdate()
    }

  }

  getStateEditor(selected: Component, name: string) {
    const id = NS + '--' + name;
    const evt = this.ensureProps(selected).find(e => e.get('name') === name)!;
    const expr = JSON.parse(evt.get('expression')! || (evt as any).get('attributes')?.expression!)
    return html`
      <state-editor
        .selected=${selected}
        .editor=${this.editor}
        id="${id}"
        name=${id}
        ?hide-loop-data=${this.hideLoopData}
        default-fixed=${this.defaultFixed}
        .data=${expr}
        @change=${() => this.onChange(selected, name)}
        .disabled=${this.disabled}
      >
        <label slot="label">${name}</label>
      </state-editor>
    `
  }

  onChange(component: Component, name: string) {
    if (this.redrawing) return
    const propEditor = this.shadowRoot!.querySelector(`#${NS + '--' + name}`) as StateEditor
    const props = this.ensureProps(component);
    const evt = props.find(prop => prop.get('name') === name);
    evt?.set('expression', JSON.stringify(propEditor.data));
    component.set('props', props);
    this.editor.trigger('component:update', component);

    // save(this.editor);
    this.requestUpdate()

  }

  getTokens(dataTree: DataTree, component: Component, name: string): Token[] {
    const prop = this.getState(component, name)
    if (!prop || !prop.expression) return []
    return prop.expression.map(token => {
      try {
        return fromStored(token, dataTree, component.getId())
      } catch (e) {
        // FIXME: notify user
        console.error('Error while getting expression result type in getTokens', { expression: prop.expression, component, dataTree, name })
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
   * Rename a custom prop
   */
  renameCustomProp(component: Component, item: Model<Item>) {
    const name = item.get('name')!;
    const label = prompt(this.renamePrompt, name || 'someProp')
      // ?.toLowerCase()
      // ?.replace(/[^a-z0-9]/g, '-')
      // ?.replace(/^-+|-+$/g, '')
    if (!label || label === item.get('name')!) return item
    const props = this.ensureProps(component);
    const evt = props.find(e => name && e.get('name') === name);
    evt!.set('name', label);
    component.set('props', props.slice());
    this.requestUpdate()
  }

  /**
   * Update the custom props, in the order of the list
   */
  updateOrderCustomProps(component: Component, items: Model<Item>[]) {
    const propIds = this.getStateIds(component)
    // Remove all props
    propIds.forEach(propId => {
      if (items.map(item => item.get('name')).includes(propId)) {
        this.removeProp(component, propId)
      }
    })
    // Add props in the order of the list
    items.forEach(item => {
      this.setProp(component, item.get('name')!, item)
    })
    this.requestUpdate()
  }

  /**
   * Create a new custom prop
   */
  createCustomProp(component: Component): Model<Item> | null {
    const label = cleanStateName(prompt(this.createPrompt, this.defaultName))
    if (!label) return null

    if (this.reservedNames.includes(label)) {
      alert(`The name ${label} is reserved, please choose another name`)
      return null
    }
    const evt = new Model<Item>({
      id: label,
      name: label,
      expression: "[]",
      modelable: false
    });
    this.setProp(component, label, evt)

    this.requestUpdate()
    return evt;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-props-editor': PropsEditor
  }
}
const save = debounce(function save(editor: DataSourceEditor | null) {
  return editor?.store?.();
}, 1000);

