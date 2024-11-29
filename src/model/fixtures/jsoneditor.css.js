export default `
.CodeMirror {
    font-family: monospace;
    height: 300px;
    color: #000;
    direction: ltr
}

.CodeMirror-lines {
    padding: 4px 0
}

.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
    padding: 0 4px
}

.CodeMirror-gutter-filler,
.CodeMirror-scrollbar-filler {
    background-color: #fff
}

.CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap
}

.CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap
}

.CodeMirror-guttermarker {
    color: #000
}

.CodeMirror-guttermarker-subtle {
    color: #999
}

.CodeMirror-cursor {
    border-left: 1px solid #000;
    border-right: none;
    width: 0
}

.CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver
}

.cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7
}

.cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1
}

.cm-fat-cursor .CodeMirror-line::selection,
.cm-fat-cursor .CodeMirror-line>span::selection,
.cm-fat-cursor .CodeMirror-line>span>span::selection {
    background: 0 0
}

.cm-fat-cursor .CodeMirror-line::-moz-selection,
.cm-fat-cursor .CodeMirror-line>span::-moz-selection,
.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection {
    background: 0 0
}

.cm-fat-cursor {
    caret-color: transparent
}

@-moz-keyframes blink {
    50% {
        background-color: transparent
    }
}

@-webkit-keyframes blink {
    50% {
        background-color: transparent
    }
}

@keyframes blink {
    50% {
        background-color: transparent
    }
}

.cm-tab {
    display: inline-block;
    text-decoration: inherit
}

.CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden
}

.CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute
}

.cm-s-default .cm-header {
    color: #00f
}

.cm-s-default .cm-quote {
    color: #090
}

.cm-negative {
    color: #d44
}

.cm-positive {
    color: #292
}

.cm-header,
.cm-strong {
    font-weight: 700
}

.cm-em {
    font-style: italic
}

.cm-link {
    text-decoration: underline
}

.cm-strikethrough {
    text-decoration: line-through
}

.cm-s-default .cm-keyword {
    color: #708
}

.cm-s-default .cm-atom {
    color: #219
}

.cm-s-default .cm-number {
    color: #164
}

.cm-s-default .cm-def {
    color: #00f
}

.cm-s-default .cm-variable-2 {
    color: #05a
}

.cm-s-default .cm-type,
.cm-s-default .cm-variable-3 {
    color: #085
}

.cm-s-default .cm-comment {
    color: #a50
}

.cm-s-default .cm-string {
    color: #a11
}

.cm-s-default .cm-string-2 {
    color: #f50
}

.cm-s-default .cm-meta {
    color: #555
}

.cm-s-default .cm-qualifier {
    color: #555
}

.cm-s-default .cm-builtin {
    color: #30a
}

.cm-s-default .cm-bracket {
    color: #997
}

.cm-s-default .cm-tag {
    color: #170
}

.cm-s-default .cm-attribute {
    color: #00c
}

.cm-s-default .cm-hr {
    color: #999
}

.cm-s-default .cm-link {
    color: #00c
}

.cm-s-default .cm-error {
    color: red
}

.cm-invalidchar {
    color: red
}

.CodeMirror-composing {
    border-bottom: 2px solid
}

div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0
}

div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22
}

.CodeMirror-matchingtag {
    background: rgba(255, 150, 0, .3)
}

.CodeMirror-activeline-background {
    background: #e8f2ff
}

.CodeMirror {
    position: relative;
    overflow: hidden;
    background: #fff
}

.CodeMirror-scroll {
    overflow: scroll !important;
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: 0;
    position: relative;
    z-index: 0
}

.CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent
}

.CodeMirror-gutter-filler,
.CodeMirror-hscrollbar,
.CodeMirror-scrollbar-filler,
.CodeMirror-vscrollbar {
    position: absolute;
    z-index: 6;
    display: none;
    outline: 0
}

.CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll
}

.CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll
}

.CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0
}

.CodeMirror-gutter-filler {
    left: 0;
    bottom: 0
}

.CodeMirror-gutters {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    z-index: 3
}

.CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -50px
}

.CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: 0 0 !important;
    border: none !important
}

.CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4
}

.CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4
}

.CodeMirror-gutter-wrapper ::selection {
    background-color: transparent
}

.CodeMirror-gutter-wrapper ::-moz-selection {
    background-color: transparent
}

.CodeMirror-lines {
    cursor: text;
    min-height: 1px
}

.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: 0 0;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual
}

.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal
}

.CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0
}

.CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: .1px
}

.CodeMirror-rtl pre {
    direction: rtl
}

.CodeMirror-code {
    outline: 0
}

.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber,
.CodeMirror-scroll,
.CodeMirror-sizer {
    -moz-box-sizing: content-box;
    box-sizing: content-box
}

.CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden
}

.CodeMirror-cursor {
    position: absolute;
    pointer-events: none
}

.CodeMirror-measure pre {
    position: static
}

div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3
}

div.CodeMirror-dragcursors {
    visibility: visible
}

.CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible
}

.CodeMirror-selected {
    background: #d9d9d9
}

.CodeMirror-focused .CodeMirror-selected {
    background: #d7d4f0
}

.CodeMirror-crosshair {
    cursor: crosshair
}

.CodeMirror-line::selection,
.CodeMirror-line>span::selection,
.CodeMirror-line>span>span::selection {
    background: #d7d4f0
}

.CodeMirror-line::-moz-selection,
.CodeMirror-line>span::-moz-selection,
.CodeMirror-line>span>span::-moz-selection {
    background: #d7d4f0
}

.cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, .4)
}

.cm-force-border {
    padding-right: .1px
}

@media print {
    .CodeMirror div.CodeMirror-cursors {
        visibility: hidden
    }
}

.cm-tab-wrap-hack:after {
    content: ''
}

span.CodeMirror-selectedtext {
    background: 0 0
}
.jse-absolut-popup.svelte-1r8q3m8 {
    position: relative;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    z-index: 1001;
  }
  
  .jse-absolute-popup.svelte-1r8q3m8 .jse-hidden-input:where(.svelte-1r8q3m8) {
    position: fixed;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    overflow: hidden;
  }
  
  .jse-absolute-popup.svelte-1r8q3m8 .jse-absolute-popup-content:where(.svelte-1r8q3m8) {
    position: absolute;
  }
  
  .fa-icon.svelte-1mc5hvj {
    display: inline-block;
    fill: currentColor;
  }
  
  .fa-flip-horizontal.svelte-1mc5hvj {
    transform: scale(-1, 1);
  }
  
  .fa-flip-vertical.svelte-1mc5hvj {
    transform: scale(1, -1);
  }
  
  .fa-spin.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s 0s infinite linear;
  }
  
  .fa-inverse.svelte-1mc5hvj {
    color: #fff;
  }
  
  .fa-pulse.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s infinite steps(8);
  }
  
  @keyframes svelte-1mc5hvj-fa-spin {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-boolean-toggle.svelte-1ryp01u {
    padding: 0;
    margin: 1px 0 0;
    vertical-align: top;
    display: inline-flex;
    color: var(--jse-value-color-boolean, #ff8c00);
  }
  
  .jse-boolean-toggle.svelte-1ryp01u:not(.jse-readonly) {
    cursor: pointer;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup,
  .jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::before,
  .jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::after {
    background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
    line-height: normal;
  }
  
  .jse-color-picker-popup.svelte-s1wu8v .picker_slider,
  .jse-color-picker-popup.svelte-s1wu8v .picker_sl,
  .jse-color-picker-popup.svelte-s1wu8v .picker_editor input,
  .jse-color-picker-popup.svelte-s1wu8v .picker_sample,
  .jse-color-picker-popup.svelte-s1wu8v .picker_done button {
    box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
  }
  
  .jse-color-picker-popup.svelte-s1wu8v .picker_editor input {
    background: var(--jse-background-color, #fff);
    color: var(--jse-text-color, #4d4d4d);
  }
  
  .jse-color-picker-popup.svelte-s1wu8v .picker_done button {
    background: var(--jse-button-background, #e0e0e0);
    color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
  }
  
  .jse-color-picker-popup.svelte-s1wu8v .picker_done button:hover {
    background: var(--jse-button-background-highlight, #e7e7e7);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-color-picker-button.svelte-xeg9n6 {
    font-size: var(--jse-font-size-mono, 14px);
    width: var(--jse-color-picker-button-size, 1em);
    height: var(--jse-color-picker-button-size, 1em);
    box-sizing: border-box;
    padding: 0;
    margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
    display: inline-flex;
    vertical-align: top;
    border: 1px solid var(--jse-text-color, #4d4d4d);
    border-radius: 2px;
    background: inherit;
    outline: none;
  }
  
  .jse-color-picker-button.svelte-xeg9n6:not(.jse-readonly) {
    cursor: pointer;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-value.jse-string.svelte-f9kmxj {
    color: var(--jse-value-color-string, #008000);
  }
  
  .jse-value.jse-object.svelte-f9kmxj,
  .jse-value.jse-array.svelte-f9kmxj {
    min-width: 16px;
    color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  }
  
  .jse-value.jse-number.svelte-f9kmxj {
    color: var(--jse-value-color-number, #ee422e);
  }
  
  .jse-value.jse-boolean.svelte-f9kmxj {
    color: var(--jse-value-color-boolean, #ff8c00);
  }
  
  .jse-value.jse-null.svelte-f9kmxj {
    color: var(--jse-value-color-null, #004ed0);
  }
  
  .jse-value.jse-invalid.svelte-f9kmxj {
    color: var(--jse-text-color, #4d4d4d);
  }
  
  .jse-value.jse-url.svelte-f9kmxj {
    color: var(--jse-value-color-url, #008000);
    text-decoration: underline;
  }
  
  div.jse-editable-div.svelte-f9kmxj {
    min-width: 2em;
    padding: 0 5px;
    box-sizing: border-box;
    outline: none;
    border-radius: 1px;
    vertical-align: top;
    cursor: text !important;
    word-break: normal;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
  
  div.jse-editable-div.jse-short-text.svelte-f9kmxj {
    overflow-wrap: normal;
  }
  
  div.jse-editable-div.jse-table-cell.svelte-f9kmxj {
    overflow-wrap: normal;
    white-space: nowrap;
  }
  
  div.jse-editable-div[contenteditable=true].svelte-f9kmxj {
    outline: var(--jse-edit-outline, 2px solid #656565);
    background: var(--jse-background-color, #fff);
    position: relative;
    display: inline-block;
    border-radius: 0;
    z-index: 3;
  }
  
  div.jse-editable-div.jse-empty.svelte-f9kmxj:not(:focus) {
    outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
    -moz-outline-radius: 2px;
  }
  
  div.jse-editable-div.jse-empty.svelte-f9kmxj::after {
    pointer-events: none;
    color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-highlight.svelte-5fb7bl {
    background-color: var(--jse-search-match-color, #ffe665);
    outline: var(--jse-search-match-outline, none);
  }
  
  .jse-highlight.jse-active.svelte-5fb7bl {
    background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
    outline: var(--jse-search-match-outline, 2px solid #e0be00);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-value.jse-string.svelte-c0g9qz {
    color: var(--jse-value-color-string, #008000);
  }
  
  .jse-value.jse-object.svelte-c0g9qz,
  .jse-value.jse-array.svelte-c0g9qz {
    min-width: 16px;
    color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  }
  
  .jse-value.jse-number.svelte-c0g9qz {
    color: var(--jse-value-color-number, #ee422e);
  }
  
  .jse-value.jse-boolean.svelte-c0g9qz {
    color: var(--jse-value-color-boolean, #ff8c00);
  }
  
  .jse-value.jse-null.svelte-c0g9qz {
    color: var(--jse-value-color-null, #004ed0);
  }
  
  .jse-value.jse-invalid.svelte-c0g9qz {
    color: var(--jse-text-color, #4d4d4d);
  }
  
  .jse-value.jse-url.svelte-c0g9qz {
    color: var(--jse-value-color-url, #008000);
    text-decoration: underline;
  }
  
  .jse-value.svelte-c0g9qz {
    display: inline-block;
    min-width: 2em;
    padding: 0 5px;
    box-sizing: border-box;
    outline: none;
    border-radius: 1px;
    vertical-align: top;
    word-break: normal;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
  }
  
  .jse-value.jse-table-cell.svelte-c0g9qz {
    overflow-wrap: normal;
    white-space: nowrap;
  }
  
  .jse-value.jse-empty.svelte-c0g9qz {
    min-width: 4em;
    outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
    -moz-outline-radius: 2px;
  }
  
  .jse-value.jse-empty.svelte-c0g9qz::after {
    pointer-events: none;
    color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
    content: "value";
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-tooltip.svelte-14y3y8t {
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    line-height: normal;
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
    border-radius: 3px;
    background: var(--jse-context-menu-background, #656565);
    color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
    white-space: nowrap;
    box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-timestamp.svelte-1jla5ec {
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-flex;
    color: var(--jse-value-color-number, #ee422e);
  }
  
  svg.svelte-qbd276 {
    width: var(--chevron-icon-width, 20px);
    height: var(--chevron-icon-width, 20px);
    color: var(--chevron-icon-colour, currentColor);
  }
  
  svg.svelte-whdbu1 {
    width: var(--clear-icon-width, 20px);
    height: var(--clear-icon-width, 20px);
    color: var(--clear-icon-color, currentColor);
  }
  
  .loading.svelte-1p3nqvd {
    width: var(--spinner-width, 20px);
    height: var(--spinner-height, 20px);
    color: var(--spinner-color, var(--icons-color));
    animation: svelte-1p3nqvd-rotate 0.75s linear infinite;
    transform-origin: center center;
    transform: none;
  }
  
  .circle_path.svelte-1p3nqvd {
    stroke-dasharray: 90;
    stroke-linecap: round;
  }
  
  @keyframes svelte-1p3nqvd-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  
  .svelte-select.svelte-82qwg8 {
    /* deprecating camelCase custom props in favour of kebab-case for v5 */
    --borderRadius: var(--border-radius);
    --clearSelectColor: var(--clear-select-color);
    --clearSelectWidth: var(--clear-select-width);
    --disabledBackground: var(--disabled-background);
    --disabledBorderColor: var(--disabled-border-color);
    --disabledColor: var(--disabled-color);
    --disabledPlaceholderColor: var(--disabled-placeholder-color);
    --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
    --errorBackground: var(--error-background);
    --errorBorder: var(--error-border);
    --groupItemPaddingLeft: var(--group-item-padding-left);
    --groupTitleColor: var(--group-title-color);
    --groupTitleFontSize: var(--group-title-font-size);
    --groupTitleFontWeight: var(--group-title-font-weight);
    --groupTitlePadding: var(--group-title-padding);
    --groupTitleTextTransform: var(--group-title-text-transform);
    --groupTitleBorderColor: var(--group-title-border-color);
    --groupTitleBorderWidth: var(--group-title-border-width);
    --groupTitleBorderStyle: var(--group-title-border-style);
    --indicatorColor: var(--chevron-color);
    --indicatorHeight: var(--chevron-height);
    --indicatorWidth: var(--chevron-width);
    --inputColor: var(--input-color);
    --inputLeft: var(--input-left);
    --inputLetterSpacing: var(--input-letter-spacing);
    --inputMargin: var(--input-margin);
    --inputPadding: var(--input-padding);
    --itemActiveBackground: var(--item-active-background);
    --itemColor: var(--item-color);
    --itemFirstBorderRadius: var(--item-first-border-radius);
    --itemHoverBG: var(--item-hover-bg);
    --itemHoverColor: var(--item-hover-color);
    --itemIsActiveBG: var(--item-is-active-bg);
    --itemIsActiveColor: var(--item-is-active-color);
    --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
    --itemPadding: var(--item-padding);
    --listBackground: var(--list-background);
    --listBorder: var(--list-border);
    --listBorderRadius: var(--list-border-radius);
    --listEmptyColor: var(--list-empty-color);
    --listEmptyPadding: var(--list-empty-padding);
    --listEmptyTextAlign: var(--list-empty-text-align);
    --listMaxHeight: var(--list-max-height);
    --listPosition: var(--list-position);
    --listShadow: var(--list-shadow);
    --listZIndex: var(--list-z-index);
    --multiItemBG: var(--multi-item-bg);
    --multiItemBorderRadius: var(--multi-item-border-radius);
    --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
    --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
    --multiItemHeight: var(--multi-item-height);
    --multiItemMargin: var(--multi-item-margin);
    --multiItemPadding: var(--multi-item-padding);
    --multiSelectInputMargin: var(--multi-select-input-margin);
    --multiSelectInputPadding: var(--multi-select-input-padding);
    --multiSelectPadding: var(--multi-select-padding);
    --placeholderColor: var(--placeholder-color);
    --placeholderOpacity: var(--placeholder-opacity);
    --selectedItemPadding: var(--selected-item-padding);
    --spinnerColor: var(--spinner-color);
    --spinnerHeight: var(--spinner-height);
    --spinnerWidth: var(--spinner-width);
  
    --internal-padding: 0 0 0 16px;
  
    border: var(--border, 1px solid #d8dbdf);
    border-radius: var(--border-radius, 6px);
    min-height: var(--height, 42px);
    position: relative;
    display: flex;
    align-items: stretch;
    padding: var(--padding, var(--internal-padding));
    background: var(--background, #fff);
    margin: var(--margin, 0);
    width: var(--width, 100%);
    font-size: var(--font-size, 16px);
    max-height: var(--max-height);
  }
  
  .svelte-82qwg8 {
    box-sizing: var(--box-sizing, border-box);
  }
  
  .svelte-select.svelte-82qwg8:hover {
    border: var(--border-hover, 1px solid #b2b8bf);
  }
  
  .value-container.svelte-82qwg8 {
    display: flex;
    flex: 1 1 0%;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px 10px;
    padding: var(--value-container-padding, 5px 0);
    position: relative;
    overflow: var(--value-container-overflow, hidden);
    align-self: stretch;
  }
  
  .prepend.svelte-82qwg8,
  .indicators.svelte-82qwg8 {
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }
  
  .indicators.svelte-82qwg8 {
    position: var(--indicators-position);
    top: var(--indicators-top);
    right: var(--indicators-right);
    bottom: var(--indicators-bottom);
  }
  
  input.svelte-82qwg8 {
    position: absolute;
    cursor: default;
    border: none;
    color: var(--input-color, var(--item-color));
    padding: var(--input-padding, 0);
    letter-spacing: var(--input-letter-spacing, inherit);
    margin: var(--input-margin, 0);
    min-width: 10px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    font-size: var(--font-size, 16px);
  }
  
  .svelte-82qwg8:not(.multi)>.value-container>input:where(.svelte-82qwg8) {
    width: 100%;
    height: 100%;
  }
  
  input.svelte-82qwg8::placeholder {
    color: var(--placeholder-color, #78848f);
    opacity: var(--placeholder-opacity, 1);
  }
  
  input.svelte-82qwg8:focus {
    outline: none;
  }
  
  .svelte-select.focused.svelte-82qwg8 {
    border: var(--border-focused, 1px solid #006fe8);
    border-radius: var(--border-radius-focused, var(--border-radius, 6px));
  }
  
  .disabled.svelte-82qwg8 {
    background: var(--disabled-background, #ebedef);
    border-color: var(--disabled-border-color, #ebedef);
    color: var(--disabled-color, #c1c6cc);
  }
  
  .disabled.svelte-82qwg8 input:where(.svelte-82qwg8)::placeholder {
    color: var(--disabled-placeholder-color, #c1c6cc);
    opacity: var(--disabled-placeholder-opacity, 1);
  }
  
  .selected-item.svelte-82qwg8 {
    position: relative;
    overflow: var(--selected-item-overflow, hidden);
    padding: var(--selected-item-padding, 0 20px 0 0);
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--selected-item-color, inherit);
    font-size: var(--font-size, 16px);
  }
  
  .multi.svelte-82qwg8 .selected-item:where(.svelte-82qwg8) {
    position: absolute;
    line-height: var(--height, 42px);
    height: var(--height, 42px);
  }
  
  .selected-item.svelte-82qwg8:focus {
    outline: none;
  }
  
  .hide-selected-item.svelte-82qwg8 {
    opacity: 0;
  }
  
  .icon.svelte-82qwg8 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .clear-select.svelte-82qwg8 {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--clear-select-width, 40px);
    height: var(--clear-select-height, 100%);
    color: var(--clear-select-color, var(--icons-color));
    margin: var(--clear-select-margin, 0);
    pointer-events: all;
    flex-shrink: 0;
  }
  
  .clear-select.svelte-82qwg8:focus {
    outline: var(--clear-select-focus-outline, 1px solid #006fe8);
  }
  
  .loading.svelte-82qwg8 {
    width: var(--loading-width, 40px);
    height: var(--loading-height);
    color: var(--loading-color, var(--icons-color));
    margin: var(--loading--margin, 0);
    flex-shrink: 0;
  }
  
  .chevron.svelte-82qwg8 {
    width: var(--chevron-width, 40px);
    height: var(--chevron-height, 40px);
    background: var(--chevron-background, transparent);
    pointer-events: var(--chevron-pointer-events, none);
    color: var(--chevron-color, var(--icons-color));
    border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
    flex-shrink: 0;
  }
  
  .multi.svelte-82qwg8 {
    padding: var(--multi-select-padding, var(--internal-padding));
  }
  
  .multi.svelte-82qwg8 input:where(.svelte-82qwg8) {
    padding: var(--multi-select-input-padding, 0);
    position: relative;
    margin: var(--multi-select-input-margin, 5px 0);
    flex: 1 1 40px;
  }
  
  .svelte-select.error.svelte-82qwg8 {
    border: var(--error-border, 1px solid #ff2d55);
    background: var(--error-background, #fff);
  }
  
  .a11y-text.svelte-82qwg8 {
    z-index: 9999;
    border: 0px;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    width: 1px;
    position: absolute;
    overflow: hidden;
    padding: 0px;
    white-space: nowrap;
  }
  
  .multi-item.svelte-82qwg8 {
    background: var(--multi-item-bg, #ebedef);
    margin: var(--multi-item-margin, 0);
    outline: var(--multi-item-outline, 1px solid #ddd);
    border-radius: var(--multi-item-border-radius, 4px);
    height: var(--multi-item-height, 25px);
    line-height: var(--multi-item-height, 25px);
    display: flex;
    cursor: default;
    padding: var(--multi-item-padding, 0 5px);
    overflow: hidden;
    gap: var(--multi-item-gap, 4px);
    outline-offset: -1px;
    max-width: var(--multi-max-width, none);
    color: var(--multi-item-color, var(--item-color));
  }
  
  .multi-item.disabled.svelte-82qwg8:hover {
    background: var(--multi-item-disabled-hover-bg, #ebedef);
    color: var(--multi-item-disabled-hover-color, #c1c6cc);
  }
  
  .multi-item-text.svelte-82qwg8 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .multi-item-clear.svelte-82qwg8 {
    display: flex;
    align-items: center;
    justify-content: center;
    --clear-icon-color: var(--multi-item-clear-icon-color, #000);
  }
  
  .multi-item.active.svelte-82qwg8 {
    outline: var(--multi-item-active-outline, 1px solid #006fe8);
  }
  
  .svelte-select-list.svelte-82qwg8 {
    box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
    border-radius: var(--list-border-radius, 4px);
    max-height: var(--list-max-height, 252px);
    overflow-y: auto;
    background: var(--list-background, #fff);
    position: var(--list-position, absolute);
    z-index: var(--list-z-index, 2);
    border: var(--list-border);
  }
  
  .prefloat.svelte-82qwg8 {
    opacity: 0;
    pointer-events: none;
  }
  
  .list-group-title.svelte-82qwg8 {
    color: var(--group-title-color, #8f8f8f);
    cursor: default;
    font-size: var(--group-title-font-size, 16px);
    font-weight: var(--group-title-font-weight, 600);
    height: var(--height, 42px);
    line-height: var(--height, 42px);
    padding: var(--group-title-padding, 0 20px);
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
    text-transform: var(--group-title-text-transform, uppercase);
    border-width: var(--group-title-border-width, medium);
    border-style: var(--group-title-border-style, none);
    border-color: var(--group-title-border-color, color);
  }
  
  .empty.svelte-82qwg8 {
    text-align: var(--list-empty-text-align, center);
    padding: var(--list-empty-padding, 20px 0);
    color: var(--list-empty-color, #78848f);
  }
  
  .item.svelte-82qwg8 {
    cursor: default;
    height: var(--item-height, var(--height, 42px));
    line-height: var(--item-line-height, var(--height, 42px));
    padding: var(--item-padding, 0 20px);
    color: var(--item-color, inherit);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: var(--item-transition, all 0.2s);
    align-items: center;
    width: 100%;
  }
  
  .item.group-item.svelte-82qwg8 {
    padding-left: var(--group-item-padding-left, 40px);
  }
  
  .item.svelte-82qwg8:active {
    background: var(--item-active-background, #b9daff);
  }
  
  .item.active.svelte-82qwg8 {
    background: var(--item-is-active-bg, #007aff);
    color: var(--item-is-active-color, #fff);
  }
  
  .item.first.svelte-82qwg8 {
    border-radius: var(--item-first-border-radius, 4px 4px 0 0);
  }
  
  .item.hover.svelte-82qwg8:not(.active) {
    background: var(--item-hover-bg, #e7f2ff);
    color: var(--item-hover-color, inherit);
  }
  
  .item.not-selectable.svelte-82qwg8,
  .item.hover.item.not-selectable.svelte-82qwg8,
  .item.active.item.not-selectable.svelte-82qwg8,
  .item.not-selectable.svelte-82qwg8:active {
    color: var(--item-is-not-selectable-color, #999);
    background: transparent;
  }
  
  .required.svelte-82qwg8 {
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  table.jse-transform-wizard.svelte-qbze6z {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  
  table.jse-transform-wizard.svelte-qbze6z input:where(.svelte-qbze6z) {
    font-family: inherit;
    font-size: inherit;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) th:where(.svelte-qbze6z) {
    font-weight: normal;
    text-align: left;
    width: 60px;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .multi-item {
    align-items: center;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .value-container {
    gap: 0 !important;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-path {
    flex: 4;
    margin-right: calc(0.5 * var(--jse-padding, 10px));
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-relation {
    flex: 1.5;
    margin-right: calc(0.5 * var(--jse-padding, 10px));
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-path {
    flex: 3;
    margin-right: calc(0.5 * var(--jse-padding, 10px));
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-direction {
    flex: 1;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-projection-paths {
    flex: 1;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select input {
    box-sizing: border-box;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z) {
    flex: 4;
    padding: 4px 8px;
    border: var(--jse-input-border, 1px solid #d8dbdf);
    border-radius: var(--jse-input-radius, 3px);
    outline: none;
    background: var(--jse-input-background, var(--jse-background-color, #fff));
    color: inherit;
  }
  
  table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z):focus {
    border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-select-query-language.svelte-atm4um {
    position: relative;
    width: 32px;
  }
  
  .jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  }
  
  .jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    text-align: left;
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    white-space: nowrap;
    color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
    background: var(--jse-context-menu-background, #656565);
  }
  
  .jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um):hover {
    background: var(--jse-context-menu-background-highlight, #7a7a7a);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-header.svelte-1y24war {
    display: flex;
    background: var(--jse-theme-color, #3883fa);
    color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  }
  
  .jse-header.svelte-1y24war .jse-title:where(.svelte-1y24war) {
    flex: 1;
    padding: 5px;
    vertical-align: middle;
  }
  
  .jse-header.svelte-1y24war button:where(.svelte-1y24war) {
    border: none;
    background: transparent;
    min-width: 32px;
    color: inherit;
    cursor: pointer;
  }
  
  .jse-header.svelte-1y24war button:where(.svelte-1y24war):hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-config.svelte-1kpylsp {
    border: none;
    background: transparent;
    min-width: 32px;
    color: inherit;
    cursor: pointer;
  }
  
  .jse-config.svelte-1kpylsp:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .jse-config.hide.svelte-1kpylsp {
    display: none;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-message.svelte-czprfx {
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    padding: var(--jse-padding, 10px);
    display: flex;
    gap: var(--jse-padding, 10px);
    flex-wrap: wrap;
    align-items: stretch;
  }
  
  .jse-message.jse-success.svelte-czprfx {
    background: var(--message-success-background, #9ac45d);
    color: var(--jse-message-success-color, #fff);
  }
  
  .jse-message.svelte-czprfx .jse-text:where(.svelte-czprfx) {
    display: flex;
    flex: 1;
    min-width: 60%;
    align-items: center;
  }
  
  .jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx) {
    cursor: pointer;
  }
  
  .jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx):hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .jse-message.jse-error.svelte-czprfx {
    background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
    color: var(--jse-message-error-color, #fff);
  }
  
  .jse-message.jse-warning.svelte-czprfx {
    background: var(--jse-message-warning-background, #ffde5c);
    color: var(--jse-message-warning-color, #4d4d4d);
  }
  
  .jse-message.jse-info.svelte-czprfx {
    background: var(--jse-message-info-background, #4f91ff);
    color: var(--jse-message-info-color, #fff);
  }
  
  .jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) {
    display: flex;
    gap: var(--jse-padding, 10px);
  }
  
  .jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
    color: inherit;
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  }
  
  .jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx):hover {
    background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-validation-errors-overview.svelte-1uindol {
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    overflow: auto;
    max-height: 25%;
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) {
    border-collapse: collapse;
    width: 100%;
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) {
    cursor: pointer;
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-error:where(.svelte-1uindol) {
    background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
    color: var(--jse-message-error-color, #fff);
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol) {
    background: var(--jse-message-warning-background, #ffde5c);
    color: var(--jse-message-warning-color, #4d4d4d);
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol):hover {
    filter: brightness(105%);
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-info:where(.svelte-1uindol) {
    background: var(--jse-message-info-background, #4f91ff);
    color: var(--jse-message-info-color, #fff);
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol):hover {
    filter: brightness(110%);
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) {
    padding: 4px var(--jse-padding, 10px);
    vertical-align: middle;
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-icon:where(.svelte-1uindol) {
    width: 36px;
    box-sizing: border-box;
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) {
    width: 36px;
    box-sizing: border-box;
    padding: 0;
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    width: 36px;
    height: 26px;
    cursor: pointer;
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol):hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) div.jse-validation-errors-expand:where(.svelte-1uindol) {
    display: inline-block;
    position: relative;
    top: 3px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  dialog.jse-modal.svelte-1s9c2ql {
    border-radius: 3px;
    font-size: var(--jse-padding, 10px);
    border: none;
    padding: 0;
    display: flex;
    min-width: 0;
    margin: auto;
    overflow: visible;
    transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
  }
  
  dialog.jse-modal.jse-sort-modal.svelte-1s9c2ql {
    width: 400px;
  }
  
  dialog.jse-modal.jse-repair-modal.svelte-1s9c2ql {
    width: 600px;
    height: 500px;
  }
  
  dialog.jse-modal.jse-jsoneditor-modal.svelte-1s9c2ql {
    width: 800px;
    height: 600px;
  }
  
  dialog.jse-modal.jse-transform-modal.svelte-1s9c2ql {
    width: 1200px;
    height: 800px;
  }
  
  dialog.jse-modal.jse-fullscreen.svelte-1s9c2ql {
    width: 100%;
    height: 100%;
  }
  
  dialog.jse-modal.svelte-1s9c2ql::backdrop {
    background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
  }
  
  dialog.jse-modal[open].svelte-1s9c2ql {
    animation: svelte-1s9c2ql-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  dialog.jse-modal[open].svelte-1s9c2ql::backdrop {
    animation: svelte-1s9c2ql-fade 0.2s ease-out;
  }
  
  dialog.jse-modal.svelte-1s9c2ql .jse-modal-inner:where(.svelte-1s9c2ql) {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    padding: 0;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    line-height: normal;
    background: var(--jse-modal-background, #f5f5f5);
    color: var(--jse-text-color, #4d4d4d);
  }
  
  @keyframes svelte-1s9c2ql-zoom {
    from {
      transform: scale(0.95);
    }
  
    to {
      transform: scale(1);
    }
  }
  
  @keyframes svelte-1s9c2ql-fade {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }
  
  dialog.jse-modal.svelte-1s9c2ql .svelte-select {
    --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
    --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
    --border-radius: var(--jse-svelte-select-border-radius, 3px);
    --background: var(--jse-svelte-select-background, #fff);
    --padding: var(--jse-svelte-select-padding, 0 10px);
    --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
    --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
    --height: 36px;
    --multi-item-height: 28px;
    --multi-item-margin: 2px;
    --multi-item-padding: 2px 8px;
    --multi-item-border-radius: 6px;
    --indicator-top: 8px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-modal-contents.svelte-189qksl {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: auto;
    min-width: 0;
    min-height: 0;
  }
  
  .jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: var(--jse-padding, 10px);
  }
  
  .jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
    color: var(--jse-button-primary-color, #fff);
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    border-radius: 3px;
  }
  
  .jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):hover {
    background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
  }
  
  .jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):disabled {
    background: var(--jse-button-primary-background-disabled, #9d9d9d);
  }
  
  .jse-shortcuts.svelte-189qksl {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: calc(2 * var(--jse-padding, 10px)) 0;
  }
  
  .jse-shortcuts.svelte-189qksl .jse-shortcut:where(.svelte-189qksl) .jse-key:where(.svelte-189qksl) {
    font-size: 200%;
    color: var(--jse-theme-color, #3883fa);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-menu.svelte-pf7s2l {
    background: var(--jse-theme-color, #3883fa);
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size-main-menu, 14px);
    color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    position: relative;
  }
  
  .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l) {
    font-family: inherit;
    font-size: inherit;
    line-height: 1.5em;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    width: var(--jse-menu-button-size, 32px);
    height: var(--jse-menu-button-size, 32px);
    padding: calc(0.5 * var(--jse-padding, 10px));
    margin: 0;
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):hover,
  .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):focus {
    background: var(--jse-theme-color-highlight, #5f9dff);
  }
  
  .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):disabled {
    color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
    opacity: 0.5;
    background: transparent;
  }
  
  .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l) {
    width: auto;
    height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
    margin: calc(0.5 * var(--jse-padding, 10px)) 0;
    padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
    border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  }
  
  .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):not(.jse-last) {
    border-right: none;
  }
  
  .jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-first:where(.svelte-pf7s2l) {
    margin-left: calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-last:where(.svelte-pf7s2l) {
    margin-right: calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):hover,
  .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):focus {
    background: var(--jse-theme-color-highlight, #5f9dff);
  }
  
  .jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-selected:where(.svelte-pf7s2l) {
    background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
    color: var(--jse-theme-color, #3883fa);
  }
  
  .jse-menu.svelte-pf7s2l .jse-space:where(.svelte-pf7s2l) {
    flex: 1;
  }
  
  .jse-menu.svelte-pf7s2l .jse-separator:where(.svelte-pf7s2l) {
    background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
    opacity: 0.3;
    width: 1px;
    margin: 3px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-json-repair-component.svelte-3golau {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: var(--jse-background-color, #fff);
    color: var(--jse-text-color, #4d4d4d);
  }
  
  .jse-json-repair-component.svelte-3golau .jse-info:where(.svelte-3golau) {
    padding: calc(0.5 * var(--jse-padding, 10px));
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    vertical-align: center;
  }
  
  .jse-json-repair-component.svelte-3golau .jse-json-text:where(.svelte-3golau) {
    flex: 1;
    border: none;
    padding: 2px;
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    background: var(--jse-input-background, var(--jse-background-color, #fff));
    color: var(--jse-text-color, #4d4d4d);
    resize: none;
    outline: none;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  div.jse-collapsed-items.svelte-1h6hzoq {
    margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
    padding: calc(0.5 * var(--jse-padding, 10px));
    border: 8px solid transparent;
    border-width: 8px 0;
    background-color: var(--jse-contents-background-color, transparent);
    background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
    background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
    background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
    background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
    background-clip: padding-box, border-box, border-box, border-box, border-box;
    background-origin: padding-box, border-box, border-box, border-box, border-box;
    display: flex;
  }
  
  div.jse-collapsed-items.jse-selected.svelte-1h6hzoq {
    background-color: var(--jse-selection-background-color, #d3d3d3);
    --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
  }
  
  div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq),
  div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
    margin: 0 calc(0.5 * var(--jse-padding, 10px));
  }
  
  div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq) {
    display: inline;
  }
  
  div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
    font-family: inherit;
    font-size: inherit;
    color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
    background: none;
    border: none;
    padding: 0;
    text-decoration: underline;
    cursor: pointer;
  }
  
  div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):hover,
  div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):focus {
    color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-context-menu-pointer.svelte-137iwnw {
    position: absolute;
    top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
    right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
    width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
    height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
    padding: 0;
    margin: 0;
    cursor: pointer;
    background: transparent;
    border-radius: 2px;
    background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
    color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
    border: none;
    box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  }
  
  .jse-context-menu-pointer.jse-root.svelte-137iwnw {
    top: 0;
    right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  }
  
  .jse-context-menu-pointer.jse-insert.svelte-137iwnw {
    right: -1px;
  }
  
  .jse-context-menu-pointer.svelte-137iwnw:hover {
    background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
  }
  
  .jse-context-menu-pointer.jse-selected.svelte-137iwnw {
    background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
  }
  
  .jse-context-menu-pointer.jse-selected.svelte-137iwnw:hover {
    background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-key.svelte-2iqnqn {
    display: inline-block;
    min-width: 2em;
    padding: 0 5px;
    box-sizing: border-box;
    outline: none;
    border-radius: 1px;
    vertical-align: top;
    color: var(--jse-key-color, #1a1a1a);
    word-break: normal;
    overflow-wrap: normal;
    white-space: pre-wrap;
  }
  
  .jse-key.jse-empty.svelte-2iqnqn {
    min-width: 3em;
    outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
    -moz-outline-radius: 2px;
  }
  
  .jse-key.jse-empty.svelte-2iqnqn::after {
    pointer-events: none;
    color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
    content: "key";
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  button.jse-validation-error.svelte-1a8aobl {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    padding: 0;
    margin: 0;
    vertical-align: top;
    display: inline-flex;
    color: var(--jse-error-color, #ee5341);
  }
  
  button.jse-validation-info.svelte-1a8aobl {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    padding: 0;
    margin: 0;
    vertical-align: top;
    display: inline-flex;
    color: var(--jse-info-color, #4f91ff);
  }
  
  button.jse-validation-warning.svelte-1a8aobl {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    padding: 0;
    margin: 0;
    vertical-align: top;
    display: inline-flex;
    color: var(--jse-warning-color, #fdc539);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-expand.svelte-wovgt4 {
    width: var(--jse-indent-size, calc(1em + 4px));
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
    font-size: var(--jse-font-size-mono, 14px);
    height: var(--jse-line-height, calc(1em + 4px));
  }
  
  .jse-expand.svelte-wovgt4:hover {
    opacity: 0.8;
  }
  
  .jse-meta.svelte-wovgt4,
  .jse-separator.svelte-wovgt4,
  .jse-index.svelte-wovgt4,
  .jse-bracket.svelte-wovgt4 {
    vertical-align: top;
    color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  }
  
  .jse-index.svelte-wovgt4 {
    padding: 0 calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-bracket.svelte-wovgt4 {
    padding: 0 2px;
  }
  
  .jse-bracket.jse-expanded.svelte-wovgt4 {
    padding-right: var(--jse-padding, 10px);
  }
  
  .jse-tag.svelte-wovgt4 {
    border: none;
    font-size: 80%;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
    background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
    border-radius: 2px;
    cursor: pointer;
    display: inline-block;
    padding: 0 4px;
    line-height: normal;
    margin: 1px 0;
  }
  
  .jse-tag.svelte-wovgt4:hover {
    opacity: 0.8;
  }
  
  .jse-tag.jse-expanded.svelte-wovgt4 {
    opacity: 0.7;
    cursor: inherit;
  }
  
  .jse-identifier.svelte-wovgt4 {
    vertical-align: top;
    position: relative;
  }
  
  .jse-json-node.svelte-wovgt4 {
    position: relative;
    color: var(--jse-text-color, #4d4d4d);
  }
  
  .jse-json-node.jse-root.svelte-wovgt4 {
    min-height: 100%;
    padding-bottom: 2px;
    box-sizing: border-box;
  }
  
  .jse-json-node.jse-root.svelte-wovgt4>.jse-contents-outer>.jse-contents:where(.svelte-wovgt4) {
    padding-left: 0;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-props:where(.svelte-wovgt4),
  .jse-json-node.svelte-wovgt4 .jse-items:where(.svelte-wovgt4) {
    position: relative;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-header-outer:where(.svelte-wovgt4),
  .jse-json-node.svelte-wovgt4 .jse-footer-outer:where(.svelte-wovgt4) {
    display: flex;
    margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  }
  
  .jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4) {
    position: relative;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4) .jse-meta>.jse-meta-inner:where(.svelte-wovgt4) {
    display: flex;
    justify-content: center;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-contents-outer:where(.svelte-wovgt4) {
    display: flex;
    margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  }
  
  .jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4),
  .jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4) {
    padding-left: var(--jse-indent-size, calc(1em + 4px));
    cursor: var(--jse-contents-cursor, pointer);
  }
  
  .jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4) .jse-value-outer:where(.svelte-wovgt4) {
    display: inline-flex;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4) {
    display: inline-flex;
    padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
  }
  
  .jse-json-node.svelte-wovgt4 .jse-header:where(.svelte-wovgt4),
  .jse-json-node.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4),
  .jse-json-node.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4) {
    background: var(--jse-contents-background-color, transparent);
  }
  
  .jse-json-node.svelte-wovgt4 .jse-insert-selection-area:where(.svelte-wovgt4) {
    padding: 0 calc(0.5 * var(--jse-padding, 10px));
    flex: 1;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-insert-selection-area.jse-inside:where(.svelte-wovgt4) {
    display: inline-flex;
    align-items: center;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-insert-selection-area.jse-after:where(.svelte-wovgt4) {
    display: flex;
    align-items: flex-end;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-context-menu-pointer-anchor:where(.svelte-wovgt4) {
    position: relative;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-insert-area:where(.svelte-wovgt4) {
    display: flex;
    position: relative;
    z-index: 1;
    margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
    max-width: 250px;
    min-width: 100px;
    height: 0;
    margin-right: calc(0.5 * var(--jse-padding, 10px));
    outline: 1px solid;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-insert-area.jse-hovered:where(.svelte-wovgt4) {
    outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  }
  
  .jse-json-node.svelte-wovgt4 .jse-key-outer:where(.svelte-wovgt4) {
    position: relative;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-key-outer:where(.svelte-wovgt4):hover,
  .jse-json-node.svelte-wovgt4 .jse-value-outer:where(.svelte-wovgt4):hover,
  .jse-json-node.svelte-wovgt4 .jse-meta:where(.svelte-wovgt4):hover,
  .jse-json-node.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4):hover {
    background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
    cursor: var(--jse-contents-cursor, pointer);
  }
  
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-meta,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-footer {
    background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
    cursor: var(--jse-contents-cursor, pointer);
  }
  
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
  .jse-json-node.jse-hovered.svelte-wovgt4:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
    background: none;
  }
  
  .jse-json-node.jse-selected.svelte-wovgt4 .jse-header:where(.svelte-wovgt4),
  .jse-json-node.jse-selected.svelte-wovgt4 .jse-contents:where(.svelte-wovgt4),
  .jse-json-node.jse-selected.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4) {
    background: var(--jse-selection-background-color, #d3d3d3);
    cursor: var(--jse-contents-selected-cursor, grab);
  }
  
  .jse-json-node.jse-selected.svelte-wovgt4 .jse-key-outer:where(.svelte-wovgt4):hover,
  .jse-json-node.jse-selected.svelte-wovgt4 .jse-value-outer:where(.svelte-wovgt4):hover,
  .jse-json-node.jse-selected.svelte-wovgt4 .jse-meta:where(.svelte-wovgt4):hover,
  .jse-json-node.jse-selected.svelte-wovgt4 .jse-footer:where(.svelte-wovgt4):hover {
    background: inherit;
    cursor: inherit;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-key-outer.jse-selected-key:where(.svelte-wovgt4) {
    background: var(--jse-selection-background-color, #d3d3d3);
    cursor: var(--jse-contents-selected-cursor, grab);
  }
  
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-value-outer,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-meta,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-header,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-contents,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-header,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-contents,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-footer {
    background: var(--jse-selection-background-color, #d3d3d3);
    cursor: var(--jse-contents-selected-cursor, grab);
  }
  
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-value-outer .jse-key-outer:hover,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-meta .jse-key-outer:hover,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-header .jse-key-outer:hover,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-items .jse-contents .jse-key-outer:hover,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-header .jse-key-outer:hover,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-props .jse-contents .jse-key-outer:hover,
  .jse-json-node.jse-selected-value.svelte-wovgt4 .jse-footer .jse-key-outer:hover {
    background: inherit;
    cursor: inherit;
  }
  
  .jse-json-node.jse-readonly.svelte-wovgt4 {
    --jse-contents-selected-cursor: pointer;
  }
  
  .jse-json-node.svelte-wovgt4 .jse-insert-area.jse-selected:where(.svelte-wovgt4) {
    outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-welcome.svelte-1eamlhk {
    flex: 1;
    overflow: auto;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-welcome.svelte-1eamlhk:last-child {
    border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-welcome.svelte-1eamlhk .jse-space.jse-before:where(.svelte-1eamlhk) {
    flex: 1;
  }
  
  .jse-welcome.svelte-1eamlhk .jse-space.jse-after:where(.svelte-1eamlhk) {
    flex: 2;
  }
  
  .jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 2em var(--jse-padding, 10px);
    gap: var(--jse-padding, 10px);
  }
  
  .jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) .jse-welcome-info:where(.svelte-1eamlhk) {
    color: var(--jse-panel-color-readonly, #b2b2b2);
  }
  
  .jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
    color: var(--jse-button-primary-color, #fff);
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    border-radius: 3px;
  }
  
  .jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):hover {
    background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
  }
  
  .jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):disabled {
    background: var(--jse-button-primary-background-disabled, #9d9d9d);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-navigation-bar-dropdown.svelte-2nnd2m {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 3;
    background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
    color: var(--jse-navigation-bar-dropdown-color, #656565);
    box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow: auto;
    min-width: 80px;
  }
  
  .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m) {
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    outline: none;
    text-align: left;
    white-space: nowrap;
    box-sizing: border-box;
    padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
  }
  
  .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):focus,
  .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):hover {
    background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
  }
  
  .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-2nnd2m) {
    background: var(--jse-navigation-bar-dropdown-color, #656565);
    color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-navigation-bar-item.svelte-752ro1 {
    position: relative;
    display: flex;
  }
  
  .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1) {
    font-family: inherit;
    font-size: inherit;
    padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    outline: none;
    min-width: 2em;
    white-space: nowrap;
  }
  
  .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):focus,
  .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):hover {
    background: var(--jse-panel-button-background-highlight, #e0e0e0);
    color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  }
  
  .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-752ro1) {
    padding: 2px var(--jse-padding, 10px) 0;
  }
  
  .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-752ro1) {
    background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
    color: var(--jse-navigation-bar-dropdown-color, #656565);
  }
  
  .jse-navigation-bar-item.svelte-752ro1:last-child {
    padding-right: var(--jse-padding, 10px);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-navigation-bar-path-editor.svelte-zc2wx7 {
    flex: 1;
    display: flex;
    border: var(--jse-edit-outline, 2px solid #656565);
    background: var(--jse-background-color, #fff);
  }
  
  .jse-navigation-bar-path-editor.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
    flex: 1;
    font-family: inherit;
    font-size: inherit;
    padding: 0 5px 1px;
    background: var(--jse-background-color, #fff);
    color: var(--jse-text-color, #4d4d4d);
    border: none;
    outline: none;
  }
  
  .jse-navigation-bar-path-editor.svelte-zc2wx7 button:where(.svelte-zc2wx7) {
    border: none;
    background: var(--jse-background-color, #fff);
    cursor: pointer;
    font-family: inherit;
    font-size: 80%;
    color: inherit;
  }
  
  .jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-copy.copied:where(.svelte-zc2wx7) {
    color: var(--message-success-background, #9ac45d);
  }
  
  .jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-validation-error:where(.svelte-zc2wx7) {
    color: var(--jse-error-color, #ee5341);
  }
  
  .jse-navigation-bar-path-editor.error.svelte-zc2wx7 {
    border-color: var(--jse-error-color, #ee5341);
  }
  
  .jse-navigation-bar-path-editor.error.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
    color: var(--jse-error-color, #ee5341);
  }
  
  .jse-navigation-bar-path-editor.svelte-zc2wx7 .jse-copied-text:where(.svelte-zc2wx7) {
    background: var(--message-success-background, #9ac45d);
    color: var(--jse-message-success-color, #fff);
    position: relative;
    margin: 2px;
    padding: 0 5px;
    border-radius: 3px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-navigation-bar.svelte-xs03gj {
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    background: var(--jse-panel-background, #ebebeb);
    color: var(--jse-panel-button-color, inherit);
    padding: 0;
    margin: 0;
    display: flex;
    overflow: auto;
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) {
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
    color: var(--jse-panel-color-readonly, #b2b2b2);
    background: transparent;
    border: none;
    display: flex;
    cursor: pointer;
    outline: none;
    align-items: center;
  }
  
  .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.flex:where(.svelte-xs03gj) {
    flex: 1;
  }
  
  .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):focus,
  .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):hover,
  .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.editing:where(.svelte-xs03gj) {
    background: var(--jse-panel-button-background-highlight, #e0e0e0);
    color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
    transition: color 0.2s ease-in, background 0.2s ease-in;
  }
  
  .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) .jse-navigation-bar-space:where(.svelte-xs03gj) {
    flex: 1;
    text-align: left;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-search-box.svelte-1mxl2uo {
    border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
    border-radius: 3px;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    background: var(--jse-panel-background, #ebebeb);
    color: var(--jse-panel-color-readonly, #b2b2b2);
    box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
    display: inline-block;
    width: 400px;
    max-width: 100%;
    overflow: auto;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) {
    display: flex;
    align-items: stretch;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo),
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
    font-family: inherit;
    font-size: inherit;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
    display: block;
    text-align: center;
    border: none;
    padding: 0 5px;
    margin: 0;
    cursor: pointer;
    color: var(--jse-panel-button-color, inherit);
    background: var(--jse-panel-button-background, transparent);
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo):hover {
    color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
    background: var(--jse-panel-button-background-highlight, #e0e0e0);
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
    color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
    border: var(--jse-input-border, 1px solid #d8dbdf);
    border-radius: 3px;
    background: var(--jse-input-background, var(--jse-background-color, #fff));
    height: 28px;
    padding: 0 5px;
    margin: 0;
    flex: 1;
    width: 0;
    min-width: 50px;
    outline: none;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-replace-toggle:where(.svelte-1mxl2uo) {
    padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
    min-width: 20px;
    background: var(--jse-panel-button-background-highlight, #e0e0e0);
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: calc(0.5 * var(--jse-padding, 10px));
    gap: calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-icon:where(.svelte-1mxl2uo) {
    color: inherit;
    cursor: inherit;
    background: inherit;
    width: 32px;
    text-align: center;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) label.jse-search-input-label:where(.svelte-1mxl2uo) {
    flex: 1;
    display: flex;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count:where(.svelte-1mxl2uo) {
    color: inherit;
    font-size: 80%;
    visibility: hidden;
    padding: 0 5px;
    min-width: 36px;
    text-align: center;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count.jse-visible:where(.svelte-1mxl2uo) {
    visibility: visible;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) {
    flex: 1;
    display: flex;
    padding-left: 32px;
  }
  
  .jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
    width: auto;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-json-preview.svelte-1vjn89h {
    flex: 1;
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    color: var(--jse-panel-color-readonly, #b2b2b2);
    overflow: auto;
    white-space: pre-wrap;
    padding: 2px;
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
    border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  button.jse-context-menu-button.svelte-1idfykj {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    flex: 1;
    white-space: nowrap;
    padding: var(--jse-padding, 10px);
    color: inherit;
  }
  
  button.jse-context-menu-button.svelte-1idfykj:hover {
    background: var(--jse-context-menu-background-highlight, #7a7a7a);
  }
  
  button.jse-context-menu-button.svelte-1idfykj:focus {
    background: var(--jse-context-menu-background-highlight, #7a7a7a);
    z-index: 1;
  }
  
  button.jse-context-menu-button.svelte-1idfykj:disabled {
    color: var(--jse-context-menu-color-disabled, #9d9d9d);
    background: unset;
  }
  
  button.jse-context-menu-button.left.svelte-1idfykj {
    text-align: left;
  }
  
  button.jse-context-menu-button.svelte-1idfykj svg {
    width: 16px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-dropdown-button.svelte-11rxb2m {
    flex: 1;
    line-height: normal;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    position: relative;
    padding: 0;
    display: flex;
  }
  
  .jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) {
    margin: 0;
    padding: 0;
  }
  
  .jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) li:where(.svelte-11rxb2m) {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    width: 2em;
    background: var(--jse-context-menu-background, #656565);
    color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
    border-radius: 0;
  }
  
  .jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown.jse-visible:where(.svelte-11rxb2m) {
    background: var(--jse-context-menu-background, #656565);
  }
  
  .jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):hover {
    background: var(--jse-context-menu-background-highlight, #7a7a7a);
  }
  
  .jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):focus {
    z-index: 1;
  }
  
  .jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):disabled {
    color: var(--jse-context-menu-color-disabled, #9d9d9d);
    background: unset;
  }
  
  .jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    background: var(--jse-context-menu-background, #656565);
    color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
    box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  }
  
  .jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items.jse-visible:where(.svelte-11rxb2m) {
    display: block;
  }
  
  .jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    width: 100%;
    text-align: left;
    padding: var(--jse-padding, 10px);
    margin: 0;
  }
  
  .jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):hover {
    background: var(--jse-context-menu-background-highlight, #7a7a7a);
  }
  
  .jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):disabled {
    color: var(--jse-context-menu-color-disabled, #9d9d9d);
    background: unset;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  button.jse-context-menu-button.svelte-1idfykj {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    flex: 1;
    white-space: nowrap;
    padding: var(--jse-padding, 10px);
    color: inherit;
  }
  
  button.jse-context-menu-button.svelte-1idfykj:hover {
    background: var(--jse-context-menu-background-highlight, #7a7a7a);
  }
  
  button.jse-context-menu-button.svelte-1idfykj:focus {
    background: var(--jse-context-menu-background-highlight, #7a7a7a);
    z-index: 1;
  }
  
  button.jse-context-menu-button.svelte-1idfykj:disabled {
    color: var(--jse-context-menu-color-disabled, #9d9d9d);
    background: unset;
  }
  
  button.jse-context-menu-button.left.svelte-1idfykj {
    text-align: left;
  }
  
  button.jse-context-menu-button.svelte-1idfykj svg {
    width: 16px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-contextmenu.svelte-12z7bz1 {
    box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    background: var(--jse-context-menu-background, #656565);
    color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  }
  
  .jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: stretch;
  }
  
  .jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-label:where(.svelte-12z7bz1) {
    flex: 1;
    white-space: nowrap;
    padding: var(--jse-padding, 10px);
    color: var(--jse-context-menu-color-disabled, #9d9d9d);
    line-height: normal;
  }
  
  .jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) {
    flex: 1;
    background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
    color: var(--context-menu-tip-color, inherit);
    margin: calc(0.5 * var(--jse-padding, 10px));
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
    font-size: 80%;
    line-height: 1.3em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--jse-padding, 10px);
    border-radius: 3px;
  }
  
  .jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) div.jse-tip-icon:where(.svelte-12z7bz1) {
    padding-top: calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  
  .jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1):not(:last-child) {
    border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
  }
  
  .jse-contextmenu.svelte-12z7bz1 .jse-separator:where(.svelte-12z7bz1) {
    width: 100%;
    height: 1px;
    background: var(--jse-context-menu-separator-color, #7a7a7a);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-tree-mode.svelte-vrx1dr {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background: var(--jse-background-color, #fff);
    min-width: 0;
    min-height: 0;
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    color: var(--jse-text-color, #4d4d4d);
    line-height: var(--jse-line-height, calc(1em + 4px));
  }
  
  .jse-tree-mode.svelte-vrx1dr .jse-hidden-input-label:where(.svelte-vrx1dr) .jse-hidden-input:where(.svelte-vrx1dr) {
    position: fixed;
    top: -10px;
    left: -10px;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    outline: none;
  }
  
  .jse-tree-mode.no-main-menu.svelte-vrx1dr {
    border-top: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-tree-mode.svelte-vrx1dr .jse-search-box-container:where(.svelte-vrx1dr) {
    position: relative;
    height: 0;
    top: var(--jse-padding, 10px);
    margin-right: calc(var(--jse-padding, 10px) + 20px);
    margin-left: var(--jse-padding, 10px);
    text-align: right;
    z-index: 3;
  }
  
  .jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) {
    flex: 1;
    overflow: auto;
    position: relative;
    padding: 2px;
    display: flex;
    flex-direction: column;
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr):last-child {
    border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading-space:where(.svelte-vrx1dr) {
    flex: 1;
  }
  
  .jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading:where(.svelte-vrx1dr) {
    flex: 2;
    text-align: center;
    color: var(--jse-panel-color-readonly, #b2b2b2);
    box-sizing: border-box;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
  }
  
  .jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-search-box-background:where(.svelte-vrx1dr) {
    border: 50px solid var(--jse-modal-background, #f5f5f5);
    margin: -2px;
    margin-bottom: 2px;
    display: inline-block;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-transform-modal-inner.svelte-rrrjnb {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) {
    color: inherit;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: auto;
    min-width: 0;
    min-height: 0;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: var(--jse-padding, 10px);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
    color: var(--jse-button-primary-color, #fff);
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    border-radius: 3px;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):hover {
    background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):disabled {
    background: var(--jse-button-primary-background-disabled, #9d9d9d);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
    flex: 1;
    display: flex;
    gap: calc(2 * var(--jse-padding, 10px));
    min-height: 0;
    box-sizing: border-box;
    padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p {
    margin: var(--jse-padding, 10px) 0;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:first-child {
    margin-top: 0;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:last-child {
    margin-bottom: 0;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) code {
    background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .query-error:where(.svelte-rrrjnb) {
    color: var(--jse-error-color, #ee5341);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
    flex: 1;
    outline: none;
    resize: vertical;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--jse-padding, 10px));
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data:where(.svelte-rrrjnb) {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    box-sizing: border-box;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data.jse-hide:where(.svelte-rrrjnb) {
    flex: none;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-preview-data:where(.svelte-rrrjnb) {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    box-sizing: border-box;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents.jse-hide-original-data:where(.svelte-rrrjnb) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 0;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
  }
  
  @media screen and (max-width: 1200px) {
    .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
      flex-direction: column;
      overflow: auto;
    }
  
    .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
      min-height: 150px;
      flex: none;
    }
  
    .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-tree-mode {
      height: 300px;
      flex: none;
    }
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) {
    font-weight: bold;
    display: block;
    box-sizing: border-box;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) {
    margin-top: calc(2 * var(--jse-padding, 10px));
    margin-bottom: calc(0.5 * var(--jse-padding, 10px));
    box-sizing: border-box;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) button:where(.svelte-rrrjnb) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    font-weight: bold;
    padding: 0;
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-tree-mode {
    flex: 1;
    background: var(--jse-input-background-readonly, transparent);
    box-shadow: none;
    box-sizing: border-box;
    --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb),
  .jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb) {
    border: var(--jse-input-border, 1px solid #d8dbdf);
    outline: none;
    box-sizing: border-box;
    padding: calc(0.5 * var(--jse-padding, 10px));
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    color: inherit;
    background: var(--jse-input-background, var(--jse-background-color, #fff));
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):focus,
  .jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):focus {
    border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):read-only,
  .jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):read-only {
    background: var(--jse-input-background-readonly, transparent);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb .jse-preview.jse-error:where(.svelte-rrrjnb) {
    flex: 1;
    background: var(--jse-input-background-readonly, transparent);
    border: var(--jse-input-border, 1px solid #d8dbdf);
    color: var(--jse-error-color, #ee5341);
    padding: calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb a {
    color: var(--jse-a-color, #156fc5);
  }
  
  .jse-transform-modal-inner.svelte-rrrjnb a:hover {
    color: var(--jse-a-color-highlight, #0f508d);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-status-bar.svelte-1ulj7zd {
    background: var(--jse-panel-background, #ebebeb);
    color: var(--jse-panel-color-readonly, #b2b2b2);
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    margin: 0;
    border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
    display: flex;
    gap: var(--jse-padding, 10px);
  }
  
  .jse-status-bar.svelte-1ulj7zd:last-child {
    border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-status-bar.svelte-1ulj7zd .jse-status-bar-info:where(.svelte-1ulj7zd) {
    padding: 2px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-text-mode.svelte-xt61xw {
    --internal-key-color: var(--jse-key-color, #1a1a1a);
    --internal-value-color-number: var(--jse-value-color-number, #ee422e);
    --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
    --internal-value-color-string: var(--jse-value-color-string, #008000);
    --internal-value-color-null: var(--jse-value-color-null, #004ed0);
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: var(--jse-background-color, #fff);
  }
  
  .jse-text-mode.no-main-menu.svelte-xt61xw {
    border-top: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) {
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw):last-child {
    border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents.jse-hidden:where(.svelte-xt61xw) {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor {
    flex: 1;
    overflow: hidden;
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-scroller {
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    line-height: var(--jse-line-height, calc(1em + 4px));
    color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-gutters {
    background: var(--jse-panel-background, #ebebeb);
    color: var(--jse-panel-color-readonly, #b2b2b2);
    border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLine,
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLineGutter {
    background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionBackground {
    background: var(--jse-selection-background-color, #d3d3d3);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch {
    background-color: var(--jse-search-match-color, #ffe665);
    outline: var(--jse-search-match-outline, none);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
    background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
    outline: var(--jse-search-match-outline, 2px solid #e0be00);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionMatch {
    background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-foldPlaceholder {
    background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
    color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
    border: none;
    padding: 0 var(--jse-padding, 10px);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-tooltip {
    font-size: var(--jse-font-size, 16px);
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
    background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
    border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-diagnosticAction {
    background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
    background: var(--jse-tooltip-action-button-background, #4d4d4d);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-panels {
    border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search {
    background: var(--jse-panel-background, #ebebeb);
    color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search input {
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size-text-mode-search, 80%);
    color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
    border: var(--jse-input-border, 1px solid #d8dbdf);
    background: var(--jse-input-background, var(--jse-background-color, #fff));
    margin-right: 2px;
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button {
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size-text-mode-search, 80%);
    color: var(--jse-panel-button-color, inherit);
    background: var(--jse-panel-button-background, transparent);
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
    margin: 0;
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button:hover {
    color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
    background: var(--jse-panel-button-background-highlight, #e0e0e0);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label {
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size-text-mode-search, 80%);
    padding-left: var(--jse-padding, 10px);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label input {
    margin-right: 2px;
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button[name="close"] {
    width: 32px;
    height: 32px;
    font-size: 24px;
    line-height: 24px;
    padding: 0;
    right: 0;
    top: -4px;
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-cursor-primary {
    border-color: var(--jse-text-color, #4d4d4d);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading-space:where(.svelte-xt61xw) {
    flex: 1;
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading:where(.svelte-xt61xw) {
    flex: 2;
    text-align: center;
    color: var(--jse-panel-color-readonly, #b2b2b2);
    box-sizing: border-box;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
  }
  
  .jse-text-mode.svelte-xt61xw .jse-contents.jse-preview:where(.svelte-xt61xw) {
    flex: 1;
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    color: var(--jse-panel-color-readonly, #b2b2b2);
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-word;
    padding: 2px;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-inline-value.svelte-h57m0p {
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    line-height: var(--jse-line-height, calc(1em + 4px));
    border: none;
    padding: 0 calc(0.5 * var(--jse-padding, 10px));
    background: transparent;
    color: inherit;
    cursor: inherit;
  }
  
  .jse-inline-value.jse-highlight.svelte-h57m0p {
    background-color: var(--jse-search-match-color, #ffe665);
    outline: var(--jse-search-match-outline, none);
  }
  
  .jse-inline-value.jse-highlight.jse-active.svelte-h57m0p {
    background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
    outline: var(--jse-search-match-outline, 2px solid #e0be00);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-column-header.svelte-2i3vdx {
    background: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    display: flex;
    gap: var(--jse-padding, 10px);
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
    width: 100%;
  }
  
  .jse-column-header.svelte-2i3vdx:hover {
    background: var(--jse-table-header-background-highlight, #e8e8e8);
  }
  
  .jse-column-header.svelte-2i3vdx:not(.jse-column-header.jse-readonly) {
    cursor: pointer;
  }
  
  .jse-column-header.svelte-2i3vdx span.jse-column-sort-icon:where(.svelte-2i3vdx) {
    height: 1em;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-table-mode-welcome.svelte-1q0ce0e {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: center;
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e:last-child {
    border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-space.jse-before:where(.svelte-1q0ce0e) {
    flex: 1;
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) {
    display: flex;
    flex-direction: column;
    gap: var(--jse-padding, 10px);
    max-width: 300px;
    margin: 2em var(--jse-padding, 10px);
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) .jse-nested-arrays-info:where(.svelte-1q0ce0e) {
    color: var(--jse-panel-color-readonly, #b2b2b2);
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e) {
    text-align: left;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
    color: var(--jse-button-primary-color, #fff);
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    border-radius: 3px;
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e):hover {
    background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e):disabled {
    background: var(--jse-button-primary-background-disabled, #9d9d9d);
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-nested-arrays:where(.svelte-1q0ce0e) button.jse-nested-array-action:where(.svelte-1q0ce0e) .jse-nested-array-count:where(.svelte-1q0ce0e) {
    opacity: 0.5;
    white-space: nowrap;
  }
  
  .jse-table-mode-welcome.svelte-1q0ce0e .jse-space.jse-after:where(.svelte-1q0ce0e) {
    flex: 2;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-column-header.svelte-fzj761 {
    background: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    display: flex;
    gap: var(--jse-padding, 10px);
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
    width: 100%;
  }
  
  .jse-column-header.svelte-fzj761:hover {
    background: var(--jse-table-header-background-highlight, #e8e8e8);
  }
  
  .jse-column-header.svelte-fzj761:not(.jse-column-header.jse-readonly) {
    cursor: pointer;
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-table-mode.svelte-u14cgx {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background: var(--jse-background-color, #fff);
    min-width: 0;
    min-height: 0;
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    color: var(--jse-text-color, #4d4d4d);
    line-height: var(--jse-line-height, calc(1em + 4px));
  }
  
  .jse-table-mode.no-main-menu.svelte-u14cgx {
    border-top: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-search-box-container:where(.svelte-u14cgx) {
    position: relative;
    height: 0;
    top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
    margin-right: calc(var(--jse-padding, 10px) + 20px);
    margin-left: var(--jse-padding, 10px);
    text-align: right;
    z-index: 3;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) {
    position: fixed;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) .jse-hidden-input:where(.svelte-u14cgx) {
    width: 0;
    height: 0;
    padding: 0;
    border: 0;
    outline: none;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) {
    flex: 1;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    overflow: auto;
    overflow-anchor: none;
    scrollbar-gutter: stable;
    border-left: var(--jse-main-border, 1px solid #d7d7d7);
    border-right: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx):last-child {
    border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-start-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx),
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
    margin: 0;
    padding: 0;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-search-box-background:where(.svelte-u14cgx) {
    background: var(--jse-table-header-background, #f5f5f5);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
    padding-bottom: var(--jse-padding, 10px);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx):hover {
    background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) {
    padding: 0 var(--jse-padding, 10px) 0 0;
    vertical-align: top;
    white-space: nowrap;
    height: var(--jse-line-height, calc(1em + 4px));
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx),
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
    font-weight: normal;
    text-align: left;
    color: var(--jse-text-readonly, #8d8d8d);
    background: var(--jse-table-header-background, #f5f5f5);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) {
    padding: 0;
    position: sticky;
    top: 0;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) .jse-table-root-error:where(.svelte-u14cgx) {
    padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
    padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx) {
    display: inline-block;
    cursor: var(--jse-contents-cursor, pointer);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx):hover {
    background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer.jse-selected-value:where(.svelte-u14cgx) {
    background: var(--jse-selection-background-color, #d3d3d3);
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-context-menu-anchor:where(.svelte-u14cgx) {
    display: inline-flex;
    position: relative;
    vertical-align: top;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) {
    align-items: unset;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading-space:where(.svelte-u14cgx) {
    flex: 1;
  }
  
  .jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading:where(.svelte-u14cgx) {
    flex: 2;
    text-align: center;
    color: var(--jse-panel-color-readonly, #b2b2b2);
    box-sizing: border-box;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-modal-wrapper.svelte-v0el4e {
    flex: 1;
    display: flex;
    min-width: 0;
    min-height: 0;
    flex-direction: column;
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: auto;
    min-width: 0;
    min-height: 0;
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: var(--jse-padding, 10px);
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
    color: var(--jse-button-primary-color, #fff);
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    border-radius: 3px;
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):hover {
    background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):disabled {
    background: var(--jse-button-primary-background-disabled, #9d9d9d);
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) {
    font-weight: bold;
    display: block;
    box-sizing: border-box;
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) .jse-label-inner:where(.svelte-v0el4e) {
    margin-top: calc(2 * var(--jse-padding, 10px));
    margin-bottom: calc(0.5 * var(--jse-padding, 10px));
    box-sizing: border-box;
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-modal-inline-editor:where(.svelte-v0el4e) {
    flex: 1;
    min-height: 150px;
    min-width: 0;
    max-width: 100%;
    display: flex;
    --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
    --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) {
    gap: var(--jse-padding, 10px);
    align-items: center;
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) .jse-error:where(.svelte-v0el4e) {
    flex: 1;
    color: var(--jse-error-color, #ee5341);
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-button-secondary-background, #d3d3d3);
    color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    border-radius: 3px;
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):hover {
    background: var(--jse-button-secondary-background-highlight, #e1e1e1);
  }
  
  .jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):disabled {
    background: var(--jse-button-secondary-background-disabled, #9d9d9d);
  }
  
  .jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e) {
    border: var(--jse-input-border, 1px solid #d8dbdf);
    outline: none;
    box-sizing: border-box;
    padding: calc(0.5 * var(--jse-padding, 10px));
    font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
    font-size: var(--jse-font-size-mono, 14px);
    color: inherit;
    background: var(--jse-input-background, var(--jse-background-color, #fff));
  }
  
  .jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):focus {
    border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
  }
  
  .jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):read-only {
    background: var(--jse-input-background-readonly, transparent);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-modal-contents.svelte-1v9c92j {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: auto;
    min-width: 0;
    min-height: 0;
  }
  
  .jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: var(--jse-padding, 10px);
  }
  
  .jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j) {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    padding: 5px;
    margin: 0;
    background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
    color: var(--jse-button-primary-color, #fff);
    padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
    border-radius: 3px;
  }
  
  .jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):hover {
    background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
  }
  
  .jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):disabled {
    background: var(--jse-button-primary-background-disabled, #9d9d9d);
  }
  
  .jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  .jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) th:where(.svelte-1v9c92j),
  .jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) td:where(.svelte-1v9c92j) {
    text-align: left;
    vertical-align: middle;
    font-weight: normal;
    padding-bottom: var(--jse-padding, 10px);
  }
  
  .jse-modal-contents.svelte-1v9c92j input.jse-path:where(.svelte-1v9c92j) {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 10px;
    border: var(--jse-input-border, 1px solid #d8dbdf);
    border-radius: var(--jse-input-radius, 3px);
    font-family: inherit;
    font-size: inherit;
    background: inherit;
    background: var(--jse-input-background-readonly, transparent);
    color: inherit;
    outline: none;
  }
  
  .jse-modal-contents.svelte-1v9c92j .svelte-select input {
    box-sizing: border-box;
  }
  
  .jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) {
    height: 200px;
  }
  
  .jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) .jse-error:where(.svelte-1v9c92j) {
    color: var(--jse-error-color, #ee5341);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-main.svelte-57bmz4 {
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 150px;
    font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
    font-size: var(--jse-font-size, 16px);
    line-height: normal;
    position: relative;
    display: flex;
    flex-direction: row;
  }
  
  .jse-main.svelte-57bmz4:not(.jse-focus) {
    --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
    --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  }
  
  
  
  /* over all fonts, sizes, and colors */
  /* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
  /* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
  /* main, menu, modal */
  /* jsoneditor modal */
  /* tooltip in text mode */
  /* panels: navigation bar, gutter, search box */
  /* navigation-bar */
  /* context menu */
  /* contents: json key and values */
  /* contents: selected or hovered */
  /* contents: section of collapsed items in an array */
  /* contents: highlighting of search matches */
  /* contents: inline tags inside the JSON document */
  /* contents: table */
  /* controls in modals: inputs, buttons, and \`a\` */
  /* messages */
  /* svelte-select */
  /* color picker */
  .jse-value.jse-string.svelte-6ttr41 {
    color: var(--jse-value-color-string, #008000);
  }
  
  .jse-value.jse-object.svelte-6ttr41,
  .jse-value.jse-array.svelte-6ttr41 {
    min-width: 16px;
    color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  }
  
  .jse-value.jse-number.svelte-6ttr41 {
    color: var(--jse-value-color-number, #ee422e);
  }
  
  .jse-value.jse-boolean.svelte-6ttr41 {
    color: var(--jse-value-color-boolean, #ff8c00);
  }
  
  .jse-value.jse-null.svelte-6ttr41 {
    color: var(--jse-value-color-null, #004ed0);
  }
  
  .jse-value.jse-invalid.svelte-6ttr41 {
    color: var(--jse-text-color, #4d4d4d);
  }
  
  .jse-value.jse-url.svelte-6ttr41 {
    color: var(--jse-value-color-url, #008000);
    text-decoration: underline;
  }
  
  .jse-enum-value.svelte-6ttr41 {
    background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    outline: none;
  }
  
  .jse-enum-value.jse-selected.svelte-6ttr41 {
    background: var(--jse-selection-background-color, #d3d3d3);
    color: inherit;
  }
  
  .jse-enum-value.jse-value.svelte-6ttr41:focus {
    color: var(--jse-text-color, #4d4d4d);
  }
  
  .picker_wrapper.no_alpha .picker_alpha {
    display: none
  }
  
  .picker_wrapper.no_editor .picker_editor {
    position: absolute;
    z-index: -1;
    opacity: 0
  }
  
  .picker_wrapper.no_cancel .picker_cancel {
    display: none
  }
  
  .layout_default.picker_wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    font-size: 10px;
    width: 25em;
    padding: .5em
  }
  
  .layout_default.picker_wrapper input,
  .layout_default.picker_wrapper button {
    font-size: 1rem
  }
  
  .layout_default.picker_wrapper>* {
    margin: .5em
  }
  
  .layout_default.picker_wrapper::before {
    content: "";
    display: block;
    width: 100%;
    height: 0;
    order: 1
  }
  
  .layout_default .picker_slider,
  .layout_default .picker_selector {
    padding: 1em
  }
  
  .layout_default .picker_hue {
    width: 100%
  }
  
  .layout_default .picker_sl {
    flex: 1 1 auto
  }
  
  .layout_default .picker_sl::before {
    content: "";
    display: block;
    padding-bottom: 100%
  }
  
  .layout_default .picker_editor {
    order: 1;
    width: 6.5rem
  }
  
  .layout_default .picker_editor input {
    width: 100%;
    height: 100%
  }
  
  .layout_default .picker_sample {
    order: 1;
    flex: 1 1 auto
  }
  
  .layout_default .picker_done,
  .layout_default .picker_cancel {
    order: 1
  }
  
  .picker_wrapper {
    box-sizing: border-box;
    background: #f2f2f2;
    box-shadow: 0 0 0 1px silver;
    cursor: default;
    font-family: sans-serif;
    color: #444;
    pointer-events: auto
  }
  
  .picker_wrapper:focus {
    outline: none
  }
  
  .picker_wrapper button,
  .picker_wrapper input {
    box-sizing: border-box;
    border: none;
    box-shadow: 0 0 0 1px silver;
    outline: none
  }
  
  .picker_wrapper button:focus,
  .picker_wrapper button:active,
  .picker_wrapper input:focus,
  .picker_wrapper input:active {
    box-shadow: 0 0 2px 1px #1e90ff
  }
  
  .picker_wrapper button {
    padding: .4em .6em;
    cursor: pointer;
    background-color: #f5f5f5;
    background-image: linear-gradient(0deg, gainsboro, transparent)
  }
  
  .picker_wrapper button:active {
    background-image: linear-gradient(0deg, transparent, gainsboro)
  }
  
  .picker_wrapper button:hover {
    background-color: #fff
  }
  
  .picker_selector {
    position: absolute;
    z-index: 1;
    display: block;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
    border-radius: 100%;
    box-shadow: 0 0 3px 1px #67b9ff;
    background: currentColor;
    cursor: pointer
  }
  
  .picker_slider .picker_selector {
    border-radius: 2px
  }
  
  .picker_hue {
    position: relative;
    background-image: linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);
    box-shadow: 0 0 0 1px silver
  }
  
  .picker_sl {
    position: relative;
    box-shadow: 0 0 0 1px silver;
    background-image: linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%), linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%), linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))
  }
  
  .picker_alpha,
  .picker_sample {
    position: relative;
    background: linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em, linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;
    box-shadow: 0 0 0 1px silver
  }
  
  .picker_alpha .picker_selector,
  .picker_sample .picker_selector {
    background: none
  }
  
  .picker_editor input {
    font-family: monospace;
    padding: .2em .4em
  }
  
  .picker_sample::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: currentColor
  }
  
  .picker_arrow {
    position: absolute;
    z-index: -1
  }
  
  .picker_wrapper.popup {
    position: absolute;
    z-index: 2;
    margin: 1.5em
  }
  
  .picker_wrapper.popup,
  .picker_wrapper.popup .picker_arrow::before,
  .picker_wrapper.popup .picker_arrow::after {
    background: #f2f2f2;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .4)
  }
  
  .picker_wrapper.popup .picker_arrow {
    width: 3em;
    height: 3em;
    margin: 0
  }
  
  .picker_wrapper.popup .picker_arrow::before,
  .picker_wrapper.popup .picker_arrow::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99
  }
  
  .picker_wrapper.popup .picker_arrow::before {
    width: 100%;
    height: 100%;
    -webkit-transform: skew(45deg);
    transform: skew(45deg);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%
  }
  
  .picker_wrapper.popup .picker_arrow::after {
    width: 150%;
    height: 150%;
    box-shadow: none
  }
  
  .popup.popup_top {
    bottom: 100%;
    left: 0
  }
  
  .popup.popup_top .picker_arrow {
    bottom: 0;
    left: 0;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
  }
  
  .popup.popup_bottom {
    top: 100%;
    left: 0
  }
  
  .popup.popup_bottom .picker_arrow {
    top: 0;
    left: 0;
    -webkit-transform: rotate(90deg) scale(1, -1);
    transform: rotate(90deg) scale(1, -1)
  }
  
  .popup.popup_left {
    top: 0;
    right: 100%
  }
  
  .popup.popup_left .picker_arrow {
    top: 0;
    right: 0;
    -webkit-transform: scale(-1, 1);
    transform: scale(-1, 1)
  }
  
  .popup.popup_right {
    top: 0;
    left: 100%
  }
  
  .popup.popup_right .picker_arrow {
    top: 0;
    left: 0
  }
  
  :root {
    --ds-lowlight: #292929 !important;
    --tertiary-color: #a291ff !important;
    --ds-highlight: #a291ff !important;
  }
  
  .gjs-one-bg {
    background-color: #463a3c;
  
  }
  
  .gjs-one-color {
    color: #463a3c;
  
  }
  
  .gjs-one-color-h:hover {
    color: #463a3c;
  
  }
  
  .gjs-two-bg {
    background-color: #b9a5a6;
  
  }
  
  .gjs-two-color {
    color: #b9a5a6;
  
  }
  
  .gjs-two-color-h:hover {
    color: #b9a5a6;
  
  }
  
  .gjs-three-bg {
    background-color: #804f7b;
  
  }
  
  .gjs-three-color {
    color: #804f7b;
  
  }
  
  .gjs-three-color-h:hover {
    color: #804f7b;
  
  }
  
  .gjs-four-bg {
    background-color: #d97aa6;
  
  }
  
  .gjs-four-color {
    color: #d97aa6;
  
  }
  
  .gjs-four-color-h:hover {
    color: #d97aa6;
  
  }
  
  html {
    -ms-touch-action: none;
  }
  
  .gjs-suggest {
    position: absolute;
    z-index: 999;
    padding: 0;
    margin: 0;
    left: 0;
    right: 0;
    transition: opacity .25s ease;
    text-align: left;
    padding: 0 5px;
  }
  
  div.gjs-suggest__class {
    list-style: none;
    cursor: pointer;
    display: inline-block;
  }
  
  .gjs-suggest__count {
    vertical-align: baseline;
    font-size: x-small;
  }
  .ͼ1.cm-focused {outline: 1px dotted #212121;}
.ͼ1 {position: relative !important; box-sizing: border-box; display: flex !important; flex-direction: column;}
.ͼ1 .cm-scroller {display: flex !important; align-items: flex-start !important; font-family: monospace; line-height: 1.4; height: 100%; overflow-x: auto; position: relative; z-index: 0; overflow-anchor: none;}
.ͼ1 .cm-content[contenteditable=true] {-webkit-user-modify: read-write-plaintext-only;}
.ͼ1 .cm-content {margin: 0; flex-grow: 2; flex-shrink: 0; display: block; white-space: pre; word-wrap: normal; box-sizing: border-box; min-height: 100%; padding: 4px 0; outline: none;}
.ͼ1 .cm-lineWrapping {white-space: pre-wrap; white-space: break-spaces; word-break: break-word; overflow-wrap: anywhere; flex-shrink: 1;}
.ͼ2 .cm-content {caret-color: black;}
.ͼ3 .cm-content {caret-color: white;}
.ͼ1 .cm-line {display: block; padding: 0 2px 0 6px;}
.ͼ1 .cm-layer > * {position: absolute;}
.ͼ1 .cm-layer {position: absolute; left: 0; top: 0; contain: size style;}
.ͼ2 .cm-selectionBackground {background: #d9d9d9;}
.ͼ3 .cm-selectionBackground {background: #222;}
.ͼ2.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground {background: #d7d4f0;}
.ͼ3.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground {background: #233;}
.ͼ1 .cm-cursorLayer {pointer-events: none;}
.ͼ1.cm-focused > .cm-scroller > .cm-cursorLayer {animation: steps(1) cm-blink 1.2s infinite;}
@keyframes cm-blink {50% {opacity: 0;}}
@keyframes cm-blink2 {50% {opacity: 0;}}
.ͼ1 .cm-cursor, .ͼ1 .cm-dropCursor {border-left: 1.2px solid black; margin-left: -0.6px; pointer-events: none;}
.ͼ1 .cm-cursor {display: none;}
.ͼ3 .cm-cursor {border-left-color: #ddd;}
.ͼ1 .cm-dropCursor {position: absolute;}
.ͼ1.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor {display: block;}
.ͼ1 .cm-iso {unicode-bidi: isolate;}
.ͼ1 .cm-announced {position: fixed; top: -10000px;}
@media print {.ͼ1 .cm-announced {display: none;}}
.ͼ2 .cm-activeLine {background-color: #cceeff44;}
.ͼ3 .cm-activeLine {background-color: #99eeff33;}
.ͼ2 .cm-specialChar {color: red;}
.ͼ3 .cm-specialChar {color: #f78;}
.ͼ1 .cm-gutters {flex-shrink: 0; display: flex; height: 100%; box-sizing: border-box; inset-inline-start: 0; z-index: 200;}
.ͼ2 .cm-gutters {background-color: #f5f5f5; color: #6c6c6c; border-right: 1px solid #ddd;}
.ͼ3 .cm-gutters {background-color: #333338; color: #ccc;}
.ͼ1 .cm-gutter {display: flex !important; flex-direction: column; flex-shrink: 0; box-sizing: border-box; min-height: 100%; overflow: hidden;}
.ͼ1 .cm-gutterElement {box-sizing: border-box;}
.ͼ1 .cm-lineNumbers .cm-gutterElement {padding: 0 3px 0 5px; min-width: 20px; text-align: right; white-space: nowrap;}
.ͼ2 .cm-activeLineGutter {background-color: #e2f2ff;}
.ͼ3 .cm-activeLineGutter {background-color: #222227;}
.ͼ1 .cm-panels {box-sizing: border-box; position: sticky; left: 0; right: 0; z-index: 300;}
.ͼ2 .cm-panels {background-color: #f5f5f5; color: black;}
.ͼ2 .cm-panels-top {border-bottom: 1px solid #ddd;}
.ͼ2 .cm-panels-bottom {border-top: 1px solid #ddd;}
.ͼ3 .cm-panels {background-color: #333338; color: white;}
.ͼ1 .cm-tab {display: inline-block; overflow: hidden; vertical-align: bottom;}
.ͼ1 .cm-widgetBuffer {vertical-align: text-top; height: 1em; width: 0; display: inline;}
.ͼ1 .cm-placeholder {color: #888; display: inline-block; vertical-align: top;}
.ͼ1 .cm-highlightSpace {background-image: radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%); background-position: center;}
.ͼ1 .cm-highlightTab {background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>'); background-size: auto 100%; background-position: right 90%; background-repeat: no-repeat;}
.ͼ1 .cm-trailingSpace {background-color: #ff332255;}
.ͼ1 .cm-button {vertical-align: middle; color: inherit; font-size: 70%; padding: .2em 1em; border-radius: 1px;}
.ͼ2 .cm-button:active {background-image: linear-gradient(#b4b4b4, #d0d3d6);}
.ͼ2 .cm-button {background-image: linear-gradient(#eff1f5, #d9d9df); border: 1px solid #888;}
.ͼ3 .cm-button:active {background-image: linear-gradient(#111, #333);}
.ͼ3 .cm-button {background-image: linear-gradient(#393939, #111); border: 1px solid #888;}
.ͼ1 .cm-textfield {vertical-align: middle; color: inherit; font-size: 70%; border: 1px solid silver; padding: .2em .5em;}
.ͼ2 .cm-textfield {background-color: white;}
.ͼ3 .cm-textfield {border: 1px solid #555; background-color: inherit;}
.ͼ1 .cm-selectionMatch {background-color: #99ff7780;}
.ͼ1 .cm-searchMatch .cm-selectionMatch {background-color: transparent;}
.ͼ1 .cm-tooltip.cm-tooltip-autocomplete > ul > li, .ͼ1 .cm-tooltip.cm-tooltip-autocomplete > ul > completion-section {padding: 1px 3px; line-height: 1.2;}
.ͼ1 .cm-tooltip.cm-tooltip-autocomplete > ul > li {overflow-x: hidden; text-overflow: ellipsis; cursor: pointer;}
.ͼ1 .cm-tooltip.cm-tooltip-autocomplete > ul > completion-section {display: list-item; border-bottom: 1px solid silver; padding-left: 0.5em; opacity: 0.7;}
.ͼ1 .cm-tooltip.cm-tooltip-autocomplete > ul {font-family: monospace; white-space: nowrap; overflow: hidden auto; max-width: 700px; max-width: min(700px, 95vw); min-width: 250px; max-height: 10em; height: 100%; list-style: none; margin: 0; padding: 0;}
.ͼ2 .cm-tooltip-autocomplete ul li[aria-selected] {background: #17c; color: white;}
.ͼ2 .cm-tooltip-autocomplete-disabled ul li[aria-selected] {background: #777;}
.ͼ3 .cm-tooltip-autocomplete ul li[aria-selected] {background: #347; color: white;}
.ͼ3 .cm-tooltip-autocomplete-disabled ul li[aria-selected] {background: #444;}
.ͼ1 .cm-completionListIncompleteTop:before, .ͼ1 .cm-completionListIncompleteBottom:after {content: "···"; opacity: 0.5; display: block; text-align: center;}
.ͼ1 .cm-tooltip.cm-completionInfo {position: absolute; padding: 3px 9px; width: max-content; max-width: 400px; box-sizing: border-box; white-space: pre-line;}
.ͼ1 .cm-completionInfo.cm-completionInfo-left {right: 100%;}
.ͼ1 .cm-completionInfo.cm-completionInfo-right {left: 100%;}
.ͼ1 .cm-completionInfo.cm-completionInfo-left-narrow {right: 30px;}
.ͼ1 .cm-completionInfo.cm-completionInfo-right-narrow {left: 30px;}
.ͼ2 .cm-snippetField {background-color: #00000022;}
.ͼ3 .cm-snippetField {background-color: #ffffff22;}
.ͼ1 .cm-snippetFieldPosition {vertical-align: text-top; width: 0; height: 1.15em; display: inline-block; margin: 0 -0.7px -.7em; border-left: 1.4px dotted #888;}
.ͼ1 .cm-completionMatchedText {text-decoration: underline;}
.ͼ1 .cm-completionDetail {margin-left: 0.5em; font-style: italic;}
.ͼ1 .cm-completionIcon {font-size: 90%; width: .8em; display: inline-block; text-align: center; padding-right: .6em; opacity: 0.6; box-sizing: content-box;}
.ͼ1 .cm-completionIcon-function:after, .ͼ1 .cm-completionIcon-method:after {content: 'ƒ';}
.ͼ1 .cm-completionIcon-class:after {content: '○';}
.ͼ1 .cm-completionIcon-interface:after {content: '◌';}
.ͼ1 .cm-completionIcon-variable:after {content: '𝑥';}
.ͼ1 .cm-completionIcon-constant:after {content: '𝐶';}
.ͼ1 .cm-completionIcon-type:after {content: '𝑡';}
.ͼ1 .cm-completionIcon-enum:after {content: '∪';}
.ͼ1 .cm-completionIcon-property:after {content: '□';}
.ͼ1 .cm-completionIcon-keyword:after {content: '🔑︎';}
.ͼ1 .cm-completionIcon-namespace:after {content: '▢';}
.ͼ1 .cm-completionIcon-text:after {content: 'abc'; font-size: 50%; vertical-align: middle;}
.ͼ1 .cm-tooltip {z-index: 500; box-sizing: border-box;}
.ͼ2 .cm-tooltip {border: 1px solid #bbb; background-color: #f5f5f5;}
.ͼ2 .cm-tooltip-section:not(:first-child) {border-top: 1px solid #bbb;}
.ͼ3 .cm-tooltip {background-color: #333338; color: white;}
.ͼ1 .cm-tooltip-arrow:before, .ͼ1 .cm-tooltip-arrow:after {content: ''; position: absolute; width: 0; height: 0; border-left: 7px solid transparent; border-right: 7px solid transparent;}
.ͼ1 .cm-tooltip-above .cm-tooltip-arrow:before {border-top: 7px solid #bbb;}
.ͼ1 .cm-tooltip-above .cm-tooltip-arrow:after {border-top: 7px solid #f5f5f5; bottom: 1px;}
.ͼ1 .cm-tooltip-above .cm-tooltip-arrow {bottom: -7px;}
.ͼ1 .cm-tooltip-below .cm-tooltip-arrow:before {border-bottom: 7px solid #bbb;}
.ͼ1 .cm-tooltip-below .cm-tooltip-arrow:after {border-bottom: 7px solid #f5f5f5; top: 1px;}
.ͼ1 .cm-tooltip-below .cm-tooltip-arrow {top: -7px;}
.ͼ1 .cm-tooltip-arrow {height: 7px; width: 14px; position: absolute; z-index: -1; overflow: hidden;}
.ͼ3 .cm-tooltip .cm-tooltip-arrow:before {border-top-color: #333338; border-bottom-color: #333338;}
.ͼ3 .cm-tooltip .cm-tooltip-arrow:after {border-top-color: transparent; border-bottom-color: transparent;}
.ͼ1.cm-focused .cm-matchingBracket {background-color: #328c8252;}
.ͼ1.cm-focused .cm-nonmatchingBracket {background-color: #bb555544;}
.ͼ1 .cm-foldPlaceholder {background-color: #eee; border: 1px solid #ddd; color: #888; border-radius: .2em; margin: 0 1px; padding: 0 1px; cursor: pointer;}
.ͼ1 .cm-foldGutter span {padding: 0 1px; cursor: pointer;}
.ͼ5 {color: #404740;}
.ͼ6 {text-decoration: underline;}
.ͼ7 {text-decoration: underline; font-weight: bold;}
.ͼ8 {font-style: italic;}
.ͼ9 {font-weight: bold;}
.ͼa {text-decoration: line-through;}
.ͼb {color: #708;}
.ͼc {color: #219;}
.ͼd {color: #164;}
.ͼe {color: #a11;}
.ͼf {color: #e40;}
.ͼg {color: #00f;}
.ͼh {color: #30a;}
.ͼi {color: #085;}
.ͼj {color: #167;}
.ͼk {color: #256;}
.ͼl {color: #00c;}
.ͼm {color: #940;}
.ͼn {color: #f00;}
.ͼ4 .cm-line ::selection, .ͼ4 .cm-line::selection {background-color: transparent !important;}
.ͼ4 .cm-line {caret-color: transparent !important;}
.ͼ4 .cm-content :focus::selection, .ͼ4 .cm-content :focus ::selection {background-color: Highlight !important;}
.ͼ4 .cm-content :focus {caret-color: initial !important;}
.ͼ4 .cm-content {caret-color: transparent !important;}
`