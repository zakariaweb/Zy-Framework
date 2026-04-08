(() => {
  if (!window.ZyJS) return;
  if (window.__ZYJS_COMPONENTS__) return;
  window.__ZYJS_COMPONENTS__ = true;

  const ZyJS = window.ZyJS;

  ZyJS.define('section-state', (el, options, zy) => {
    const setState = (state) => {
      if (!state) return;
      if (state.section) el.setAttribute('data-zyjs-section', state.section);
      if (typeof state.online === 'boolean') {
        el.setAttribute('data-zyjs-online', state.online ? 'online' : 'offline');
      }
      if (typeof state.initialized === 'boolean') {
        el.setAttribute('data-zyjs-ready', state.initialized ? 'true' : 'false');
      }
    };

    const offState = zy.bus.on('app:state', setState);
    zy.bus.emit('app:state:request');

    return {
      destroy() {
        offState?.();
      }
    };
  });

  ZyJS.define('nav-relay', (el, options, zy) => {
    const handler = (event) => {
      const target = event.target?.closest?.('[data-section]');
      if (!target) return;
      const section = target.getAttribute('data-section');
      if (!section) return;
      zy.bus.emit('section:switch', { section, updateRoute: true });
    };
    el.addEventListener('click', handler);
    return {
      destroy() {
        el.removeEventListener('click', handler);
      }
    };
  });

  ZyJS.define('unsaved-guard', (el, options, zy) => {
    let dirty = false;
    const setDirty = (value) => {
      dirty = Boolean(value);
      el.setAttribute('data-zyjs-dirty', dirty ? 'true' : 'false');
    };

    const guard = (payload) => {
      if (!dirty) return true;
      const target = payload?.to || payload?.section || '';
      if (!target) return true;
      return window.confirm('You have unsaved changes. Leave this section?');
    };

    const offGuard = zy.guard(guard);
    const offEvent = zy.bus.on('zyjs:dirty', (value) => setDirty(value));

    return {
      setDirty,
      destroy() {
        offGuard?.();
        offEvent?.();
      }
    };
  });

  ZyJS.ready(() => {
    ZyJS.mountAll();
  });
})();
