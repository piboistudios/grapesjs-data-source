import Backbone from "backbone"
import {Editor} from 'grapesjs'
import { DataSource, DataOptions } from ".."

/**
 * GrapesJs plugin to manage data sources
 */
export default class DataSourceManager extends Backbone.Collection<DataSource> {
  private editor: Editor
  private options: Record<string, DataOptions>
  constructor(models: DataSource[], { editor, ...opts }: any) {
    super(models, opts)
    this.editor = editor
    this.options = {
      ...opts,
    }
    // Make sure the symbol CRUD operations are undoable
    this.editor.UndoManager.add(this)
  }
  getAll(): DataSource[] {
    return this.models
  }
}
