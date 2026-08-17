# Dharti Namkeen & Sweets — Static Informative Website

**Project code:** DN-WEB
**Type:** Static, informative (brochure) website — no e-commerce, no online payments
**Stack:** Plain HTML + CSS + vanilla JS, no build step, no dependencies (§4)
**Start here:** `CREATION.md` (creation brief + page list + security locks). This file is the detailed spec.
**Status:** Phases 1–4 are built in the repo — all 15 pages, shared header/footer/`<head>` in `partials/`, `css/main.css`, JSON-LD (Organization/WebSite/LocalBusiness/BreadcrumbList/FAQPage), `sitemap.xml`, `robots.txt`, `_headers` with CSP in **report-only**. Every unconfirmed fact is marked `data-tbc`; photos are SVG placeholders. `README.md` documents the day-to-day workflow. **Launch blocked** on owner-supplied information, the FSSAI number and original photography — `OWNER-INFO-CHECKLIST.md`. See §10 for what phase 5 hardening still needs.
**Last updated:** 2026-08-17

---

## 1. Objective

Build a fast, secure, mobile-first static website for **Dharti Namkeen & Sweets**, a sweets / namkeen / farsan shop and food manufacturer in Udhna, Surat, Gujarat.

The site is **informative only**. Its job is to:

1. Let a customer in Surat find the shop, its timings, and its phone number in under 5 seconds.
2. Showcase the product range (sweets, namkeen, farsan, chaat, bakery) as a browsable catalogue — **without** publishing prices or taking orders.
3. Communicate trust: years in business, hygiene, FSSAI compliance, bulk/corporate/festival supply capability.
4. Rank for local searches like "namkeen shop Udhna", "sweet shop Surat", "farsan near me Surat".
5. Route commercial intent to WhatsApp / phone / a contact enquiry form, and route online orders out to existing third-party platforms (Zomato / Swiggy) instead of building a cart.

**Explicit non-goals (v1):** shopping cart, payment gateway, user accounts, login, admin panel, live inventory, price list. Every one of these adds attack surface and PCI/DPDP obligations for zero benefit at this stage.

---

## 2. Business data (researched — MUST be verified with owner before publishing)

Everything below was collected from public listings (Google Business Profile, Zomato, Justdial, IndiaMART, TradeIndia, MCA/Tracxn, magicpin). Third-party listings are frequently stale. **Nothing in this section goes live until the owner confirms it in writing.**

### 2.1 Identity

| Field | Value | Confidence |
|---|---|---|
| Trading name | Dharti Namkeen & Sweets (also listed as "Dharti Sweets & Namkeen") | High |
| Legal entity | Dharti Food Products Private Limited | High |
| CIN | U15400GJ2008PTC054244 (ROC Ahmedabad, incorporated 19 Jun 2008) | High |
| GSTIN | 24AACCD9068L1ZA | Medium — verify |
| "Established" year | Suratwale: **1993** (namkeen, small scale); some directories **1997**; Pvt Ltd **19 Jun 2008**; Suratwale also says sweets production began **2008** | **Conflict — ask owner** |
| Category | Indian sweets shop, namkeen/farsan manufacturer & retailer, bakery & confectionery | High |
| Contact person named in listings | Mr. Kunal / "Krunal bhai" (owner, praised in reviews) | Medium |
| FSSAI licence no. | **Not found publicly — mandatory to obtain from owner** | Missing |

### 2.2 Outlets

**A. Udhna — main outlet + head office / manufacturing unit**
Ground Floor, Dharti House, A-10/8, Road No. 3, Udhna Udhyog Nagar (Udhna GIDC), Udhna, Surat, Gujarat 394210
Landline: 0261 227 1742 (an alternate 0261 2276092 also appears in one directory — verify)
Mobile / WhatsApp: +91 98985 75857 (from the official Instagram bio)

**B. City Light / Althan outlet**
A-41 Chandramani Society, near Anuvrat Dwar, Udhna–Magdalla Road, City Light / Althan, Surat, Gujarat 395017
Landmark: opposite Anuvrat Dwar, near City Light cross road

> Zomato indicates "all 2 outlets in Surat", which matches the two above. Confirm whether any third location or franchise exists.

### 2.3 Hours — conflicting sources, must confirm

- Google Business Profile (Udhna, owner-pasted 17 Aug 2026): open, closes 9:30 pm; popular times ~9 am and ~5 pm; typical visit ~10 min
- District / Zomato: 8:30 am – 9:30 pm daily
- Suratwale (company directory): 10:00 am – 10:00 pm daily
- Yappe (Google mirror, City Light): 9:15 am – 10:00 pm daily
- magicpin (City Light): 11:00 am – 9:00 pm
- A B2B directory lists 10 am – 7 pm, Sunday closed — this is almost certainly the *office*, not the shop

**Plan:** publish per-outlet hours only after the owner confirms each, and mark festival/Diwali special hours separately.

### 2.4 Reputation (for the design brief — display rules in §7.4)

- Google: 4.2 ★ from ~3,076 reviews (Udhna); 4.2 ★ from ~914 reviews (City Light listing)
- Justdial: 4.3 ★ from ~3,256 reviews; 4.2 ★ from ~947 reviews (Udhna–Magdalla Rd)
- Zomato: 4.0 ★ (25 ratings, delivery); ~₹300 for two
- Facebook: 5/5 from 24 votes
- Attributed quotes from the Google listing (home page): Mohit Jain, Bhushan Patil, Mithil Makwana
- Sentiment themes: wide variety, tasty samosa/chaat, good quality and service, praise for the owner. Recurring negatives: **prices on the higher side**, and **no parking at Udhna**. Google notes people typically spend ~10 minutes there.

**How we use the negatives instead of hiding them:** lead with "quality and freshness" positioning rather than "cheapest"; add an honest "Parking & directions" note on the Contact page with the nearest parking option. That converts a complaint into useful information.

### 2.5 Product range (from Zomato menu + IndiaMART/TradeIndia catalogues)

**Mithai / Sweets (~35 items listed):** Kaju Katli, Kesar Kaju Katli, Kaju Roll, Kaju Anjeer Roll, Kaju Apple, Kaju Raj Kamal, Kaju Pista Paan, Kaju Mawa Burfi, Mohan Thal, Motichoor Laddu, Bikaneri Laddu, Desi Ghee Boondi, Dharti Special Peda, Kesar Peda, White Peda, Mathura Peda, Milk Cake, Mawa Diamond Cake, Mawa Fruit Cake, Mawa Kesar Roll, Angoor Rabdi, Rasmalai, Rasgulla, Raj Bhog, Gulab Jamun, Kala Jamun, Lal Jamun, Lal / Kali Rasbhari, Balushahi, Anjeer Chakra, Anjeer Kalakand, Pista Ghari, Kesar Ghari, Chocolate Barfi, Kaju Jalebi, Bengali sweets (sandesh, petha), Shrikhand (Kesar Elaichi).

**Sugar-free / diet range:** Sugar Free Anjeer Chikki, Sugar Free Khajur Chikki, and sugar-free sweets on request — a genuine differentiator worth its own section.

**Seasonal / festival:** Khajur Pak and Winter Special range; Kesar Ghari (Chandi Padvo); Mohanthal, Ghughra/Mathiya (Diwali); Modak (Ganesh Chaturthi) — confirm the actual festival calendar with the owner.

**Namkeen / Farsan (packed, own manufacture):** Bhavnagri Gathiya, Tikha Gathiya, Bhata Kani Gathiya, Sev Mamra, Ratlami Sev, Chana Dal, Chatpata Chana, Navratna Mix Chevda, Makkai Chivda, Dal Muth Mix Chivda, Bombay Mix, Nadiyadi Bhel, Instant Bhel, Pudina Mix, Cheese Masala Mix, Farali Mix (upvas), Banana Wafers. Retail packs incl. 500 g sealed packs.

**Chaat & hot farsan (counter, 17 items listed):** Samosa, Dal Kachori, Raj Kachori, Kachori Chaat, Samosa Chaat, Papdi Chaat, Bhalla Chaat, Basket Chaat, Basket Cheese Chaat, Sev Puri, Cheese Sev Puri, Pani Puri, Bombay Bhel, Delhi Chaat, Dahi Puri, Khakhra Pizza, Dahi.

**Beverages:** Malai Lassi, Kesar Lassi, Mango Lassi, Cold Coco, fruit squashes & crushes.

**Bakery & confectionery:** biscuits, cakes, bakery products (per company listings).

**B2B:** wholesale / distribution of namkeen and sweets, bulk & corporate gifting, festival hampers, catering for functions.

> ⚠️ **Data hygiene flag:** one aggregator (magicpin) lists a non-vegetarian item under this brand. Every other source says **pure vegetarian**. The site will state "100% Pure Vegetarian" only after owner confirmation, and we will not copy aggregator menus blindly.

---

## 3. Target audience

1. **Local walk-in customer (mobile, ~70% of traffic):** wants address, hours, phone, "what do they have", photos. Needs a one-tap Call / WhatsApp / Directions.
2. **Festival & occasion buyer:** wants hampers, bulk boxes, wedding/Diwali gifting, pre-order lead times.
3. **B2B / distributor / retailer:** wants the packed-namkeen range, pack sizes, MOQ, shelf life, and a business enquiry channel.
4. **Out-of-town / NRI family:** wants to know the brand is genuine and to send someone / place a phone order.

---

## 4. Tech stack — plain HTML / CSS / JS, no build step

**Decision (locked):** hand-written static HTML, CSS and a very small amount of vanilla JavaScript. No framework, no bundler, no npm dependencies, no build step. The published files are the source files.

| Layer | Choice | Notes |
|---|---|---|
| Markup | Hand-written semantic HTML5, one `.html` file per page | Directly editable by anyone; no toolchain to install or keep patched. |
| Styling | One shared `css/main.css` using CSS custom properties for design tokens, plus modern CSS (grid, `clamp()`, container queries where useful) | No preprocessor, no Tailwind. Tokens give consistency without a framework. |
| JavaScript | Vanilla ES modules in external `.js` files, progressive enhancement only | Mobile nav, gallery lightbox, "Open now" badge, optional namkeen filter. Every page must be fully usable and readable with JS disabled. |
| Images | Manually pre-optimised AVIF + WebP + JPEG fallback via `<picture>`, explicit `width`/`height`, `loading="lazy"` (except hero), `decoding="async"` | Done once at asset-prep time using Squoosh or `cwebp`/`avifenc`. Documented in the README so it stays consistent. |
| Icons | Inline local SVG (or a local SVG sprite) | No icon font, no CDN. |
| Fonts | **v1 (current, locked — see §11.1 decision 6): system font stack**, `--font-head` / `--font-body` in `css/main.css`, covering Gujarati via Noto Sans/Serif Gujarati or Shruti where the OS provides them. Zero font network requests. Self-hosted `woff2` brand fonts (subset to Latin + Gujarati, `font-display: swap`, preloaded) are a documented later upgrade once the owner supplies brand fonts — see README "Fonts". | No Google Fonts CDN, either way. |
| Contact | `tel:` and `wa.me` deep links only in v1 | See §7.3. |
| Hosting | **Cloudflare Pages** (alt: Netlify) — connected to this Git repo | Free global CDN, automatic HTTPS, security headers via `_headers`, DDoS protection, immutable deploys, one-click rollback. A no-build-step site deploys as-is. |
| Analytics | **Cloudflare Web Analytics** (cookieless, script from the same edge) or none | No cookie banner required. Optional. |
| Checks | Manual/CLI only: W3C HTML validator, Lighthouse, axe DevTools, a link checker, securityheaders.com | No CI pipeline is strictly needed without a build; a lightweight GitHub Action running the HTML validator and Lighthouse is optional. |

**What this choice buys us:** effectively zero supply-chain risk (no `node_modules`, no transitive dependencies, nothing to `npm audit`), no build that can break, and a site the owner's future developer can edit with any text editor. For a 15-page brochure site this is a legitimate engineering choice, not a compromise.

**What it costs us, and how we mitigate each — read this before we start:**

1. **Header/footer/nav duplication across ~13 pages.** There is no include mechanism in plain HTML. Mitigation: the canonical markup lives in `partials/header.html` and `partials/footer.html`; `tools/sync-chrome.mjs` (Node, zero dependencies) rewrites the marked block on every page from those partials and sets `aria-current="page"` on the right nav link, so a chrome change is one file edit plus one script run instead of manual find-and-replace. `--check` mode fails if any page has drifted — worth wiring into a pre-commit habit or the optional CI job in §4. We will **not** inject the header with JavaScript at runtime — that harms SEO and breaks the page without JS; `sync-chrome.mjs` edits the committed HTML, it is not a build step.
2. **No content validation.** Nothing fails the build if a product entry is malformed, because there is no build. Mitigation: product cards are written directly as HTML from a documented pattern, plus a pre-launch W3C validation and link-check pass on every page.
3. **Product data is hardcoded in HTML, not JSON.** Fetching a JSON catalogue at runtime would make the catalogue invisible to crawlers and JS-dependent. Mitigation: cards live in the HTML; the repeating card pattern is documented in the README so additions stay consistent.
4. **Manual image optimisation.** Mitigation: a documented asset-prep recipe and a hard per-image size budget (§8), checked at review.

**Rejected alternatives:** WordPress (constant patching, plugin CVEs, needs a server — unjustifiable here); Astro/Next.js (better ergonomics, but the owner asked for no build step and the site is small enough that the tradeoff is acceptable).

---

## 5. Site map & page-by-page content plan

Clean URLs without a build step are achieved with a folder + `index.html` per route, so `/about/` works on any static host with no rewrite rules.

```
/                          index.html                      Home
/about/                    about/index.html                About / Our Story
/products/                 products/index.html             Product range (hub)
/products/sweets/          products/sweets/index.html      Mithai
/products/namkeen/         products/namkeen/index.html     Namkeen & packed farsan
/products/farsan-chaat/    ...                             Hot farsan, chaat & snacks
/products/bakery/          ...                             Bakery, cakes & beverages
/products/festive/         ...                             Festival specials, hampers & sugar-free
/bulk-orders/              ...                             Bulk, corporate gifting, wedding & catering
/outlets/                  ...                             Both outlets + map + hours + parking
/gallery/                  ...                             Photo gallery
/contact/                  ...                             Phones, WhatsApp, hours, directions
/faq/                      ...                             Frequently asked questions
/privacy-policy/           ...                             Privacy policy (DPDP Act 2023)
/terms/                    ...                             Terms of use + disclaimer
404.html                                                   Not found (Cloudflare Pages serves automatically)
sitemap.xml                                                Hand-maintained (15 URLs — trivial)
robots.txt                                                 Static
```

### 5.1 Home
1. **Hero** — brand name in English + Gujarati, one-line positioning ("Surat's favourite mithai, namkeen & farsan since 19XX"), hero food photo, two primary CTAs: **Call Now** and **WhatsApp**, plus a live "Open now / Closed" indicator computed from published hours.
2. **Trust strip** — years in business · 2 outlets in Surat · 4.2★ on Google (linked to the real profile) · 100% pure vegetarian · FSSAI licensed · own manufacturing unit.
3. **What we're known for** — 4–6 category cards (Sweets, Namkeen, Farsan & Chaat, Bakery, Sugar-Free, Gift Hampers) linking into `/products/*`.
4. **Bestsellers** — 6–8 hero items with photos and short descriptions (Kaju Katli, Mohan Thal, Bhavnagri Gathiya, Samosa, Rasmalai, Pista Ghari). **Names and photos only — no prices.**
5. **Festival / season banner** — one clearly-commented HTML block on the home page (Diwali / Chandi Padvo / Winter Khajur Pak) that can be swapped or removed by editing that block alone.
6. **Bulk & corporate gifting teaser** → `/bulk-orders`.
7. **Reviews** — 3 real, attributed Google review quotes with a link to the full profile.
8. **Find us** — both outlet cards with address, hours, Directions and Call buttons.
9. **Footer** — full NAP (name, address, phone), hours, FSSAI no., social links, legal links.

### 5.2 About
Founding story and family/manufacturing heritage; the Udhna Udhyog Nagar unit; hygiene and quality process (sourcing, desi ghee, no artificial colours where true, packaging and freshness); scale (retail + wholesale + distribution); milestone timeline; a note on the team/owner; certifications (FSSAI, GST, Pvt Ltd). **Every factual claim must be owner-approved — food claims are legally actionable under FSS Act advertising rules.**

### 5.3 Products (hub + 5 category pages)
- Hub page: category cards + a short intro + a clear "prices on request / visit outlet" note.
- Each category page: responsive grid of item cards (photo, name in English + Gujarati, 1-line description, tags such as *sugar-free*, *seasonal*, *bestseller*, *upvas/farali*).
- Client-side filter/search **only** on the namkeen page if the list exceeds ~40 items — a small vanilla-JS enhancement that filters already-rendered cards via `data-` attributes. With JS off, all cards simply remain visible.
- Item cards are written directly in the page HTML from a documented repeating pattern. Adding a product = copying one card block, editing the text, and adding an optimised image. No JSON, no runtime fetch, so every item is crawlable.
- **No prices anywhere.** Rationale: prices change constantly, are the shop's most common complaint, and stale prices create consumer-law exposure. Use "Enquire on WhatsApp for today's rate".

### 5.4 Bulk orders / corporate gifting
Use cases (weddings, Diwali corporate boxes, temple/community bulk, distributor & retailer supply); pack sizes and hamper options; typical lead times and advance-notice guidance; GST invoice availability. Call to action is a **pre-filled WhatsApp deep link** ("I'd like a bulk order quote for…") plus the business phone number — no form in v1.

### 5.5 Outlets
Per-outlet card: full address, landmark, per-day hours, phone, WhatsApp, Google Maps "Get directions" deep link, a **click-to-load** map embed (see §7.5), parking guidance (honest note for Udhna), and what's distinctive about that outlet (e.g. chaat counter, factory outlet).

### 5.6 Gallery
12–24 curated, compressed, correctly-sized photos in a masonry grid with a lightweight, keyboard-accessible, focus-trapped lightbox. Only **owner-supplied** photography — see §9.

### 5.7 Contact
Phones (`tel:` links), WhatsApp deep link with a pre-filled message, both addresses, hours table, and a "reach us by bus/rail/car" note. Wired with `LocalBusiness` structured data. **No form in v1** (decision locked) — so no personal data is collected, transmitted or stored by this site at all, which removes the entire form attack surface and most DPDP Act obligations. A form can be added later per §7.3.

### 5.8 FAQ
Do you make sugar-free sweets? Do you take bulk/wedding orders and how much notice? Is everything pure vegetarian? Do you deliver / are you on Zomato-Swiggy? Can you ship namkeen outside Surat? What's the shelf life of packed namkeen? Do you give GST invoices? Is there parking? Do you do festival hampers? → marked up with `FAQPage` JSON-LD to win rich results.

### 5.9 Legal
Privacy policy stating plainly what is true in v1 — **this site collects no personal data, has no forms, sets no cookies, and uses no advertising or cross-site tracking** — plus how to contact the business and the grievance contact under India's **DPDP Act 2023**. If cookieless analytics is enabled, it is disclosed here. Terms of use, content disclaimer ("product availability, weights and appearance may vary; images are indicative"), and a copyright notice. The policy must be rewritten the day a form is ever added.

---

## 6. Design direction

- **Positioning:** traditional Gujarati mithai-shop warmth, executed with modern, clean, uncluttered layout. Confident, not cluttered — the opposite of typical sweet-shop websites.
- **Palette:** deep maroon / mithai-box red as primary; saffron-gold accent; warm cream background; charcoal text. All pairings verified to **WCAG AA (4.5:1)**; the gold is accent-only, never text on cream.
- **Type:** a warm serif for headings, a highly legible sans for body. **v1 uses the OS system font stack** (instant render, zero network requests, no CDN — see §4); self-hosted `woff2` brand fonts with `font-display: swap` are a drop-in upgrade for later once the owner supplies them, documented in README "Fonts". Either way: **no Google Fonts CDN** (third-party request + privacy exposure).
- **Bilingual:** English primary, Gujarati product names alongside in `lang="gu"` spans. A full Gujarati locale is a phase-2 option (`/gu/`) with `hreflang`.
- **Mobile-first:** sticky bottom action bar on mobile with Call · WhatsApp · Directions. Minimum 44×44 px tap targets.
- **Motion:** subtle only, and fully gated behind `prefers-reduced-motion`.

---

## 7. Security plan (mandatory — reviewed before any code is written)

A static site's threat model is small but not empty. These are treated as build requirements, not nice-to-haves.

### 7.1 Architecture-level
- **No server, no database, no API, no auth, no forms, no user-generated content in v1.** Nothing to inject into, nothing to dump, no personal data at rest. This is the single biggest security decision in the project, and the plain-HTML + no-form choices strengthen it.
- **No build toolchain and no npm dependencies**, so there is no `node_modules`, no lockfile to poison and no transitive-dependency advisory surface. Supply-chain risk is close to zero by construction.
- **No secrets in the repo**, and none are needed — there are no API keys, no tokens, no endpoints. `.gitignore` covers `.env*` defensively. GitHub secret scanning stays enabled.
- Deploy from Git only — no manual FTP/drag-drop uploads. Every published file is traceable to a reviewed commit.

### 7.2 HTTP security headers (Cloudflare Pages `_headers`, verified after each deploy)
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self';
  img-src 'self' data:; font-src 'self'; connect-src 'self';
  frame-src https://www.google.com; frame-ancestors 'none';
  base-uri 'none'; form-action 'none'; object-src 'none'; upgrade-insecure-requests
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: DENY
Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=(), usb=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
```
- **No `unsafe-inline`, no `unsafe-eval`, and no inline `<script>`/`<style>`/`on*=` attributes anywhere.** With no build step there is nothing to generate CSP hashes for us, so the rule is simply: all CSS goes in `css/*.css`, all JS in `js/*.js`, all event handlers attached with `addEventListener`. This is a hard code-review rule, and it is the most likely thing to be violated by accident in hand-written HTML.
- `form-action 'none'` is safe precisely because v1 has no forms; it must be relaxed only if a form is ever added.
- `frame-src https://www.google.com` exists solely for the click-to-load map (§7.5). Drop it entirely if we ship without any embed.
- CSP is developed in `Content-Security-Policy-Report-Only` first, then enforced.
- Target: **A/A+ on securityheaders.com** and Mozilla Observatory as a release gate.

### 7.3 Contact form — deferred out of v1 (decision locked)
v1 has **no form**: contact is `tel:` and `wa.me` links only, so the site collects nothing. If a form is added later, it must ship with all of the following, reviewed as its own change:
- Approach: a reputable managed endpoint (Cloudflare Pages Function + Turnstile, or Formspree/Web3Forms) — never self-hosted PHP mail.
- Server-side validation and length caps on every field; allow-list of expected fields; reject anything else.
- **Bot defence in layers:** Cloudflare **Turnstile** (privacy-friendly CAPTCHA) + honeypot field + minimum time-to-submit.
- **Rate limiting** per IP at the edge; hard cap on submissions per minute.
- Output encoding + `Content-Type` discipline so a submitted payload can never be interpreted as a formula (CSV/Excel injection) or HTML in the notification email.
- **Data minimisation:** name, phone/email, message, optional event date. **No** address, no DOB, nothing sensitive. No payments, ever — so no PCI-DSS scope.
- No submissions stored on the site; delivered to the owner's mailbox and retained per the stated policy. SPF/DKIM/DMARC configured on the sending domain to stop spoofing.
- Honest privacy policy reflecting exactly the above (DPDP Act 2023 notice + consent + grievance contact).

### 7.4 Third-party & supply chain
- **Zero third-party JS by default.** No jQuery, no Bootstrap CDN, no font CDN, no chat widget, no tracking pixels. Every additional origin is someone else's security posture.
- Any unavoidable external resource: pinned version + **Subresource Integrity** + `crossorigin` + explicit CSP entry.
- **No runtime dependencies at all** — no jQuery, no Bootstrap, no lightbox library, no slider library. The mobile nav, lightbox and "Open now" badge are each a few dozen lines of hand-written JS. This is the main security advantage of the no-build-step choice and we should not quietly give it back by pulling in a CDN script for a carousel.
- Any unavoidable external resource in future: pinned version + **Subresource Integrity** + `crossorigin` + an explicit CSP entry.
- Review rule: adding any third-party script is a security decision requiring explicit sign-off, not a styling decision.
- **Ratings and review quotes** are displayed as attributed quotations with a link to the source profile — no scraping, no fabricated testimonials, and no `AggregateRating` JSON-LD for third-party ratings (that violates Google's structured-data policy and risks a manual action).

### 7.5 Maps, media & links
- Google Maps is **not** iframed on load. Show a static, locally-hosted map image with a "Load interactive map" button (click-to-consent) — this removes third-party cookies/fingerprinting from first paint and keeps the page fast. Plain "Get directions" deep links need no embed at all.
- All external links: `rel="noopener noreferrer"` and `target="_blank"` only where justified.
- Images stripped of EXIF/GPS metadata before commit (shop photos can leak location/device data).

### 7.6 Domain, DNS & operations
- Registrar lock + 2FA on registrar, Cloudflare, GitHub and hosting accounts. Auto-renew on, with a calendar reminder — an expired domain is the most common way a small-business site dies or gets hijacked.
- DNSSEC enabled; CAA record restricting who may issue certificates.
- Redirect all HTTP → HTTPS; canonical host (`www` or apex, pick one and 301 the other).
- Only the owner's real, publicly-listed phone numbers and emails go on the site. **No personal/staff email addresses** — use an `info@`-style alias to limit harvesting.
- Immutable deploys with one-click rollback. `.git`, `PLAN.md`, `README.md`, `partials/` and any working files must be excluded from the published output — with no build step this is **not** automatic, so it is configured explicitly in the Cloudflare Pages output settings and verified by requesting those paths on the live site after launch.
- Post-launch: quarterly header + link re-check; monitor Google Search Console for hacked-content and manual-action alerts.

---

## 8. SEO, performance & accessibility

**Local SEO**
- `LocalBusiness` / `FoodEstablishment` JSON-LD per outlet: name, image, `@id`, url, telephone, `address` (PostalAddress), `geo`, `openingHoursSpecification`, `priceRange`, `servesCuisine`, `sameAs` (Google profile, Zomato, Justdial, Instagram, Facebook, LinkedIn).
- `Organization` + `WebSite` + `BreadcrumbList` + `FAQPage` JSON-LD. Validated with Google's Rich Results Test.
- Consistent **NAP** across the site and every external listing (name/address/phone must match Google Business Profile character-for-character).
- Unique `<title>` (≤60 chars) and meta description (≤155) per page, targeting real queries: "namkeen shop in Udhna Surat", "best sweet shop Surat", "farsan Udhna", "Dharti Namkeen price list", "sweet shop near me Surat".
- Hand-maintained `sitemap.xml` (15 URLs) + `robots.txt`; a `<link rel="canonical">` on every page; OpenGraph + Twitter cards with a branded 1200×630 image. Note: without a build step the sitemap and canonicals are manual, so adding a page means updating the sitemap in the same commit — this goes in the README checklist.
- Off-site checklist for the owner: claim/complete the Google Business Profile, keep hours and photos current, respond to reviews, and align Justdial/Zomato/IndiaMART listings.

**Performance budget (checked manually with Lighthouse before launch)**
- Lighthouse ≥ 95 Performance / 100 Accessibility / 100 Best Practices / 100 SEO on mobile.
- LCP < 2.0 s on 4G, CLS < 0.05, INP < 200 ms, **total JS < 15 KB** (achievable with no framework), hero image < 120 KB, total page weight < 700 KB on the heaviest page.
- AVIF/WebP with correct `width`/`height` on every image, zero external origins to `preconnect` to, long-lived caching on `/css/`, `/js/`, `/fonts/` and `/img/` via `_headers`. Since asset filenames are not content-hashed without a build, use a moderate `max-age` on HTML (or `no-cache`) and add a `?v=` query string to CSS/JS when they change.

**Accessibility (WCAG 2.2 AA)**
Semantic landmarks, one `h1` per page, logical heading order, visible focus rings, skip-to-content link, real `alt` text on food photos (empty `alt` for decorative), 4.5:1 contrast, full keyboard operability for the lightbox and mobile menu (including `Esc` and focus trapping), `lang="gu"` on Gujarati text. Verified with axe DevTools plus manual keyboard and screen-reader passes.

---

## 9. Assets & information needed from the owner (blocks launch)

**Must have**
1. Written confirmation of: legal name, founding year, both outlet addresses, all phone numbers, WhatsApp number, per-outlet hours, and the public email address.
2. **FSSAI licence number** (legally required to display for a food business) and confirmation of GSTIN.
3. Logo in vector (SVG/AI/PDF) + brand colours if they exist.
4. **Original photography they own the rights to:** shopfront (both outlets), counters/display, 15–25 hero product shots, packed namkeen packs, hampers, and optionally the team. *We will not lift photos from Zomato/Justdial/Google — that is copyright infringement and a real legal risk.*
5. Confirmed product list per category, with correct Gujarati spellings, and which items are seasonal.
6. Confirmation of the "100% pure vegetarian" claim and any "no artificial colours / desi ghee" claims.
7. Social profile URLs (Instagram `@dhartifood`, Facebook, LinkedIn) and the Zomato/Swiggy links to use.
8. Domain: which one to use/register, and who controls it.

**Nice to have:** founder's story in the owner's own words, notable clients/distributors, awards, a short shop video, pack sizes and shelf life for packed namkeen, delivery/shipping policy.

---

## 10. Delivery phases

| Phase | Scope | Status | Exit criteria |
|---|---|---|---|
| **0 — Approve** | This plan reviewed; §11 decisions locked | ✅ Done | See §11 |
| **0.5 — Owner information gathering** | Send `OWNER-INFO-CHECKLIST.md` to the owner; collect confirmed facts, FSSAI number and original photography | **⏳ Not returned — current blocker** | Checklist returned complete |
| **1 — Foundation** | `index.html` skeleton, `css/main.css` with design tokens, canonical header/footer/nav in `partials/`, `_headers` with CSP in report-only, `robots.txt`, `.gitignore`, favicon.svg | ✅ Built in repo. **Gap:** `favicon.ico`, `img/brand/apple-touch-icon.png` and the two manifest PNG icons are referenced in `partials/head.html` / `site.webmanifest` but do not exist yet — they derive from the owner's logo (§9) | Home page validates at W3C; securityheaders.com ≥ A on a preview deploy; no 404 on any referenced icon |
| **2 — Core pages** | About, Products hub + 5 category pages, Outlets, Contact | ✅ Scaffolded with draft/TBC copy | Real (owner-approved) content in; every link resolves; consistent header/footer across all pages |
| **3 — Secondary pages** | Bulk orders, Gallery + lightbox, FAQ, 404, Privacy, Terms | ✅ Scaffolded; gallery is 12 SVG placeholders pending real photography | Keyboard + screen-reader pass on gallery and mobile nav |
| **4 — SEO & structured data** | JSON-LD per §8, titles/descriptions, OG images, `sitemap.xml`, canonicals | ✅ Organization/WebSite/LocalBusiness/BreadcrumbList/FAQPage all in place (FAQPage answers are still draft/TBC text — must be updated together with the visible FAQ copy once owner-confirmed). **Gap:** `og:image` and JSON-LD `image`/`logo` point at files that don't exist yet (§9) | Rich Results Test clean; no duplicate titles; all 15 URLs in sitemap |
| **5 — Hardening & audit** | CSP switched to enforce, image optimisation pass, W3C validation of every page, Lighthouse, axe, cross-browser + real Android/iOS device check, verify no inline JS/CSS slipped in | Not started — depends on real images and confirmed copy first | All budgets in §8 met; headers A+; zero validator errors |
| **6 — Launch** | Domain, DNS, DNSSEC, CAA, HSTS preload, HTTP→HTTPS + canonical-host redirects, exclude non-public files from output, analytics, Search Console + sitemap submission, Google Business Profile alignment | Not started | Live on HTTPS; sitemap submitted; rollback verified; `PLAN.md` and `partials/` return 404 |
| **7 — Post-launch (optional)** | Enquiry form + Turnstile (§7.3), Gujarati locale `/gu/`, recipe/blog content for SEO | Not started | Each shipped only after its own security review |

---

## 11. Decisions

### 11.1 Locked (approved 2026-08-17)

| # | Decision | Choice |
|---|---|---|
| 1 | Tech stack | **Plain HTML / CSS / vanilla JS, no build step.** Hosted on Cloudflare Pages from Git. See §4. |
| 2 | Prices | **None published.** "Enquire on WhatsApp for today's rate." |
| 3 | Contact method (v1) | **Call + WhatsApp links only.** No form, so no personal data is collected. |
| 4 | Language | **English site with Gujarati product names alongside** (`lang="gu"` spans). Full `/gu/` locale deferred to phase 7. |
| 5 | Content approach | **Superseded — see CREATION.md §13 option 1.** Original decision was to wait for owner-confirmed facts before writing any page code; in practice the whole site was built as a scaffold first, with every unconfirmed fact marked `data-tbc` and every photo an SVG placeholder, so the site is reviewable and structurally complete while §11.2 is outstanding. Nothing in this scaffold is public; §11.2 still gates going live (§10 phase 6). |
| 6 | Fonts (v1) | **OS system font stack**, not self-hosted `woff2` (contradicts the original §4/§6 draft, which this revision corrects). Zero font network requests, Gujarati covered where the OS provides it. Self-hosted brand fonts remain a documented, low-effort upgrade for whenever the owner supplies them — see README "Fonts". |

### 11.2 Still open — blocks going live (§10 phase 6)

These go to the owner via `OWNER-INFO-CHECKLIST.md`. Per decision 5, the scaffold was built ahead of these answers with everything marked `data-tbc`; **no `data-tbc` marker may be removed, and the site must not go live,** until each corresponding item below is confirmed.

1. **Founding year** — 1993, 1997 or 2008? (Suratwale: namkeen from 1993, sweets from 2008; Pvt Ltd incorporated Jun 2008.)
2. **Correct primary phone** — 0261 227 1742 or 0261 2276092? Is +91 98985 75857 the WhatsApp number for enquiries?
3. **Exact hours per outlet**, including weekly off (if any) and festival hours.
4. **Exactly how many outlets** are ours (two confirmed) — any franchise or third location?
5. **Delivery/shipping** — do we link out to Zomato/Swiggy, and do you ship packed namkeen outside Surat?
6. **Domain name** and who currently owns/controls it.
7. **FSSAI licence number** — legally required before launch.
8. **Original photography** the business owns the rights to.
9. Confirmation of the **"100% pure vegetarian"** claim and any desi-ghee / no-artificial-colours claims.
10. Confirmed **product list per category** with correct Gujarati spellings and seasonal flags.

---

## 12. Repository layout

No build step, so the repo root **is** the deployed site. Non-public files are excluded at the hosting layer (§7.6). The tree below is what actually exists in the repo today, not aspirational — `tools/` and `.htmlvalidate.js` were added since the layout was first drafted, `fonts/` was dropped per decision 6, and the marked gaps are real 404s until the owner's logo/photos arrive (§9).

```
DN-WEB/
├─ index.html                     Home
├─ about/index.html
├─ products/index.html
├─ products/sweets/index.html
├─ products/namkeen/index.html
├─ products/farsan-chaat/index.html
├─ products/bakery/index.html
├─ products/festive/index.html
├─ bulk-orders/index.html
├─ outlets/index.html
├─ gallery/index.html
├─ contact/index.html
├─ faq/index.html
├─ privacy-policy/index.html
├─ terms/index.html
├─ 404.html
├─ robots.txt
├─ sitemap.xml
├─ site.webmanifest
├─ _headers                       CSP (report-only) + security + cache headers (Cloudflare Pages)
├─ favicon.svg                    ✅ present
├─ favicon.ico                    ❌ MISSING — referenced by every page's <head>, 404s today
├─ css/
│  └─ main.css                    Design tokens + all styles (single file, system fonts — decision 6)
├─ js/
│  ├─ head.js                     Sets a `js` class pre-paint so no-JS layout never flashes (~90 B)
│  ├─ nav.js                      Mobile menu (accessible, Esc + focus handling)
│  ├─ open-now.js                 "Open now / Closed" badge from published hours
│  ├─ lightbox.js                 Gallery lightbox (focus-trapped) — /gallery/ only
│  ├─ map-embed.js                Click-to-load Google Maps (§7.5) — /outlets/, /contact/ only
│  └─ filter.js                   Namkeen category filter, progressive enhancement — /products/namkeen/ only
├─ img/
│  ├─ placeholder-1x1.svg, placeholder-4x3.svg   ✅ present; every product/gallery image uses these today
│  └─ hero/  products/  outlets/  gallery/  brand/   ❌ MISSING — created when real photography lands.
│     brand/ must supply: apple-touch-icon.png, icon-192.png, icon-512.png, og-default.jpg, logo.png
│     (all four are already referenced by partials/head.html, site.webmanifest and
│     partials/jsonld-localbusiness.html, so they 404 / fail Rich Results until this exists)
└─ (not published — excluded from output, see §7.6)
   ├─ PLAN.md, CREATION.md
   ├─ README.md                   ✅ present — day-to-day workflow: adding a page/product, the
   │                              JS file table, editing partials/, image prep, fonts, deploy
   │                              & rollback, pre-commit checklist
   ├─ OWNER-INFO-CHECKLIST.md
   ├─ .gitignore
   ├─ .htmlvalidate.js            html-validate config, dev-only, run via `npx html-validate "**/*.html"`
   ├─ tools/
   │  ├─ scaffold-once.mjs        One-time page generator; already run (every route exists), kept for
   │  │                          reference — see its own header comment on when to delete it
   │  ├─ sync-chrome.mjs          Rewrites the header/footer block on every page from partials/ (§4);
   │  │                          `--check` fails CI-style if any page has drifted
   │  └─ fix-once.mjs             One-time text fixer (bare `&` → `&amp;`, non-breaking phone numbers)
   └─ partials/                   Canonical head / header / footer / JSON-LD markup — single source
                                  of truth that tools/sync-chrome.mjs copies into every page (§4)
      ├─ head.html, header.html, footer.html
      └─ jsonld-localbusiness.html   Organization/WebSite/LocalBusiness graph — wired into
                                     index.html, outlets/, contact/. FAQPage lives inline in
                                     faq/index.html (answers still draft/TBC, kept in sync
                                     with the visible copy)
```

---

## 13. Definition of done

- All pages in §5 live, with owner-approved content and owner-supplied photography only.
- FSSAI licence number displayed; no unverified facts, no prices, no scraped images.
- Every page passes the **W3C HTML validator** with zero errors.
- Lighthouse mobile ≥ 95/100/100/100; Core Web Vitals within §8 budgets; total JS < 15 KB.
- securityheaders.com **A+**; enforced CSP with no `unsafe-*`; **zero inline scripts, styles or `on*` handlers**; HSTS live.
- WCAG 2.2 AA verified (axe + manual keyboard and screen-reader pass).
- Structured data valid in Rich Results Test; sitemap submitted; NAP matches the Google Business Profile exactly.
- Zero third-party JavaScript and zero npm dependencies.
- Header, nav and footer identical across all pages; no broken links (link-checker clean).
- `PLAN.md`, `README.md` and `partials/` confirmed **not** reachable on the live domain.
- README documents how to add a page, add a product, prep images, and roll back a deploy.
