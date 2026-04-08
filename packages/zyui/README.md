# @zytechg/zyui

ZyUI (CSS) + ZyJS (JS) core UI system for ZyFOCUS.

## Install

```bash
npm i @zytechg/zyui
```

## Usage

### CSS

```html
<link rel="stylesheet" href="node_modules/@zytechg/zyui/zy-ui.css">
```

### JS

```html
<script src="node_modules/@zytechg/zyui/zyjs.js"></script>
<script src="node_modules/@zytechg/zyui/zyjs.components.js"></script>
```

### JS (Module import)

```js
import '@zytechg/zyui/zyjs.js';
import '@zytechg/zyui/zyjs.components.js';
```

## Notes

- ZyUI is additive: apply `zyui-*` classes alongside existing classes.
- ZyJS is a lightweight runtime with an event bus and guard system.
- ZyJS components are optional and auto-mount on `[data-zyjs]` elements.
- Built for ZyFOCUS but safe to reuse.
