# SRM Global Tech Limited — Corporate Website

Production-ready Next.js 14 implementation of the SRM Global Tech corporate website,
faithful to the **SRM-W3-PROD-2026** blueprint.

## Stack
- **Next.js 14** (App Router)
- **React 18**
- Plain CSS (design tokens in `app/globals.css`)
- No external UI libs — fully self-contained

## Pages (routes)
| Route        | File                          | Blueprint Page |
|--------------|-------------------------------|----------------|
| `/`          | `app/page.jsx`                | Page 1 — Home |
| `/about`     | `app/about/page.jsx`          | Page 2 — Corporate Profile |
| `/services`  | `app/services/page.jsx`       | Page 3 — Core Capabilities & Services |
| `/quality`   | `app/quality/page.jsx`        | Page 4 — Quality Control & Inspection Protocols |
| `/contact`   | `app/contact/page.jsx`        | Page 5 — Engagement Terminal |

## API routes (Next.js Route Handlers)
| Endpoint            | Method | Purpose |
|---------------------|--------|---------|
| `/api/stock-sheet?q=...` | GET | Searches the imported TSStock workbook data for inventory results |
| `/api/rfq`          | POST   | RFQ / BOM submission — logs payload & returns a reference number |

The RFQ handler sends through Resend. Configure `RESEND_API_KEY`,
`RESEND_FROM_EMAIL`, and `RFQ_TO_EMAIL` in `.env` for local development and in
your deployment environment for production.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build for production
```bash
npm run build
npm run start
```

## Folder structure
```
app/
  layout.jsx           # Root layout (nav + footer + global CSS)
  page.jsx             # Home
  globals.css          # Design tokens + utilities
  about/page.jsx
  services/page.jsx
  quality/page.jsx
  contact/page.jsx
  api/
    stock-sheet/route.js
    rfq/route.js
components/
  TopBar.jsx           # Server
  Nav.jsx              # Client (uses pathname)
  Footer.jsx           # Server
  PageHero.jsx         # Server
  PillarCard.jsx       # Server
  Pillar.jsx           # Server
  Capability.jsx       # Server
  CTABand.jsx          # Client (uses Link)
  HeroChipArt.jsx      # Server (decorative SVG chip composition)
  InventorySearch.jsx  # Client (fetches /api/stock-sheet)
  QuickRFQ.jsx         # Client (posts /api/rfq)
  ContactForm.jsx      # Client (posts /api/rfq)
  QualityPhases.jsx    # Client (tab state)
  ScrollReveal.jsx     # Client (IntersectionObserver fade-up)
  ContactRow.jsx       # Server
  ResponseRow.jsx      # Server
  Term.jsx             # Server
data/
  tsstock.json         # Imported TSStock_21-May-2026.xlsx rows for stock-sheet search
public/
  assets/              # Logos
```

## Brand
Primary: `#1a365d` (deep slate blue) · Accent: `#e89028` (amber CTA) · Type: Inter + JetBrains Mono.

© 2026 SRM Global Tech Limited.
