---
layout: default
title: Zy-Framework
---

<style>
  :root {
    color-scheme: light;
  }

  .zy-hero {
    padding: 3.5rem 0 2rem;
    border-bottom: 1px solid #e6e8ee;
  }

  .zy-hero h1 {
    font-size: clamp(2.4rem, 4vw, 3.4rem);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .zy-hero p {
    font-size: 1.1rem;
    max-width: 720px;
    color: #5b6472;
  }

  .zy-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: #eef2ff;
    color: #1f2a5d;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .zy-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .zy-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 1.1rem;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid #0f172a;
    color: #0f172a;
    background: #ffffff;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .zy-btn.primary {
    background: #0f172a;
    color: #ffffff;
    border-color: #0f172a;
  }

  .zy-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  }

  .zy-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    margin: 2.5rem 0;
  }

  .zy-card {
    padding: 1.5rem;
    border-radius: 16px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
  }

  .zy-card h3 {
    margin-top: 0;
    font-size: 1.1rem;
  }

  .zy-card p {
    color: #5b6472;
  }

  .zy-section-title {
    margin-top: 2.5rem;
  }

  .zy-links {
    display: grid;
    gap: 0.5rem;
  }

  .zy-links a {
    font-weight: 600;
  }
</style>

<section class="zy-hero">
  <span class="zy-pill">Zy-Framework</span>
  <h1>ZyUI + ZyJS, the core system powering ZyFOCUS</h1>
  <p>
    Zy-Framework is the official design system and UI runtime for ZyFOCUS.
    It keeps our product language consistent, fast, and production-ready
    while remaining easy to extend for future apps.
  </p>
  <div class="zy-actions">
    <a class="zy-btn primary" href="getting-started">Get Started</a>
    <a class="zy-btn" href="ZyUI">ZyUI Design System</a>
    <a class="zy-btn" href="ZyJS">ZyJS Runtime</a>
  </div>
</section>

<section class="zy-grid">
  <div class="zy-card">
    <h3>Design Tokens First</h3>
    <p>Shared color, spacing, and typography tokens make UI updates consistent and safe.</p>
  </div>
  <div class="zy-card">
    <h3>Component Patterns</h3>
    <p>Reusable classes and layout utilities speed up new screens and keep UX aligned.</p>
  </div>
  <div class="zy-card">
    <h3>Lightweight Runtime</h3>
    <p>ZyJS adds lifecycle events, guards, and utilities without bloating your bundles.</p>
  </div>
  <div class="zy-card">
    <h3>Production Ready</h3>
    <p>Built for ZyFOCUS today, structured for future ZyTech products tomorrow.</p>
  </div>
</section>

## What Is Inside

- ZyUI: styling, layout primitives, and UI patterns.
- ZyJS: lifecycle events, section switching helpers, and utilities.
- ZyFOCUS integration: the framework already powers the app today.

## Quick Links

<div class="zy-links">
  <a href="getting-started">Getting Started</a>
  <a href="ZyUI">ZyUI Docs</a>
  <a href="ZyJS">ZyJS Docs</a>
</div>

## Packages

- npm: `@zytechg/zyui`
- repo: `https://github.com/zakariaweb/Zy-Framework`
