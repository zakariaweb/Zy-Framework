# ZyUI Design System

ZyUI is the visual and interaction language for ZyFOCUS. It is app-specific by default, with a clean path to become a reusable system later.

---

**1. What ZyUI Is**

ZyUI is:
1. A styling layer that defines consistent layout, spacing, typography, and component patterns.
2. A naming convention that makes ZyFOCUS UI ownership explicit.
3. A migration path from existing classes to a ZyUI namespace without breaking the app.

ZyUI is not:
1. A full UI framework.
2. A replacement for the product's interaction logic.
3. A breaking change to existing styles.

---

**2. File Map**

ZyUI lives primarily here:

1. `public/css/zy/zy-ui.css`  
   Base ZyUI styles and namespaced components.

2. `public/css/zy/system.css`  
   Imports ZyUI into the main stack.

3. `public/css/main.css` and `public/css/main.min.css`  
   Bundled CSS outputs.

Related:
1. `public/js/zyjs.js`  
   ZyJS framework for UI behaviors.
2. `docs/ZyJS.md`  
   ZyJS documentation.

---

**3. Principles**

1. **Additive, not destructive**  
   New ZyUI classes are added alongside existing classes.

2. **Predictable spacing**  
   Shared gaps and radii via tokens.

3. **Readable surfaces**  
   Glass and gradient surfaces tuned for clarity.

4. **App-specific first**  
   ZyFOCUS UX remains the source of truth.

---

**4. Tokens**

Tokens are defined in `public/css/zy/zy-ui.css`.

| Token | Meaning |
| --- | --- |
| `--zyui-radius-sm` | Small radius |
| `--zyui-radius-md` | Medium radius |
| `--zyui-radius-lg` | Large radius |
| `--zyui-radius-xl` | Extra-large radius |
| `--zyui-gap-sm` | Tight spacing |
| `--zyui-gap-md` | Default spacing |
| `--zyui-gap-lg` | Roomy spacing |
| `--zyui-shadow-soft` | Soft elevation |
| `--zyui-shadow-elevated` | Strong elevation |

---

**5. Components**

Core ZyUI components are namespaced and safe to apply without removing existing classes.

1. `zyui-card`  
   Base glass card with consistent padding and radius.

2. `zyui-toolbar`  
   Compact control area with gradient surface.

3. `zyui-filters`  
   Pill-style filter rail.

4. `zyui-pill`  
   Status or tag indicator.

5. `zyui-banner`  
   Highlight callout for state or live context.

6. `zyui-grid`  
   Grid layout with ZyUI spacing.

7. `zyui-layout`  
   Two-column layout with responsive collapse.

8. `zyui-side`, `zyui-main`  
   Layout regions.

9. `zyui-title`, `zyui-subtitle`, `zyui-meta`, `zyui-label`  
   Text semantics for headers and meta.

10. `zyui-section`, `zyui-section-header`  
   Section scaffolding helpers.

---

**6. Usage Example**

```html
<div class="glass-card zyui-card">
  <div class="zyui-toolbar">
    <h3 class="zyui-title">Library</h3>
    <span class="zyui-pill">Online</span>
  </div>
  <div class="zyui-grid">
    <!-- content -->
  </div>
</div>
```

---

**7. Current ZyUI Coverage**

ZyUI has been applied to:
1. Music Library layout.
2. Now Playing banner.
3. Music filters, metadata, and layout scaffolding.

---

**8. Migration Guide**

Follow this order to avoid breakage:

1. Add ZyUI classes alongside existing classes.
2. Ensure visual parity.
3. Expand ZyUI coverage section by section.
4. Only remove old classes when ZyUI fully replaces the styling.

---

**9. Accessibility**

ZyUI respects:
1. Contrast-friendly surfaces.
2. Large touch targets.
3. Clear hover and focus visibility.

Add `:focus-visible` styles when introducing new interactive ZyUI elements.

---

**10. Future Roadmap**

1. Add `zyui-btn` namespace for buttons.
2. Add `zyui-input` styles for forms.
3. Build a component catalog page.

---

**11. Quick Reference**

| Purpose | Class |
| --- | --- |
| Card surface | `zyui-card` |
| Toolbar strip | `zyui-toolbar` |
| Filter rail | `zyui-filters` |
| Status pill | `zyui-pill` |
| Banner | `zyui-banner` |
| Grid layout | `zyui-grid` |
| Section layout | `zyui-layout` |
| Side panel | `zyui-side` |
| Main content | `zyui-main` |
| Title text | `zyui-title` |
| Subtitle text | `zyui-subtitle` |
| Meta text | `zyui-meta` |
| Label text | `zyui-label` |
| Section wrapper | `zyui-section` |
| Section header | `zyui-section-header` |

---

**12. How To Extend ZyUI**

1. Add new ZyUI classes to `public/css/zy/zy-ui.css`.
2. Keep names `zyui-*` and app-specific.
3. Document additions in this file.
