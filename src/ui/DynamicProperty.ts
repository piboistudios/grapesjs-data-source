import { html } from 'lit-html'
import { Component } from 'grapesjs'
//import {basicSetup, EditorView, minimalSetup} from "codemirror"
//import {autocompletion, CompletionContext, CompletionResult, startCompletion} from "@codemirror/autocomplete"
//import { EditorState } from '@codemirror/state'
import { Field, Type } from '..'

const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

export class DynamicProperty {
  public name: string
  public displayName: string
  public onChange: ((value: Field[]) => void) | undefined
  //public isAvailable: (component: Component) => boolean
  //public getValue: (component: Component) => any
  //public setValue: (component: Component, value: any) => void
  constructor(def: {
    name: string,
    displayName: string,
    //isAvailable: (component: Component) => boolean,
    //getValue: (component: Component) => any,
    //setValue: (component: Component, value: any) => void,
  }) {
    this.name = def.name
    this.displayName = def.displayName
    //this.isAvailable = def.isAvailable
    //this.getValue = def.getValue
    //this.setValue = def.setValue
  }

  // autoComplete(context: CompletionContext, completions: Record<string, Type>): CompletionResult | null {
  //   //const before = context.matchBefore(/\w+/)
  //   // Match the last word with "." as a separator
  //   const before = context.matchBefore(/[\w\.]+/)
  //   if (before?.text.includes('.')) {
  //     const lastType = before?.text.split('.')
  //       // Remove the last variable, as it's the one being completed
  //       .slice(0, -1)
  //       // Get the current type
  //       .reduce((current: Type | null, name: string) => {
  //         console.log('current', current, name)
  //         if(current?.kind === 'LIST') {
  //           console.warn('LIST not implemented', current.ofType)
  //           throw new Error('LIST not implemented')
  //         } else if (current?.kind === 'OBJECT' || current?.fields) {
  //           const type: Type | undefined = current.fields.find(f => f.name === name)?.type
  //           if (!type) {
  //             console.warn('type not found', current, name)
  //             return null
  //           }
  //           return completions[type.name]
  //         } else if (current) {
  //           console.warn('type is not LIST or OBJECT', current)
  //           throw new Error('Not implementd: type is not LIST or OBJECT')
  //         } else {
  //           return completions[name]
  //         }
  //       }, null)
  //     const options = lastType?.fields?.map(field => ({
  //       label: field.name,
  //       type: field.type.kind === 'SCALAR' ? 'variable' : 'property',
  //     })) ?? []
  //     console.log('options', {options, lastType})
  //     const indexOfLastDot = before?.text?.lastIndexOf('.')
  //     const from = indexOfLastDot && indexOfLastDot > 0 ? indexOfLastDot + 1 : 0
  //     return {
  //       from,
  //       options,
  //       //validFor: /^\w*$/
  //     }
  //   } else {
  //     return {
  //       from: before?.from ?? context.pos,
  //       options: Object.values(completions).map((type: Type) => ({
  //         label: type.name,
  //         type: type.kind === 'SCALAR' ? 'variable' : 'property',
  //         //validFor: /.*\.$/,
  //       })),
  //     }
  //   }
  // }

  // showCompletion(view: EditorView) {
  //   setTimeout(() => {
  //     startCompletion(view)
  //   }, 0)
  // }

  getCompletion(context: Record<string, Type>, type: Type | undefined): Field[] {
    console.log('getCompletion', {context, type})
    if(type) {
      const result = context[type.name]?.fields
      console.log({result})
      return result ?? []
    } else {
      return Object.values(context).map((type: Type) => ({
        name: '',
        type,
      }))
    }
  }

  getCompletionSelect(currentIndex: number, displayedFields: Field[], context: Record<string, Type>, onChange: (field: Field) => void): ReturnType<typeof html> {
    const currentField = displayedFields[currentIndex]
    const previousField = displayedFields[currentIndex - 1]
    const completion = this.getCompletion(context, previousField?.type)
    console.log('zzz', {currentIndex, currentField, previousField, displayedFields, context})
    return html`
      <select
        @change=${(e: Event) => {
          const select = e.target as HTMLSelectElement
          const option = select.options[select.selectedIndex]
          const fieldName = select.value
          const isType = option.hasAttribute('data-is-type')
          const newField = completion.find(field => isType ? field.type.name === fieldName : field.name === fieldName)
          const newType = newField?.type
          if (newType) {
            onChange({
              name: fieldName,
              type: newType,
            })
          } else {
            console.error(`Type not found for field ${fieldName}`)
          }
        }}
        >
        <option value="">+</option>
        ${
          completion
          .map((field: Field) => html`
            <option
              value="${field.name === '' ? field.type.name : field.name}"
              ?data-is-type=${field.name === ''}
              ?selected=${field.name === '' ? field.type.name === currentField?.type.name : field.name === currentField?.name}
              >
              ${field.name === '' ? field.type.name : field.name}
            </option>
          `)
        }
      </select>
    `
  }

  toHtmlForm(fields: Field[], context: Record<string, Type>): ReturnType<typeof html> {
    if(!fields) throw new Error('fields is undefined')
    // const view: EditorView = new EditorView({
    //   doc: dsDataArray.map((type: Type) => `${type.name}`).join('.'),
    //   extensions: [
    //     //basicSetup,
    //     minimalSetup,
    //     // 1 line only
    //     EditorState.transactionFilter.of(tr => tr.newDoc.lines > 1 ? [] : [tr]),
    //     autocompletion({ override: [(context: CompletionContext) => this.autoComplete(context, completions)] }),
    //     EditorView.domEventHandlers({
    //       focus: () => this.showCompletion(view),
    //       update: () => this.showCompletion(view),
    //       input: () => console.log('input'),
    //       blur: () => console.log('blur'),
    //     }),
    //   ],
    //   parent: document.body
    // })
    return html`
      <label class="ds-container">
        <div class="ds-label">${this.displayName}</div>
        <div class="ds-field gjs-field gjs-field-text">
          ${
            fields.map((field: Field, index: number) => html`
              <label class="ds-container">
                <div class="ds-label">${field.name ?? field.type.name}</div>
                <div class="ds-field gjs-field gjs-field-text">
                  ${
                    this.getCompletionSelect(index, fields, context, (field: Field) => {
                      // Remove all types until the current one
                      // And replace the current one
                      this.onChange?.(fields.slice(0, index).concat(field) as Field[])
                    })
                  }
                </div>
              </label>
            `)
            //view.dom
          }
          ${
            this.getCompletionSelect(fields.length, fields, context, (field: Field) => {
              this.onChange?.(fields.concat(field) as Field[])
            })
          }
          +
        </div>
      </label>
    `
  }
}
