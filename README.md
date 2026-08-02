# merchantgo-spa

[![AI Ready](https://img.shields.io/badge/AI--Ready-yes-brightgreen?style=flat)](https://github.com/johnpapa/ai-ready)

React/Vite marketing site for MerchantGo product information, plans, and
acquisition routes.

## Product claim baseline

- Appwrite provides account identity and session validation only.
- MerchantGo domain records belong to the VPS-hosted backend.
- The hosted web application is available. Native download buttons check the
  verified client repositories and remain unavailable until release assets are
  published.
- Public checkout, managed backups, and paid support are not advertised.

## Setup

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run build
```

## KPI telemetry

CTA and available-client clicks send only an allowlisted event name,
`product: "merchantgo"`, and a daily anonymous UUID to the MerchantGo backend.
No email, account, IP, user agent, tenant, clinical data, or free-form metadata
is collected by the SPA. Set `VITE_KPI_ENDPOINT` only when the telemetry API is
not `https://api.merchantgo.store/api/v1/telemetry/events`.

## Contributing

Create a focused branch and run the production build before opening a pull
request. Verify product claims, pricing, plan limits, and links against their
source of truth, preserve accessible responsive behavior, and describe
backend billing, client feature-gate, route, and deployment impact.
