# Fred's Upholstery — fredsupholstery.com

Next.js 15 (App Router) + TypeScript + Tailwind. Rebuild of the GoHighLevel site,
structured so Phase 2 can scale to ~285 pages without rework.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
```

## Phase 1 status — what's built

| Route | Replaces | Status |
|---|---|---|
| `/` | `/` and `/u` | Done |
| `/about` | `/about-us` | Done |
| `/upholstery` | `/fine-furniture-reupholstery-santa-barbara` | Done |
| `/marine-upholstery` | `/marine-reupholstery-santa-barbara` | Done |
| `/commercial-upholstery` | `/commercial-upholstery-santa-barbara` | Done |
| `/outdoor-upholstery` | `/outdoor-furniture-upholstery` | Done |
| `/gallery` | `/gallery` | Done — 52 photos |
| `/contact` | `/contact-us` | Done |
| `/quote` | (was a dead `#` link) | New |

All old URLs 301 to the new ones in `next.config.mjs`. Don't remove those.

---

## ⚠️ Four things that block launch

### 1. The About page says you don't do repairs

The live About page ends with an H1:

> SORRY WE NO LONGER PROVIDE AUTOMOTIVE UPHOLSTERY OR OFFER REPAIRS

It's reproduced in `src/app/about/page.tsx` behind `SHOW_LEGACY_NO_REPAIRS_NOTICE`
for Phase 1 fidelity. Right now the only occurrence of the word "repairs" anywhere
on the site is inside a refusal to do them — while the entire Phase 2 plan is a
64-page furniture repair silo. Flip that flag to `false` the moment repair goes live,
and confirm with the shop that automotive is genuinely still off the table (the plan
included an `/auto-upholstery/` silo, so that's a real decision, not a typo to fix).

### 2. Two different phone numbers are published

- `(805) 500-4873` — on the website, the text-for-quote line
- `(805) 962-9880` — on Yelp, Houzz, YellowPages and Google

Both are in `src/lib/site.ts` as `quotePhone` and `mainPhone`. Inconsistent NAP
across citations actively suppresses local rankings. Pick a primary, make every
citation match, and keep the other only if it's a deliberate tracked line.

### 3. Suite number and Friday hours disagree

- Site says **Suite 2K**; Yelp and YellowPages say **Ste 2d**
- Site says Friday **9:30–5:00**; Yelp says Friday **9:30–3:00**

Both marked `VERIFY` in `src/lib/site.ts`. Confirm with the shop and fix everywhere.

### 4. The quote form goes nowhere

`/api/quote` validates and logs but does not deliver unless `QUOTE_WEBHOOK_URL`
is set. Point it at a GoHighLevel inbound webhook (or replacement) before launch,
then submit a real test and confirm it lands. A silently broken form is worse than
no form.

---

## Images

**All photos currently load from the GoHighLevel CDN.** If the GHL account lapses,
every image on the site breaks. Migrate them:

```bash
npm run images:download                  # pulls all 95 assets into public/images/
echo "NEXT_PUBLIC_LOCAL_IMAGES=true" >> .env.local
npm run build
```

`assetUrl()` in `src/data/images.ts` switches every reference at once — nothing
else changes. Do this early.

The alt text in `src/data/images.ts` is descriptive but generic, because the source
site had none. Anyone who knows the actual jobs should rewrite it — 95 accurate alt
strings is real image-search traffic and it's a two-hour job.

---

## What changed from the live site (deliberately)

Faithful in content and structure, with the technical failures fixed:

- **Removed duplicated DOM.** GHL rendered separate desktop and mobile section
  variants into the same page, so all body copy existed twice. Now responsive CSS.
- **Fixed dead nav.** Gallery and Quote pointed at `#new-menu-item` anchors that
  went nowhere.
- **One consistency claim.** The site said "36 years", "32 years" and "Since 1986"
  on the same page. Everything now derives from `site.established`.
- **Corrected "Samsun Clinic" → "Sansum Clinic"** on the commercial page.
- **Added LocalBusiness schema** with a stable `@id`, plus sitemap and robots.
- **Real quote page** replacing the dead link.
- Accessibility floor: skip link, visible focus rings, reduced-motion support,
  labelled form controls, keyboard-operable mobile nav.

---

## Architecture — built for Phase 2

```
src/
├── app/                    routes (one folder per page)
│   └── api/quote/          form intake
├── components/             Header, Footer, Blocks, Reviews, Schema, QuoteForm
├── data/                   images.ts, reviews.ts  ← content lives here, not in pages
└── lib/site.ts             NAP, hours, nav — single source of truth
```

Phase 2 adds silo folders under `app/` (`upholstery/`, `furniture-repair/`,
`areas/`) with `[slug]` routes driven by data files. The `Hero` / `Section` /
`PhotoGrid` / `ServiceGrid` blocks are already the page template — new service
pages become data entries, not new components.

Before building 200 pages: move `sitemap.ts` off its hand-kept array, and add a
page registry that drives nav, sitemap, and internal linking from one place.

---

## Deploy

Vercel, connected to this repo. Set env vars in the project settings:

- `QUOTE_WEBHOOK_URL`
- `NEXT_PUBLIC_LOCAL_IMAGES` (once images are migrated)

Point DNS only after confirming the 301s resolve and the quote form delivers.
