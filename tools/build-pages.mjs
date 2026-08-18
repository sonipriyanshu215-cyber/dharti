#!/usr/bin/env node
/**
 * tools/build-pages.mjs
 *
 * Authoring-time generator (zero npm dependencies — pure Node). This is NOT
 * a runtime build step: it writes plain static HTML files to disk once, and
 * those committed files are the source of truth from then on (PLAN.md §4).
 * Run it again only when the shared header/footer/head or a page's content
 * needs to change everywhere at once — that's what keeps chrome identical
 * across all 15 pages without a template engine in production.
 *
 * Usage: node tools/build-pages.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* ---------------------------------------------------------------------- *
 * 0. Site-wide constants
 *
 * DOMAIN is a placeholder — PLAN.md §11.2 item 6 ("domain name and who
 * controls it") is still open. Update this one constant once it's decided
 * and re-run this script; every canonical URL / JSON-LD id updates with it.
 * ---------------------------------------------------------------------- */
const SITE_NAME = "Dharti Namkeen & Sweets";
// HTML-escaped variant for text nodes / attributes — keep SITE_NAME itself
// raw because it also feeds JSON-LD (via JSON.stringify), which must get a
// literal "&", not the text "&amp;".
const SITE_NAME_HTML = SITE_NAME.replace(/&/g, "&amp;");
const LEGAL_NAME = "Dharti Food Products Private Limited";
const DOMAIN = "https://www.dhartinamkeen.com"; // TBC — PLAN.md §11.2 #6
const YEAR = new Date().getFullYear();

const PHONE_UDHNA_DISPLAY = "0261&nbsp;227&nbsp;1742";
const PHONE_UDHNA_TEL = "+912612271742";
const WHATSAPP_DISPLAY = "+91&nbsp;98985&nbsp;75857";
const WHATSAPP_NUMBER = "919898575857";

const ADDRESS_UDHNA = {
  street: "A8/10, Road No. 3, Udhyognagar, Udhna",
  locality: "Surat",
  region: "Gujarat",
  postal: "394210",
};
const ADDRESS_CITYLIGHT = {
  street: "A-41 Chandramani Society, near Anuvrat Dwar, Udhna–Magdalla Road",
  locality: "City Light / Althan, Surat",
  region: "Gujarat",
  postal: "395017",
};

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------------------------------------------- *
 * 1. Inline SVG icons — local only, no icon font, no CDN (PLAN.md §4/§7.4)
 * ---------------------------------------------------------------------- */
const ICON = {
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5c0-.6.4-1 1-1h3.2c.5 0 .9.3 1 .8l1 4a1 1 0 0 1-.3 1L7.6 11c1 2.4 3 4.4 5.4 5.4l1.2-1.3a1 1 0 0 1 1-.3l4 1c.5.1.8.5.8 1V20c0 .6-.4 1-1 1h-1C9.6 21 3 14.4 3 6V5Z"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.4-.7L3 21l1.9-5.5A8.4 8.4 0 1 1 21 11.5Z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.6 7.2.9-5.4 4.9 1.5 7.1L12 17.9 5.6 21.5l1.5-7.1L1.7 9.5l7.2-.9Z"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z"/><path d="M5 19c0-5 2-8 6-10"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4 6v6c0 4.7 3.4 8.4 8 9 4.6-.6 8-4.3 8-9V6Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  factory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21V10l5 3v-3l5 3v-3l6 3.5V21Z"/><path d="M3 21h18"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="9" width="18" height="12"/><path d="M3 13h18M12 9v12"/><path d="M12 9C9 9 8 6.5 9.5 5S12 6 12 9Zm0 0c3 0 4-2.5 2.5-4S12 6 12 9Z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  directions: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 8-8 10 10-8 8Z"/><path d="M11 3v8h8"/></svg>`,
  bakery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 0 1 16 0Z"/><path d="M4 12h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/></svg>`,
  bowl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11h18a9 8 0 0 1-18 0Z"/><path d="M8 11c0-3 1.5-5 4-6 2.5 1 4 3 4 6"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.8v7Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-3.5a1.8 1.8 0 0 1 3.6 0V16M12 12.5V16"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/></svg>`,
};

/* ---------------------------------------------------------------------- *
 * 2. Head / header / footer / mobile bar templates
 * ---------------------------------------------------------------------- */
const NAV_LINKS = [
  { route: "home", href: "/", label: "Home" },
  { route: "about", href: "/about/", label: "About" },
  { route: "products", href: "/products/", label: "Products", children: [
    { route: "products", href: "/products/", label: "All Products" },
    { route: "products-sweets", href: "/products/sweets/", label: "Sweets (Mithai)" },
    { route: "products-namkeen", href: "/products/namkeen/", label: "Namkeen &amp; Farsan" },
    { route: "products-farsan-chaat", href: "/products/farsan-chaat/", label: "Chaat &amp; Hot Farsan" },
    { route: "products-bakery", href: "/products/bakery/", label: "Bakery &amp; Beverages" },
    { route: "products-festive", href: "/products/festive/", label: "Festive &amp; Sugar-Free" },
  ]},
  { route: "bulk-orders", href: "/bulk-orders/", label: "Bulk &amp; Corporate" },
  { route: "outlets", href: "/outlets/", label: "Outlets" },
  { route: "gallery", href: "/gallery/", label: "Gallery" },
  { route: "faq", href: "/faq/", label: "FAQ" },
  { route: "contact", href: "/contact/", label: "Contact" },
];

function head({ title, description, canonicalPath, ogImage, extra = "", robots = "index, follow" }) {
  const canonical = `${DOMAIN}${canonicalPath}`;
  const image = ogImage || `${DOMAIN}/img/brand/og-default.jpg`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="#6b1620">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/img/brand/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE_NAME_HTML}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${image}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">

<link rel="stylesheet" href="/css/main.css">
<script src="/js/head.js"></script>
${extra}</head>`;
}

function svgSprite(name) {
  return ICON[name] || "";
}

function headerNav(activeRoute) {
  const items = NAV_LINKS.map((link) => {
    const current = link.route === activeRoute ? ` aria-current="page"` : "";
    if (link.children) {
      const isActiveGroup = link.children.some((c) => c.route === activeRoute);
      const subItems = link.children
        .map((c) => {
          const cCurrent = c.route === activeRoute ? ` aria-current="page"` : "";
          return `<li><a href="${c.href}"${cCurrent}>${c.label}</a></li>`;
        })
        .join("");
      return `<li>
          <details${isActiveGroup ? " open" : ""}>
            <summary>${link.label}</summary>
            <ul class="subnav">${subItems}</ul>
          </details>
        </li>`;
    }
    return `<li><a href="${link.href}"${current}>${link.label}</a></li>`;
  }).join("\n        ");

  return `<header class="site-header">
    <div class="container site-header__bar">
      <a class="brand" href="/">
        <img class="brand__logo" src="/img/brand/dharti-logo.png" alt="${SITE_NAME_HTML}" width="120" height="78">
        <span class="brand__text-gu" lang="gu">ધરતી નમકીન એન્ડ સ્વીટ્સ</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
        <span class="visually-hidden">Menu</span>
        <span class="nav-toggle__icon" aria-hidden="true"></span>
      </button>
      <ul class="nav-list" id="primary-nav">
        ${items}
      </ul>
      <a class="btn btn--primary btn--sm nav-cta" href="${waLink("Hi Dharti Namkeen &amp; Sweets, I'd like to know more.")}" target="_blank" rel="noopener noreferrer">
        ${svgSprite("chat")} WhatsApp Us
      </a>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h2>${SITE_NAME_HTML}</h2>
          <p>Surat's home of fresh mithai, namkeen &amp; farsan — 100% pure vegetarian, made and sold from our own Udhna manufacturing unit since 1993.</p>
          <div class="social-links u-mt-md">
            <a href="https://www.instagram.com/dhartifood" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${svgSprite("instagram")}</a>
          </div>
        </div>
        <div>
          <h3>Visit us</h3>
          <address>
            <strong>Udhna (main outlet &amp; factory)</strong><br>
            ${ADDRESS_UDHNA.street},<br>${ADDRESS_UDHNA.locality} ${ADDRESS_UDHNA.postal}<br>
            <a href="tel:${PHONE_UDHNA_TEL}">${PHONE_UDHNA_DISPLAY}</a>
          </address>
          <address class="u-mt-sm">
            <strong>City Light / Althan</strong><br>
            ${ADDRESS_CITYLIGHT.street},<br>${ADDRESS_CITYLIGHT.locality} ${ADDRESS_CITYLIGHT.postal}
          </address>
        </div>
        <div>
          <h3>Get in touch</h3>
          <ul>
            <li><a href="tel:${PHONE_UDHNA_TEL}">${svgSprite("phone")} ${PHONE_UDHNA_DISPLAY}</a></li>
            <li><a href="${waLink("Hi Dharti Namkeen &amp; Sweets, I'd like to know more.")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} WhatsApp ${WHATSAPP_DISPLAY}</a></li>
            <li><span>FSSAI Licensed</span></li>
          </ul>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li><a href="/products/">Full product range</a></li>
            <li><a href="/bulk-orders/">Bulk &amp; corporate gifting</a></li>
            <li><a href="/outlets/">Outlets &amp; hours</a></li>
            <li><a href="/faq/">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-legal">
        <p>&copy; ${YEAR} ${LEGAL_NAME}. 100% pure vegetarian. Prices available in-store / on WhatsApp only.</p>
        <ul>
          <li><a href="/privacy-policy/">Privacy Policy</a></li>
          <li><a href="/terms/">Terms of Use</a></li>
          <li><a href="/sitemap.xml">Sitemap</a></li>
        </ul>
      </div>
    </div>
  </footer>
  <nav class="mobile-bar" aria-label="Quick actions">
    <a href="tel:${PHONE_UDHNA_TEL}">${svgSprite("phone")} Call</a>
    <a href="${waLink("Hi Dharti Namkeen &amp; Sweets, I'd like to know more.")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} WhatsApp</a>
    <a href="/outlets/">${svgSprite("directions")} Directions</a>
  </nav>`;
}

function breadcrumbs(trail) {
  // trail: [{label, href}] — final item has no href (current page)
  const items = trail
    .map((t, i) => (t.href ? `<li><a href="${t.href}">${t.label}</a></li>` : `<li aria-current="page">${t.label}</li>`))
    .join("");
  return `<nav class="breadcrumbs container" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
}

function breadcrumbJsonLd(trail, basePath) {
  // trail[].label is authored for HTML display, so it may contain "&amp;"
  // (required in the visible <nav>) — decode back to a literal "&" for the
  // JSON-LD name field, which must not contain HTML entities.
  const itemListElement = trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.label.replace(/&amp;/g, "&"),
    item: t.href ? `${DOMAIN}${t.href}` : `${DOMAIN}${basePath}`,
  }));
  return jsonLdScript({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement });
}

function jsonLdScript(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj, null, 2)}</script>\n`;
}

function scripts(list) {
  return list.map((s) => `<script src="/js/${s}" defer></script>`).join("\n");
}

/* ---------------------------------------------------------------------- *
 * 3. Reusable content builders
 * ---------------------------------------------------------------------- */
function productCard({ name, desc, tags = [], gu, image }) {
  const tagLabels = { veg: "Veg", bestseller: "Bestseller", seasonal: "Seasonal", "sugar-free": "Sugar-Free", farali: "Upvas / Farali", new: "New" };
  const tagHtml = tags
    .map((t) => `<span class="tag${t === "veg" ? " tag--veg" : ""}${t === "seasonal" ? " tag--seasonal" : ""}">${tagLabels[t] || t}</span>`)
    .join("");
  const src = image ? `/img/products/${image}.jpg` : "/img/placeholder-4x3.svg";
  return `<article class="card" data-filter-card="${tags.join(" ")}">
          <div class="card__media"><img src="${src}" alt="${name} at Dharti Namkeen &amp; Sweets" width="400" height="300" loading="lazy" decoding="async"></div>
          <div class="card__body">
            <h3 class="card__title">${name}${gu ? ` <span class="card__gu" lang="gu">${gu}</span>` : ""}</h3>
            <p class="card__desc">${desc}</p>
            <div class="card__tags">${tagHtml}</div>
          </div>
        </article>`;
}

function categoryCard({ href, icon, title, desc }) {
  return `<a class="category-card" href="${href}">
        <span class="category-card__icon">${svgSprite(icon)}</span>
        <h3>${title}</h3>
        <p>${desc}</p>
        <span class="cluster category-card__cta">Browse ${svgSprite("arrow")}</span>
      </a>`;
}

function statusBadgeHTML(fallback) {
  return `<p class="status-badge" data-status-badge data-open="09:00" data-close="21:30" data-days="0,1,2,3,4,5,6">
          <span class="status-badge__dot" aria-hidden="true"></span>
          <span data-status-text>${fallback}</span>
        </p>`;
}

function mapEmbed({ src, title, staticAlt }) {
  return `<div class="map-embed">
          <img src="/img/placeholder-4x3.svg" alt="${staticAlt}" loading="lazy" width="400" height="250">
          <button class="map-embed__cta" type="button" data-map-embed-trigger data-map-src="${src}" data-map-title="${title}">
            <span>${svgSprite("pin")} Load interactive map</span>
          </button>
        </div>`;
}

/* ---------------------------------------------------------------------- *
 * 4. JSON-LD graphs
 * ---------------------------------------------------------------------- */
function organizationJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${DOMAIN}/#organization`,
    name: SITE_NAME,
    url: DOMAIN,
    logo: `${DOMAIN}/img/brand/logo.png`,
    sameAs: [
      "https://www.instagram.com/dhartifood",
    ],
  });
}

function websiteJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    url: DOMAIN,
    name: SITE_NAME,
    publisher: { "@id": `${DOMAIN}/#organization` },
  });
}

function localBusinessJsonLd() {
  const common = (id, name, address, telephone) => ({
    "@type": ["FoodEstablishment", "Bakery"],
    "@id": `${DOMAIN}/#${id}`,
    name,
    image: `${DOMAIN}/img/brand/og-default.jpg`,
    url: DOMAIN,
    telephone,
    priceRange: "₹₹",
    servesCuisine: "Indian Sweets, Namkeen, Farsan, Street Food",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postal,
      addressCountry: "IN",
    },
    parentOrganization: { "@id": `${DOMAIN}/#organization` },
  });
  return jsonLdScript({
    "@context": "https://schema.org",
    "@graph": [
      common("outlet-udhna", `${SITE_NAME} — Udhna`, ADDRESS_UDHNA, PHONE_UDHNA_TEL),
      common("outlet-citylight", `${SITE_NAME} — City Light`, ADDRESS_CITYLIGHT, undefined),
    ],
  });
}

/* ---------------------------------------------------------------------- *
 * 5. Page assembly
 * ---------------------------------------------------------------------- */
function page({ route, path: outPath, title, description, activeRoute, extraHead = "", bodyScripts = [], main, ogImage, robots }) {
  const html = `${head({ title, description, canonicalPath: route, extra: extraHead, ogImage, robots })}
<body>
<a class="skip-link" href="#main">Skip to main content</a>
${headerNav(activeRoute)}
<main id="main">
${main}
</main>
${footer()}
<script src="/js/nav.js" defer></script>
${scripts(bodyScripts)}
</body>
</html>
`;
  const fullPath = join(ROOT, outPath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, html, "utf8");
  console.log("wrote", outPath);
}

export {
  page, head, headerNav, footer, breadcrumbs, breadcrumbJsonLd, jsonLdScript,
  productCard, categoryCard, statusBadgeHTML, mapEmbed, svgSprite, waLink,
  organizationJsonLd, websiteJsonLd, localBusinessJsonLd,
  SITE_NAME, DOMAIN, PHONE_UDHNA_DISPLAY, PHONE_UDHNA_TEL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER,
  ADDRESS_UDHNA, ADDRESS_CITYLIGHT, YEAR, ICON,
};
