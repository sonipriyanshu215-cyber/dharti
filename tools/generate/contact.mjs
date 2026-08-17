import {
  page, breadcrumbs, breadcrumbJsonLd, svgSprite, waLink, mapEmbed, localBusinessJsonLd,
  PHONE_UDHNA_TEL, PHONE_UDHNA_DISPLAY, ADDRESS_UDHNA, ADDRESS_CITYLIGHT,
} from "../build-pages.mjs";

const trail = [{ label: "Home", href: "/" }, { label: "Contact" }];

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">Reach us directly</p>
  <h1>Contact</h1>
  <p class="hero__lede">No contact form in this first version of the site — that's a deliberate choice (see the note below), so calling or messaging us directly is the fastest way to reach us.</p>
</header>

<section class="section">
  <div class="container">
    <div class="grid grid--2 u-align-start">
      <div class="stack">
        <div class="panel">
          <h3>Call or WhatsApp</h3>
          <div class="cluster u-mt-sm">
            <a class="btn btn--primary" href="tel:${PHONE_UDHNA_TEL}">${svgSprite("phone")} ${PHONE_UDHNA_DISPLAY}</a>
            <a class="btn btn--accent" href="${waLink("Hi Dharti Namkeen &amp; Sweets, I'd like to know more.")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} WhatsApp</a>
          </div>
        </div>
        <div class="panel panel--muted">
          <h3>Why there's no contact form (yet)</h3>
          <p class="u-m-0">A form means collecting and storing personal data, which brings its own security and India DPDP Act obligations. For a first version, <code>tel:</code> and WhatsApp links let you reach us with nothing collected or stored on this site at all. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>
        </div>
        <div class="panel">
          <h3>Getting here</h3>
          <ul class="u-mt-xs">
            <li><strong>By car:</strong> both outlets are on named roads with direct access — use the Directions buttons below.</li>
            <li><strong>By auto/bus:</strong> nearest landmarks are noted on each outlet card on the <a href="/outlets/">Outlets page</a>.</li>
            <li><strong>Parking:</strong> limited near Udhna — see the honest note on the <a href="/outlets/">Outlets page</a>.</li>
          </ul>
        </div>
      </div>

      <div class="stack">
        <div class="outlet-card">
          <h3>Udhna — main outlet &amp; factory</h3>
          <dl>
            <dt>Address</dt><dd>${ADDRESS_UDHNA.street},<br>${ADDRESS_UDHNA.locality} ${ADDRESS_UDHNA.postal}</dd>
          </dl>
          <div class="outlet-card__actions">
            <a class="btn btn--primary btn--sm" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(ADDRESS_UDHNA.street + ", " + ADDRESS_UDHNA.locality)}" target="_blank" rel="noopener noreferrer">${svgSprite("directions")} Directions</a>
          </div>
          ${mapEmbed({
            src: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_UDHNA.street + ", " + ADDRESS_UDHNA.locality)}&amp;output=embed`,
            title: "Map — Dharti Namkeen &amp; Sweets, Udhna",
            staticAlt: "Static map placeholder for the Udhna outlet — click to load the interactive Google Map",
          })}
        </div>
        <div class="outlet-card">
          <h3>City Light / Althan</h3>
          <dl>
            <dt>Address</dt><dd>${ADDRESS_CITYLIGHT.street},<br>${ADDRESS_CITYLIGHT.locality} ${ADDRESS_CITYLIGHT.postal}</dd>
          </dl>
          <div class="outlet-card__actions">
            <a class="btn btn--primary btn--sm" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(ADDRESS_CITYLIGHT.street + ", " + ADDRESS_CITYLIGHT.locality)}" target="_blank" rel="noopener noreferrer">${svgSprite("directions")} Directions</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

page({
  route: "/contact/",
  path: "contact/index.html",
  title: "Contact Us | Dharti Namkeen &amp; Sweets, Surat",
  description: "Call or WhatsApp Dharti Namkeen &amp; Sweets in Udhna or City Light, Surat. Addresses, directions and getting-here notes for both outlets.",
  activeRoute: "contact",
  extraHead: breadcrumbJsonLd(trail, "/contact/") + localBusinessJsonLd(),
  bodyScripts: ["map-embed.js"],
  main,
});
