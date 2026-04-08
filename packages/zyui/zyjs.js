(() => {
  if (window.ZyJS) return;

  const ZyJS = {
    version: '0.1.0',
    _ready: false,
    _queue: [],
    _components: new Map(),
    _bus: new Map(),
    _guards: new Set(),
    app: null
  };

  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const on = (el, type, handler, opts) => {
    if (!el) return () => {};
    el.addEventListener(type, handler, opts || false);
    return () => el.removeEventListener(type, handler, opts || false);
  };

  const delegate = (root, type, selector, handler) => on(root, type, (event) => {
    const target = event.target?.closest?.(selector);
    if (!target || !root.contains(target)) return;
    handler(event, target);
  });

  const busOn = (event, handler) => {
    if (!ZyJS._bus.has(event)) ZyJS._bus.set(event, new Set());
    ZyJS._bus.get(event).add(handler);
    return () => ZyJS._bus.get(event)?.delete(handler);
  };

  const busEmit = (event, payload) => {
    const handlers = ZyJS._bus.get(event);
    if (!handlers) return;
    handlers.forEach((fn) => {
      try {
        fn(payload);
      } catch {
        // ignore handler errors
      }
    });
  };

  ZyJS.ready = (fn) => {
    if (ZyJS._ready) {
      fn();
      return;
    }
    ZyJS._queue.push(fn);
  };

  ZyJS.define = (name, factory) => {
    if (!name || ZyJS._components.has(name)) return;
    ZyJS._components.set(name, factory);
  };

  ZyJS.guard = (fn) => {
    if (typeof fn !== 'function') return () => {};
    ZyJS._guards.add(fn);
    return () => ZyJS._guards.delete(fn);
  };

  ZyJS.canSwitch = (payload = {}) => {
    let allowed = true;
    ZyJS._guards.forEach((fn) => {
      try {
        const result = fn(payload);
        if (result === false) allowed = false;
      } catch {
        // ignore guard errors
      }
    });
    return allowed;
  };

  ZyJS.mount = (name, el, options = {}) => {
    const factory = ZyJS._components.get(name);
    if (!factory) return null;
    try {
      return factory(el, options, ZyJS);
    } catch {
      return null;
    }
  };

  ZyJS.mountAll = (root = document) => {
    const nodes = qsa('[data-zyjs]', root);
    nodes.forEach((el) => {
      const name = el.getAttribute('data-zyjs');
      if (!name) return;
      ZyJS.mount(name, el, { dataset: { ...el.dataset } });
    });
  };

  ZyJS.utils = { qs, qsa, on, delegate };
  ZyJS.bus = { on: busOn, emit: busEmit };
  ZyJS.getState = () => {
    if (ZyJS.app && typeof ZyJS.app.getZyJsState === 'function') {
      return ZyJS.app.getZyJsState();
    }
    return {
      section: document.querySelector('.section.active')?.id || '',
      online: navigator.onLine,
      ready: ZyJS._ready
    };
  };
  ZyJS.emitState = () => {
    ZyJS.bus.emit('app:state', ZyJS.getState());
  };
  ZyJS.bus.on('app:state:request', () => ZyJS.emitState());

  const markReady = () => {
    ZyJS._ready = true;
    ZyJS._queue.splice(0).forEach((fn) => {
      try {
        fn();
      } catch {
        // ignore
      }
    });
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    markReady();
  } else {
    document.addEventListener('DOMContentLoaded', markReady);
  }

  window.ZyJS = ZyJS;
})();
