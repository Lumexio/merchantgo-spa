# MerchantGo Marketing SPA Agent Guide

## Purpose and structure

This React 18/Vite static SPA is MerchantGo's product and plan marketing site.
Routes live under `src/pages/`, reusable sections under `src/components/`, and
the route shell in `src/App.jsx`. GitHub Pages deployment is defined in
`.github/workflows/node.js.yml`.

## Commands

```bash
npm ci
npm run dev
npm run build
```

There is no lint or automated test script; the production build is the
reliable validation command.

## Rules

- Keep claims, pricing, plan limits, domains, and download links verifiable.
- Coordinate plan or pricing changes with backend billing constants and gated client UI.
- Preserve responsive behavior, semantic HTML, keyboard access, and route fallback.
- Never place server credentials or private tenant data in the static bundle.

## Maintenance cascade

Page or navigation changes require routes, links, metadata, responsive states,
and the GitHub Pages fallback. Pricing or CTA changes require backend billing,
web/desktop/mobile gates, release URLs, analytics, and documentation checks.
