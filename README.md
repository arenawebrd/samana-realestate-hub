# Samana Real Estate Hub

Rank & rent real estate directory for Samana province, Dominican Republic. 70 money pages targeting `[category] in [location]` search queries.

## Stack

- **Astro 5** — static site generation
- **TypeScript**
- **Tailwind CSS 4**
- **Leaflet + OpenStreetMap** — free maps (no Google API)
- **Pexels API** — hero images downloaded at build time

## Site structure

| Route | Pages | Description |
|---|---|---|
| `/` | 1 | Homepage with hero, categories, locations, stats, testimonials |
| `/about/` | 1 | About page with "List your business" CTA |
| `/locations/` | 1 | Locations hub |
| `/locations/[location]/` | 7 | Individual location pages with Leaflet map |
| `/categories/` | 1 | Categories hub |
| `/categories/[category]/` | 10 | Individual category pages |
| `/locations/[location]/[category]/` | 70 | Money pages (location × category) |

**Total: 91 pages**

## Local dev

```bash
npm install
cp .env.example .env    # add your Pexels API key
node scripts/fetch-pexels-hero.mjs   # download images (optional)
npm run dev             # http://localhost:4321
npm run build           # static export to dist/
```

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `PEXEL_API` | No | Pexels API key for hero images |

## Images

Hero images are fetched from Pexels at build time:

```bash
node scripts/fetch-pexels-hero.mjs
```

Downloads to `public/images/` (home, locations, categories). Attribution saved to `public/images/metadata.json`.

## SEO

- JSON-LD schemas: WebSite, Organization, BreadcrumbList, FAQPage
- Unique content per money page (70 custom intros + market descriptions)
- Breadcrumbs on all internal pages
- Auto-generated sitemap via `@astrojs/sitemap`
- Canonical URLs on every page

## Deploy

Static output to `dist/`. Deploy to Vercel, Netlify, Cloudflare Pages, or any static host.
