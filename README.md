# Dharti Namkeen & Sweets — website

Static, informative (brochure) site. Plain HTML + CSS + a little vanilla JS.
No framework, no bundler, no npm dependencies, no runtime build step. See
`PLAN.md` for the full spec and rationale, and `OWNER-INFO-CHECKLIST.md` for
what's still needed from the business owner before this can go live.

**Current status:** scaffold complete, all 15 pages generated with draft
copy. Every unconfirmed fact is wrapped in `<span data-tbc>…</span>` (renders
with a dotted underline and a `[TBC]` marker) so nothing reads as confirmed
until it's replaced. **Do not remove a `data-tbc` marker without the
corresponding item in `PLAN.md` §11.2 being confirmed in writing by the
owner.**

## How the pages are built

There's no runtime build step — the committed `.html` files under
`index.html`, `about/`, `products/`, etc. *are* the deployed site. But
hand-editing the same header/footer/`<head>` across 15 files invites drift,
so an **authoring-time** generator produces them from one source of truth:

- `tools/build-pages.mjs` — shared template functions (`head()`,
  `headerNav()`, `footer()`, card builders, JSON-LD builders, icon set) plus
  the site-wide constants (domain, phone numbers, addresses).
- `tools/generate/*.mjs` — one file per page (or page group), each importing
  the shared functions and calling `page({...})` with that page's title,
  description, JSON-LD and main content.
- `tools/generate-all.mjs` — imports every generator, which runs them.

**To change something sitewide** (nav link, footer text, a phone number,
the domain): edit the relevant constant/function in `tools/build-pages.mjs`,
then run:

```
node tools/generate-all.mjs
```

This overwrites all 15 HTML files (+ `404.html`) in place. Review the diff
before committing — that's your safety net instead of a CI template check.

**To add or edit a product card:** find its category in
`tools/generate/products.mjs` (`productCard({ name, desc, tags })`) and
copy/edit an entry, then re-run the generator. Tags currently understood:
`bestseller`, `seasonal`, `sugar-free`, `farali`, `veg`, plus `sev` /
`chevda` / `bhel` / `farali` on the namkeen page specifically (used by the
client-side filter).

**To add a whole new page:** create `tools/generate/<name>.mjs` following
the pattern in an existing one, import it from `tools/generate-all.mjs`, add
its `<url>` to `sitemap.xml` **in the same commit**, and add a nav entry in
`NAV_LINKS` in `tools/build-pages.mjs` if it should appear in the header.

## JavaScript files (`js/`)

All progressive enhancement — every page must work with JS disabled.

| File | Loaded on | Purpose |
|---|---|---|
| `head.js` | every page | Adds a `js` class to `<html>` pre-paint so the no-JS nav layout never flashes. |
| `nav.js` | every page | Mobile menu: toggle, Esc to close, closes on outside click. |
| `open-now.js` | home, outlets, contact | Computes the "Open now / Closed" badge from `data-open`/`data-close`/`data-days` attributes. |
| `lightbox.js` | gallery | Focus-trapped, keyboard-accessible photo lightbox. |
| `map-embed.js` | outlets, contact | Click-to-load Google Maps iframe (nothing from Google loads on first paint). |
| `filter.js` | products/namkeen | Client-side tag filter over already-rendered cards. |
| `contact-form.js` | contact | Submits the contact form via `fetch` instead of a page navigation. The plain `<form>` still works with JS disabled — see `_headers`/`vercel.json` CSP and `#sent:target` in `main.css`. |

## Images

Every photo today is `img/placeholder-4x3.svg` or `placeholder-1x1.svg` —
see `OWNER-INFO-CHECKLIST.md` §8. When real photography arrives:

1. Strip EXIF/GPS metadata.
2. Export AVIF + WebP + JPEG fallback, sized to the layout's actual display
   size (product cards render at 400×300; hero renders larger).
3. Replace the placeholder `<img>`/`<picture>` in the relevant
   `tools/generate/*.mjs` file (not the generated HTML directly — it will
   be overwritten next run), set real `width`/`height`, and re-run
   `node tools/generate-all.mjs`.

`img/brand/` (icons, `og-default.jpg`, `logo.png`) currently holds
programmatically generated placeholder marks (maroon circle + "D"), not the
owner's real logo — swap these the moment brand assets arrive (§9), then
regenerate `favicon.ico` (or replace it directly; it's a small binary, not
part of the HTML generator).

## Fonts

v1 uses the OS system font stack (`--font-head` / `--font-body` in
`css/main.css`) — zero font network requests, no Google Fonts CDN (PLAN.md
§4/§6 decision 6). Self-hosted `woff2` brand fonts are a drop-in upgrade:
add `@font-face` rules with `font-display: swap`, preload the two files in
`head()` in `tools/build-pages.mjs`, and update the two `--font-*`
variables — no other page needs to change.

## Security headers

`_headers` (Cloudflare Pages format) currently ships CSP in **report-only**
mode. Before launch:

1. Deploy a preview build and check the browser console / Cloudflare
   analytics for any CSP violation reports.
2. Fix any real violation (it almost always means an inline `<script>`,
   inline `<style>`, or `on*=` attribute slipped into hand-written HTML —
   grep the generator output for `style="` / `onclick=` etc.).
3. Rename `Content-Security-Policy-Report-Only` to `Content-Security-Policy`
   in `_headers` once a report-only pass is clean.
4. Re-check with securityheaders.com / Mozilla Observatory — target A+.

## Deploy & rollback

Hosting target is Cloudflare Pages, connected to this Git repo, deploying
from `main` (or the configured branch) with **no build command** (this is a
static-files-as-is deploy). In the Pages project settings, set the build
output directory to the repo root, and exclude `PLAN.md`, `README.md`,
`OWNER-INFO-CHECKLIST.md`, `partials/`, `tools/` and `.htmlvalidate.js` from
the published output (PLAN.md §7.6) — verify after the first deploy by
requesting those paths on the live URL and confirming they 404.

Every deploy is immutable; roll back to any previous deploy from the
Cloudflare Pages dashboard with one click.

## Pre-commit / pre-launch checklist

- [ ] Ran `node tools/generate-all.mjs` after any content or template edit,
      and the diff looks right.
- [ ] No new `style="`, `on\w+="` attributes, or inline `<script>`/`<style>`
      blocks anywhere (breaks the CSP in `_headers`).
- [ ] Every new page has a `<url>` in `sitemap.xml`.
- [ ] `npx html-validate "**/*.html"` — zero errors.
- [ ] No `data-tbc` marker removed without the matching PLAN.md §11.2 item
      being confirmed in writing.
- [ ] Lighthouse (mobile) run on a preview deploy before merging anything
      that touches CSS, images or JS.
