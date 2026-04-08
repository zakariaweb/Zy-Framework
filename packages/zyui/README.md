# @zytechg/zyui

ZyUI (CSS) + ZyJS (JS) is a production-grade UI system designed for fast, consistent interfaces. It ships with polished layout primitives, a clear token system, and a lightweight JS runtime for routing, state hooks, and UI behaviors.

Built for ZyFOCUS, safe to reuse anywhere.

## Install

```bash
npm i @zytechg/zyui
```

## Quick Start

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

## What You Get

1. **ZyUI CSS**
   - Tokens for spacing, radii, and elevation
   - Professional card, toolbar, banner, and layout primitives
2. **ZyJS Runtime**
   - Event bus, component registry, and guards
   - Lifecycle bridge hooks for rich app behavior
3. **ZyJS Components (optional)**
   - Auto-mount components via `data-zyjs`

## Documentation

1. `docs/ZyUI.md`
2. `docs/ZyJS.md`

## Notes

1. ZyUI is additive: apply `zyui-*` classes alongside existing classes.
2. ZyJS is a lightweight runtime with an event bus and guard system.
3. ZyJS components are optional and auto-mount on `[data-zyjs]` elements.
4. Built for ZyFOCUS but safe to reuse.
