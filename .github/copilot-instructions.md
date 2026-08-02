# Copilot instructions

- This is a React 18/Vite static marketing SPA deployed to GitHub Pages.
- Reuse existing `src/components/` and `src/pages/` patterns.
- Keep marketing claims, pricing, plan limits, domains, and release links accurate.
- Preserve responsive, semantic, keyboard-accessible UI and SPA route fallback.
- Run `npm run build`; no lint or automated test command currently exists.

## Maintenance matrix

| When changing | Also update or verify |
| --- | --- |
| Page or route | `src/App.jsx`, page component, navigation/footer links, direct-load fallback, metadata, and responsive layout |
| Pricing or plan limits | Marketing cards/copy, backend billing constants, web/desktop/mobile feature gates, checkout links, and changelogs |
| CTA, login, or download URL | All buttons/menus/footer links, target environment, release artifact, custom domain, and broken-link check |
| Product claim or screenshot | Current implementation, alt text, responsive crop, related docs, and cross-client accuracy |
| Styling or branding | `src/index.css`, shared components, contrast, keyboard/focus states, mobile widths, and assets |
| Build or domain | `vite.config.js`, Pages workflow, `CNAME` handling, `404.html` fallback, repository Pages settings, and public URL |
| Dependency or Node version | Manifest, lockfile, Copilot setup, Pages workflow, and build |
