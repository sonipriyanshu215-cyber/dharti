import { page, breadcrumbs, breadcrumbJsonLd } from "../build-pages.mjs";

const trail = [{ label: "Home", href: "/" }, { label: "Gallery" }];

const captions = [
  "Udhna outlet shopfront",
  "Sweet counter display",
  "Namkeen &amp; farsan display",
  "Chaat counter in action",
  "Kaju katli, freshly cut",
  "Mohan thal being prepared",
  "Packed namkeen, sealed for retail",
  "Diwali gift hamper",
  "Fresh samosas, hot off the counter",
  "City Light outlet shopfront",
  "Sev puri being assembled",
  "Rasmalai, ready to serve",
  "Wedding order boxes",
  "Manufacturing unit — namkeen frying",
  "Festival mithai spread",
  "Bakery counter",
];

const items = captions
  .map(
    (c, i) => `<button class="gallery-grid__item" type="button" data-full="/img/placeholder-4x3.svg">
        <img src="/img/placeholder-4x3.svg" alt="${c} — Dharti Namkeen &amp; Sweets (placeholder, awaiting owner photography)" width="400" height="${i % 3 === 0 ? 300 : i % 3 === 1 ? 500 : 400}" loading="lazy" decoding="async">
      </button>`
  )
  .join("\n      ");

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">A look inside</p>
  <h1>Gallery</h1>
  <p class="hero__lede">Every photo here is a placeholder. We only publish original photography the business owns the rights to (PLAN.md §9) — real photos replace these as soon as they're supplied.</p>
</header>

<section class="section">
  <div class="container">
    <div class="gallery-grid">
      ${items}
    </div>
  </div>
</section>

<div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
  <button class="lightbox__close" type="button" aria-label="Close">&times;</button>
  <button class="lightbox__prev" type="button" aria-label="Previous photo">&larr;</button>
  <figure class="lightbox__figure">
    <img data-lightbox-img src="/img/placeholder-1x1.svg" alt="">
    <figcaption class="lightbox__caption" data-lightbox-caption></figcaption>
  </figure>
  <button class="lightbox__next" type="button" aria-label="Next photo">&rarr;</button>
</div>
`;

page({
  route: "/gallery/",
  path: "gallery/index.html",
  title: "Gallery | Dharti Namkeen &amp; Sweets",
  description: "Photos from Dharti Namkeen &amp; Sweets, Surat — sweets, namkeen, chaat and both outlets. Placeholder images pending original photography.",
  activeRoute: "gallery",
  extraHead: breadcrumbJsonLd(trail, "/gallery/"),
  bodyScripts: ["lightbox.js"],
  main,
});
