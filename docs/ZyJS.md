# ZyJS Framework

ZyJS is the lightweight, app-specific JavaScript framework for ZyFOCUS.  
It focuses on safe, additive UI behaviors without breaking existing logic.

---

**1. What ZyJS Is**

ZyJS provides:
1. A global namespace (`window.ZyJS`) for UI behaviors.
2. Small utilities for DOM selection and event handling.
3. A minimal event bus for decoupled UI communication.
4. A component registry for reusable UI logic.
5. A guard system to block navigation when needed.

ZyJS does not:
1. Replace app services or business logic.
2. Require a build step or bundler.
3. Force rewrites of existing code.

---

**2. File Map**

1. `public/js/zyjs.js`  
   Core ZyJS framework file.

2. `public/index.html`  
   ZyJS is loaded after `zyhs.js`.

3. `public/sw.js`  
   ZyJS is included in core offline caching.

4. `public/js/zyjs.components.js`  
   Optional ZyJS component library.

---

**3. Core API**

ZyJS exposes:

1. `ZyJS.ready(fn)`  
   Runs `fn` when DOM is ready.

2. `ZyJS.define(name, factory)`  
   Register a component by name.

3. `ZyJS.mount(name, el, options)`  
   Mount a component to a DOM node.

4. `ZyJS.guard(fn)`  
   Register a guard. Return `false` to block section switching.

5. `ZyJS.canSwitch(payload)`  
   Runs guards and returns `true/false`.

6. `ZyJS.utils`  
   - `qs(selector, root)`  
   - `qsa(selector, root)`  
   - `on(el, type, handler, opts)`  
   - `delegate(root, type, selector, handler)`

7. `ZyJS.bus`  
   - `on(event, handler)`  
   - `emit(event, payload)`

8. `ZyJS.getState()`  
   Returns current app lifecycle + routing state.

9. `ZyJS.mountAll(root)`  
   Mounts components on `[data-zyjs]` nodes.

---

**4. ZyFOCUS Core Bridge**

ZyJS is wired into ZyFOCUS core lifecycle and routing.

Emitted by ZyFOCUS:
1. `app:bound`  
   Fired when ZyFOCUS binds to ZyJS.
2. `app:ready`  
   Fired after ZyFOCUS initializes.
3. `section:before`  
   Fired before a section switch.
4. `section:changed`  
   Fired after a section switch completes.
5. `section:blocked`  
   Fired when a guard blocks a section change.
6. `app:state`  
   Emitted whenever app state updates.
7. `nav:click`  
   Fired on sidebar and bottom-nav navigation clicks.
8. `quick:action`  
   Fired for quick action buttons.
9. `shortcut:action`  
   Fired for keyboard shortcuts.

ZyJS component library:
1. `section-state`  
   Writes `data-zyjs-section`, `data-zyjs-online`, `data-zyjs-ready` to its element.
2. `nav-relay`  
   Emits `section:switch` on clicks inside a nav container.
3. `unsaved-guard`  
   Adds a confirm guard when `zyjs:dirty` is set.

Listened by ZyFOCUS:
1. `section:switch`  
   Payload: `{ section, updateRoute }`
2. `app:ping`  
   Response: `app:pong` with `{ section }`
3. `app:state:request`  
   Response: `app:state`

---

**5. Usage Example**

```js
ZyJS.define('helloCard', (el, options, zy) => {
  const title = zy.utils.qs('.title', el);
  if (title) title.textContent = options.title || 'Hello';
  return { destroy() {} };
});

ZyJS.ready(() => {
  const card = document.getElementById('hello-card');
  if (card) ZyJS.mount('helloCard', card, { title: 'ZyUI + ZyJS' });
});
```

---

**6. Design Rules**

1. **Additive only**  
   Do not remove or rename existing app logic when adding ZyJS.

2. **Small surface**  
   Keep utilities minimal and explicit.

3. **App-specific by default**  
   ZyJS is tailored to ZyFOCUS.

---

**7. Future Roadmap**

1. ZyJS modules for shared UI patterns (modals, banners).
2. A tiny store for UI-only state.
3. Component catalog with visual demos.
