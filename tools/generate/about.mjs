import { page, breadcrumbs, breadcrumbJsonLd, svgSprite } from "../build-pages.mjs";

const trail = [
  { label: "Home", href: "/" },
  { label: "About" },
];

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">Our story</p>
  <h1>Family-run, factory-fresh, since 1993</h1>
  <p class="hero__lede">Dharti Namkeen &amp; Sweets started as a small namkeen business in Udhna and grew into a full mithai, farsan and bakery counter — without ever moving production out of Surat.</p>
</header>

<section class="section">
  <div class="container">
    <div class="grid grid--2 u-align-start">
      <div class="prose stack">
        <h2>How it started</h2>
        <p>The business began making namkeen on a small scale in 1993, in what is now the Udhna Udhyog Nagar (Udhna GIDC) industrial area of Surat. The company was formally incorporated as Dharti Food Products Private Limited on <strong>19 June 2008</strong>, and sweets production was added to the original namkeen business around the same period.</p>
        <p>Today the Udhna address is both the flagship retail outlet and the manufacturing unit, with a second outlet in City Light / Althan bringing the same counter — mithai, namkeen, farsan and chaat — closer to customers on the other side of the city.</p>
        <h2>Owner &amp; team</h2>
        <p>The shop is run by its owner, Krunal Bhai, well known to regular customers for his hands-on involvement in the business — from sourcing to the counter.</p>
      </div>
      <div class="hero__media u-square">
        <img src="/img/placeholder-4x3.svg" alt="Dharti Namkeen &amp; Sweets team and shopfront" width="600" height="600" loading="lazy" decoding="async">
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">How we work</p>
      <h2>Hygiene, sourcing &amp; freshness</h2>
    </div>
    <div class="grid grid--3">
      <div class="category-card">
        <span class="category-card__icon">${svgSprite("factory")}</span>
        <h3>Own manufacturing unit</h3>
        <p>Sweets, namkeen and farsan are made at our Udhna unit rather than bought in from a third party, so we control the process end to end.</p>
      </div>
      <div class="category-card">
        <span class="category-card__icon">${svgSprite("leaf")}</span>
        <h3>Pure vegetarian</h3>
        <p>The full range is 100% pure vegetarian.</p>
      </div>
      <div class="category-card">
        <span class="category-card__icon">${svgSprite("shield")}</span>
        <h3>Made fresh, sold fresh</h3>
        <p>Chaat and hot farsan are cooked through the day rather than held overnight; packed namkeen is sealed for freshness in retail-ready packs.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Milestones</p>
      <h2>From one namkeen counter to two outlets</h2>
    </div>
    <ul class="timeline">
      <li><strong>1993</strong>Namkeen production begins on a small scale in Udhna, Surat.</li>
      <li><strong>19 June 2008</strong>Dharti Food Products Private Limited is incorporated (CIN U15400GJ2008PTC054244), formalising the business and expanding into sweets.</li>
      <li><strong>Since then</strong>A second outlet opens in City Light / Althan, bringing the full mithai, namkeen and chaat range to the west side of Surat.</li>
      <li><strong>Today</strong>Two outlets, one manufacturing unit, and daily service to walk-in, bulk and wholesale customers across Surat.</li>
    </ul>
  </div>
</section>
`;

page({
  route: "/about/",
  path: "about/index.html",
  title: "About Us — Dharti Namkeen &amp; Sweets, Surat",
  description: "The story behind Dharti Namkeen &amp; Sweets: our Udhna manufacturing unit, our approach to freshness and hygiene, and how the business grew to two outlets in Surat.",
  activeRoute: "about",
  extraHead: breadcrumbJsonLd(trail, "/about/"),
  main,
});
