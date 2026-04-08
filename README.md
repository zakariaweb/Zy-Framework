# Zy-Framework

Zy-Framework is the home of **ZyUI** (CSS) and **ZyJS** (JS). It powers ZyFOCUS and is designed to scale to other products with a consistent, professional UI system.

## Structure

1. `packages/zyui` - NPM package for ZyUI + ZyJS
2. `docs` - ZyUI and ZyJS documentation

## Quick Start

```bash
cd packages/zyui
npm publish --access public
```

## Packages

1. `@zytechg/zyui`

## Release Flow

1. Update ZyUI or ZyJS
2. Run `npm run zyui:sync`
3. Bump version: `npm run zyui:version:patch`
4. Publish: `npm --prefix packages/zyui publish --access public`

## Automation

GitHub Actions workflow: `.github/workflows/release.yml`  
Set `NPM_TOKEN` in repo secrets for automated releases.

