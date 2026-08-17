import { page, breadcrumbs, breadcrumbJsonLd, svgSprite, waLink, PHONE_UDHNA_TEL, PHONE_UDHNA_DISPLAY } from "../build-pages.mjs";

const trail = [{ label: "Home", href: "/" }, { label: "Bulk &amp; Corporate Orders" }];

const useCases = [
  { icon: "gift", title: "Diwali &amp; festival corporate gifting", desc: "Branded or standard hampers for staff, clients and vendors, ordered ahead of the festival rush." },
  { icon: "sparkle", title: "Wedding &amp; function orders", desc: "Mithai and namkeen boxes sized to guest counts, for engagements, weddings and receptions." },
  { icon: "factory", title: "Wholesale &amp; distributor supply", desc: "Packed namkeen supply to shops and distributors from our own Udhna manufacturing unit." },
  { icon: "bowl", title: "Temple &amp; community bulk orders", desc: "Larger-quantity prasad and community-event orders." },
];

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">Weddings · Festivals · Wholesale</p>
  <h1>Bulk orders &amp; corporate gifting</h1>
  <p class="hero__lede">We regularly supply larger quantities for weddings, festival gifting and business distribution, made at our own Udhna unit. Tell us the occasion and quantity, and we'll quote you directly — no online order form, just a phone call or a WhatsApp message.</p>
  <div class="hero__actions">
    <a class="btn btn--accent" href="${waLink("Hi, I'd like a bulk order quote for an occasion. Occasion: \nApprox. quantity: \nDate needed by: ")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} Get a bulk quote on WhatsApp</a>
    <a class="btn btn--ghost" href="tel:${PHONE_UDHNA_TEL}">${svgSprite("phone")} Call ${PHONE_UDHNA_DISPLAY}</a>
  </div>
</header>

<section class="section">
  <div class="container">
    <div class="grid grid--2">
      ${useCases
        .map(
          (u) => `<div class="category-card">
        <span class="category-card__icon">${svgSprite(u.icon)}</span>
        <h3>${u.title}</h3>
        <p>${u.desc}</p>
      </div>`
        )
        .join("\n      ")}
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Planning your order</p>
      <h2>What to know before you ask for a quote</h2>
    </div>
    <div class="grid grid--3">
      <div class="panel">
        <h3>Pack sizes &amp; hampers</h3>
        <p class="u-m-0">Tell us your budget and guest count and we'll put together hamper options that fit — every order is sized to the occasion.</p>
      </div>
      <div class="panel">
        <h3>Lead time</h3>
        <p class="u-m-0">More notice means more choice — reach out as early as you can, especially around Diwali and wedding season.</p>
      </div>
      <div class="panel">
        <h3>GST invoices</h3>
        <p class="u-m-0">Ask us about GST invoicing when you place your bulk or wholesale enquiry.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="panel panel--muted cluster u-justify-between">
      <div>
        <h3 class="u-m-0">Ready to enquire?</h3>
        <p class="u-mt-xs">Message us the occasion, quantity and date — we'll reply with options and a quote.</p>
      </div>
      <a class="btn btn--primary" href="${waLink("Hi, I'd like a bulk order quote for an occasion. Occasion: \nApprox. quantity: \nDate needed by: ")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} WhatsApp us</a>
    </div>
  </div>
</section>
`;

page({
  route: "/bulk-orders/",
  path: "bulk-orders/index.html",
  title: "Bulk Orders &amp; Corporate Gifting | Dharti Namkeen &amp; Sweets",
  description: "Wedding, festival and corporate bulk orders from Dharti Namkeen &amp; Sweets, Surat — mithai and namkeen hampers, wholesale supply, and GST invoicing.",
  activeRoute: "bulk-orders",
  extraHead: breadcrumbJsonLd(trail, "/bulk-orders/"),
  main,
});
