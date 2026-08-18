import {
  page, breadcrumbs, breadcrumbJsonLd, svgSprite, waLink, mapEmbed, localBusinessJsonLd,
  PHONE_UDHNA_TEL, PHONE_UDHNA_DISPLAY, ADDRESS_UDHNA, ADDRESS_CITYLIGHT, DOMAIN,
} from "../build-pages.mjs";

// TBC — sign up free at https://web3forms.com (just an email address, no
// password) and paste the access key it emails you here. Submissions will
// silently fail at Web3Forms until this placeholder is replaced.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const trail = [{ label: "Home", href: "/" }, { label: "Contact" }];

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">Reach us directly</p>
  <h1>Contact</h1>
  <p class="hero__lede">Call, WhatsApp or send a message below — whichever's easiest for you.</p>
</header>

<section class="section">
  <div class="container">
    <div class="panel panel--narrow">
      <div class="section-head">
        <p class="eyebrow">Send us a message</p>
        <h2>We'll reply by phone, WhatsApp or email</h2>
      </div>
      <p id="sent" class="form-note form-note--success">Thanks — your message has been sent. We'll reply by phone, WhatsApp or email.</p>
      <form class="form stack" action="https://api.web3forms.com/submit" method="POST" data-contact-form>
        <input type="hidden" name="access_key" value="${WEB3FORMS_ACCESS_KEY}">
        <input type="hidden" name="subject" value="New enquiry from the Dharti Namkeen website">
        <input type="hidden" name="from_name" value="Dharti Namkeen website">
        <input type="hidden" name="redirect" value="${DOMAIN}/contact/#sent">
        <input class="form-honeypot" type="checkbox" name="botcheck" tabindex="-1">
        <div class="form-row">
          <div class="field">
            <label for="cf-name">Name</label>
            <input id="cf-name" name="name" type="text" required autocomplete="name">
          </div>
          <div class="field">
            <label for="cf-phone">Phone / WhatsApp number</label>
            <input id="cf-phone" name="phone" type="tel" required autocomplete="tel" inputmode="tel">
          </div>
        </div>
        <div class="field">
          <label for="cf-email">Email <span class="u-muted">(optional)</span></label>
          <input id="cf-email" name="email" type="email" autocomplete="email">
        </div>
        <div class="field">
          <label for="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows="4" required></textarea>
        </div>
        <div class="cluster u-justify-between">
          <button class="btn btn--primary" type="submit">${svgSprite("send")} Send message</button>
          <p class="form-note" data-form-status></p>
        </div>
      </form>
      <p class="form-note u-muted u-mt-md">Sent via <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">Web3Forms</a>, a third-party form service — nothing is stored in a database on this site. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>
    </div>
  </div>
</section>

<section class="section section--alt">
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
  bodyScripts: ["map-embed.js", "contact-form.js"],
  main,
});
