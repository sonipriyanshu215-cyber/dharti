import {
  page, breadcrumbs, breadcrumbJsonLd, svgSprite, waLink, mapEmbed, statusBadgeHTML,
  PHONE_UDHNA_TEL, PHONE_UDHNA_DISPLAY, ADDRESS_UDHNA, ADDRESS_CITYLIGHT,
} from "../build-pages.mjs";

const trail = [{ label: "Home", href: "/" }, { label: "Outlets" }];

function hoursTable(caption, hours) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const todayIndex = (new Date().getDay() + 6) % 7; // Mon=0 ... Sun=6
  const rows = days
    .map((d, i) => `<tr${i === todayIndex ? ' data-today="true"' : ""}><th scope="row">${d}</th><td>${hours}</td></tr>`)
    .join("\n          ");
  return `<table class="hours-table">
        <caption>${caption}</caption>
        <tbody>
          ${rows}
        </tbody>
      </table>`;
}

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">Two outlets in Surat</p>
  <h1>Outlets, hours &amp; directions</h1>
  <p class="hero__lede">Both outlets carry the full mithai, namkeen and chaat range.</p>
</header>

<section class="section">
  <div class="container">
    <div class="grid grid--2 u-align-start">

      <div class="outlet-card">
        <h3>Udhna — main outlet &amp; factory</h3>
        <p class="u-m-0 u-muted">Also our manufacturing unit — this is where everything on the menu is made.</p>
        ${statusBadgeHTML("Checking today's hours…")}
        <dl>
          <dt>Address</dt><dd>${ADDRESS_UDHNA.street},<br>${ADDRESS_UDHNA.locality} ${ADDRESS_UDHNA.postal}</dd>
          <dt>Phone</dt><dd>${PHONE_UDHNA_DISPLAY}</dd>
          <dt>WhatsApp</dt><dd>+91&nbsp;98985&nbsp;75857</dd>
          <dt>Parking</dt><dd>Limited on-street parking right at the unit — a few extra minutes to find a spot is normal, especially at peak times.</dd>
        </dl>
        ${hoursTable("Opening hours — Udhna", "9:00 am – 9:30 pm")}
        <div class="outlet-card__actions">
          <a class="btn btn--primary btn--sm" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(ADDRESS_UDHNA.street + ", " + ADDRESS_UDHNA.locality)}" target="_blank" rel="noopener noreferrer">${svgSprite("directions")} Get directions</a>
          <a class="btn btn--ghost btn--sm" href="tel:${PHONE_UDHNA_TEL}">${svgSprite("phone")} Call</a>
        </div>
        ${mapEmbed({
          src: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_UDHNA.street + ", " + ADDRESS_UDHNA.locality)}&amp;output=embed`,
          title: "Map — Dharti Namkeen &amp; Sweets, Udhna",
          staticAlt: "Static map placeholder for the Udhna outlet — click to load the interactive Google Map",
        })}
      </div>

      <div class="outlet-card">
        <h3>City Light / Althan</h3>
        <p class="u-m-0 u-muted">A second full-range counter on the west side of the city.</p>
        <dl>
          <dt>Address</dt><dd>${ADDRESS_CITYLIGHT.street},<br>${ADDRESS_CITYLIGHT.locality} ${ADDRESS_CITYLIGHT.postal}</dd>
          <dt>Landmark</dt><dd>Opposite Anuvrat Dwar, near the City Light cross road</dd>
          <dt>Phone</dt><dd>Call or WhatsApp our Udhna number above — it's answered for both outlets.</dd>
        </dl>
        ${hoursTable("Opening hours — City Light", "9:15 am – 10:00 pm")}
        <div class="outlet-card__actions">
          <a class="btn btn--primary btn--sm" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(ADDRESS_CITYLIGHT.street + ", " + ADDRESS_CITYLIGHT.locality)}" target="_blank" rel="noopener noreferrer">${svgSprite("directions")} Get directions</a>
        </div>
        ${mapEmbed({
          src: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_CITYLIGHT.street + ", " + ADDRESS_CITYLIGHT.locality)}&amp;output=embed`,
          title: "Map — Dharti Namkeen &amp; Sweets, City Light",
          staticAlt: "Static map placeholder for the City Light outlet — click to load the interactive Google Map",
        })}
      </div>

    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="panel panel--muted">
      <h3>Festival hours</h3>
      <p class="u-m-0">Hours around Diwali and other major festivals often differ from the regular schedule. Special hours will be posted here and on our social profiles once confirmed each season.</p>
    </div>
  </div>
</section>
`;

page({
  route: "/outlets/",
  path: "outlets/index.html",
  title: "Outlets &amp; Hours — Udhna &amp; City Light, Surat",
  description: "Find Dharti Namkeen &amp; Sweets in Udhna and City Light / Althan, Surat — addresses, hours, parking notes and directions for both outlets.",
  activeRoute: "outlets",
  extraHead: breadcrumbJsonLd(trail, "/outlets/"),
  bodyScripts: ["open-now.js", "map-embed.js"],
  main,
});
