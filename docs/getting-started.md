---
layout: default
title: Getting Started
---

# Getting Started

Welcome to Zy-Framework. This guide gets ZyUI + ZyJS running inside ZyFOCUS or any new project.

## Install

```bash
npm i @zytechg/zyui
```

## Import ZyUI (CSS)

Add the stylesheet to your app entry or bundle:

```html
<link rel="stylesheet" href="node_modules/@zytechg/zyui/zy-ui.css" />
```

If you are bundling CSS, import it in your entry file instead:

```js
import '@zytechg/zyui/zy-ui.css';
```

## Import ZyJS (JS)

```html
<script src="node_modules/@zytechg/zyui/zyjs.js"></script>
<script src="node_modules/@zytechg/zyui/zyjs.components.js"></script>
```

## Minimal Setup

```html
<div data-zyjs="section-state" data-zyjs-value="home"></div>
```

```js
ZyJS.ready(() => {
  ZyJS.emit('app:ready');
});
```

## Recommended Files

- `ZyUI.md` for tokens, components, and layout patterns.
- `ZyJS.md` for lifecycle events, guards, and utilities.

## Next Steps

- Build a layout with ZyUI classes.
- Use ZyJS to manage section switching and lifecycle events.
- Add new tokens or patterns and publish a new package version when ready.
