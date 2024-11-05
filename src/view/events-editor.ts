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
type Modifier = Model<ModifierData>;
interface Item {
  id: string
  name: string
  modifiers: Array<Modifier>
  expression: string
}
const NS = 'events--' + ((Math.round(Math.random() * 100_000)) + Date.now());
/**
 * Editor for selected element's events
 * 
 */
@customElement('events-editor')
export class EventsEditor extends LitElement {
  @property({ type: String })
  rootType = ''
  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean, attribute: 'private-event' })
  privateEvent = false

  @property({ type: String })
  title = 'Custom events'

  @property({ type: Boolean, attribute: 'default-fixed' })
  defaultFixed = false

  @property({ type: String, attribute: 'create-prompt' })
  createPrompt = 'Name this event'

  @property({ type: String, attribute: 'rename-prompt' })
  renamePrompt = 'Rename this event'

  @property({ type: String, attribute: 'default-name' })
  defaultName = 'New event'

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
              title="Add a new event"
              class="ds-events__add-button ds-events__button"
              @click=${() => {
          const item = this.createCustomEvent(selected)
          if (!item) return
        }}
              >+</button>
            ` : ''}
          </div>
        </div>
        ${this.helpText ? html`
        <details class="ds-events__help">
          <summary>Help</summary>
          <span>${this.helpText}</span>
          ${this.helpLink ? html`
          <a
            class="ds-events__help-link"
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
      <p class="ds-empty">Select an element to edit its events</p>
    `
    if (!this.editor || this.disabled) {
      this.redrawing = false
      return html``
    }
    if (!selected) {
      this.redrawing = false
      return empty
    }

    const events = this.ensureEvents(selected);
    const items: Model<Item>[] = events;
    const result = html`
      ${this.getHead(selected)}
      <div class="ds-events">
        <div class="ds-events__items">
          ${items
        .map((item, index) => html`
            <div class="ds-events__item">
              ${this.getStateEditor(selected, item.get('name')!)}
              <div class="ds-events__modifiers">
                Modifiers:
                <button
                  class="ds-events__add-button ds-events__button"
                  @click=${(() => {
            const name = prompt("Modifier name:", "prevent");
            if (name) {
              item.get('modifiers')?.push(new Model<ModifierData>({
                name,
                id: item.get('modifiers')!.length.toString(),
              }))

              save(this.editor);
              this.requestUpdate();

            }
          })}
                >Add Modifier
                </button>
                <ul>
                  ${item.get('modifiers')?.map((modifier, idx) => {

            const modifiers = item.get('modifiers')!;
            return html`
                  <li>
                    <input 
                      value=${modifier.get('name')} @input=${(
                (e: InputEvent) => {
                  modifier.set(
                    'name',
                    (e.target as HTMLInputElement).value
                  )
                  item.set('modifiers', modifiers.slice());
                  selected.set('events', items.slice());
                  save(this.editor);
                  this.requestUpdate();
                }

              )}
                      />
                    <button
                      class="ds-events__remove-button ds-events__button"
                      @click=${() => {
                modifiers.splice(idx, 1);
                item.set('modifiers', modifiers.slice());
                selected.set('events', items.slice());
                this.requestUpdate();
              }}
                      title="Remove this modifier"
                    >
                      x
                    </button>
                  </li>
                  `
          }
          )}
                </ul>
              </div>
              <div class="ds-events__buttons">
                <button
                  title="Remove this event"
                  class="ds-events__remove-button ds-events__button"
                  @click=${() => {
            this.removeEvent(selected, item.get('name')!)
            this.requestUpdate()
          }}
                  >x</button>
                <button
                  title="Rename this event"
                  class="ds-events__rename-button ds-events__button"
                  @click=${() => {
            this.renameCustomEvent(selected, item)
            this.requestUpdate()
          }}
                  >\u270F</button>
                  <button
                    title="Move this event up"
                    class="ds-events__item-move-up ds-events__button${index === 0 ? ' ds-events__button--disabled' : ''}"
                    @click=${() => {
            items.splice(index - 1, 0, items.splice(index, 1)[0])
            this.updateOrderCustomEvents(selected, items)
          }}
                    >\u2191</button>
                  <button
                    title="Move this event down"
                    class="ds-events__item-move-down ds-events__button${index === items.length - 1 ? ' ds-events__button--disabled' : ''}"
                    @click=${() => {
            items.splice(index + 1, 0, items.splice(index, 1)[0])
            this.updateOrderCustomEvents(selected, items)
          }}
                  >\u2193</button>
              </div>
            </div>
            <hr class="ds-events__sep" />
          `)}
        </div>
      </div>
    `
    this.redrawing = false
    return result
  }
  ensureEvents(component: Component): Array<Model<Item>> {
    if (!component.get('events')) {
      component.set('events', new Collection());
    }
    const events = component.get('events');
    // restore events from json array
    if (!(component as any).eventsLoaded) {
      component.unset('events');
      component.set('events',

        events.map(
          (e: Item) => new Model<Item>({
            ...e,
            modifiers:
              (e.modifiers || [])
                .map((m: any) => new Model<ModifierData>(m))
          })
        )
      );
      (component as any).eventsLoaded = true;
      return component.get('events');
    }
    return events;
  }

  /**
   * Get the events for this type of editor
   */
  getStateIds(component: Component): string[] {
    return getStateIds(component, !this.privateEvent)
      // Filter out the events which are properties
      .filter(eventId => !this.reservedNames.includes(eventId))
  }

  /**
   * Get the events for this type of editor
   */
  getState(component: Component, name: string): StoredState | null {
    return getState(component, name, !this.privateEvent)
  }

  /**
   * Set the events for this type of editor
   */
  setEvent(component: Component, name: string, event: Model<Item>) {
    const events = this.ensureEvents(component);
    const existingEventIdx = events.findIndex(e => e.get('name') === name);
    if (existingEventIdx !== -1) {
      events.splice(existingEventIdx, 1, event);
    } else {
      events.push(event);
    }
    component.set('events', events.slice());
    this.requestUpdate();

  }

  /**
   * Remove the events for this type of editor
   */
  removeEvent(component: Component, name: string) {
    const events = this.ensureEvents(component);
    const idx = events.findIndex(e => e.get('name') === name);
    if (idx !== -1) {
      events.splice(idx, 1);
      component.set('events', events);
      this.requestUpdate();
    }

  }

  getStateEditor(selected: Component, name: string) {
    const id = NS + '--' + name;
    const evt = this.ensureEvents(selected).find(e => e.get('name') === name)!;
    const expr = JSON.parse(evt.get('expression')!)
    return html`
      <state-editor
        .selected=${selected}
        .editor=${this.editor}
        root-type="__actions"
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
    const eventEditor = this.shadowRoot!.querySelector(`#${NS + '--' + name}`) as StateEditor
    const events = this.ensureEvents(component);
    const evt = events.find(event => event.get('name') === name);
    evt?.set('expression', JSON.stringify(eventEditor.data));
    component.set('events', events);
    save(this.editor);

  }

  getTokens(dataTree: DataTree, component: Component, name: string): Token[] {
    const event = this.getState(component, name)
    if (!event || !event.expression) return []
    return event.expression.map(token => {
      try {
        return fromStored(token, dataTree, component.getId())
      } catch (e) {
        // FIXME: notify user
        console.error('Error while getting expression result type in getTokens', { expression: event.expression, component, dataTree, name })
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
   * Rename a custom event
   */
  renameCustomEvent(component: Component, item: Model<Item>) {
    const name = item.get('name')!;
    const label = prompt(this.renamePrompt, name || 'click')
      ?.toLowerCase()
      ?.replace(/[^a-z0-9]/g, '-')
      ?.replace(/^-+|-+$/g, '')
    if (!label || label === item.get('name')!) return item
    const events = this.ensureEvents(component);
    const evt = events.find(e => name && e.get('name') === name);
    evt!.set('name', label);
    component.set('events', events.slice());
  }

  /**
   * Update the custom events, in the order of the list
   */
  updateOrderCustomEvents(component: Component, items: Model<Item>[]) {
    const eventIds = this.getStateIds(component)
    // Remove all events
    eventIds.forEach(eventId => {
      if (items.map(item => item.get('name')).includes(eventId)) {
        this.removeEvent(component, eventId)
      }
    })
    // Add events in the order of the list
    items.forEach(item => {
      this.setEvent(component, item.get('name')!, item)
    })
  }

  /**
   * Create a new custom event
   */
  createCustomEvent(component: Component): Model<Item> | null {
    const label = cleanStateName(prompt(this.createPrompt, this.defaultName))
    if (!label) return null

    if (this.reservedNames.includes(label)) {
      alert(`The name ${label} is reserved, please choose another name`)
      return null
    }
    const evt = new Model<Item>({
      id: label,
      name: label,
      modifiers: [],
      expression: "[]",
    });
    this.setEvent(component, label, evt)

    return evt;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-events-editor': EventsEditor
  }
}
const save = debounce(function save(editor: DataSourceEditor | null) {
  return editor?.store?.();
}, 1000);

