import { page, breadcrumbs, breadcrumbJsonLd } from "../build-pages.mjs";

const trail = [{ label: "Home", href: "/" }, { label: "Gallery" }];

// Captions describe what's actually in each photo (checked visually) rather
// than reusing the old placeholder set, which assumed close-up product/action
// shots these photos aren't — they're mostly wide interior/aisle views.
// Width/height are each photo's real intrinsic size (read from the file) so
// the masonry grid reserves the right space instead of guessing.
const photos = [
  { file: "img-1.jpeg", caption: "Shop interior — sweet counter and store layout", width: 318, height: 159 },
  { file: "img-2.jpeg", caption: "Namkeen &amp; packaged snacks aisle", width: 194, height: 259 },
  { file: "img-3.jpeg", caption: "Shop interior, view towards the entrance", width: 318, height: 159 },
  { file: "img-4.jpeg", caption: "Packaged snacks display near the entrance", width: 192, height: 192 },
  { file: "img-5.jpeg", caption: "Dry fruits &amp; sweets shelf", width: 192, height: 192 },
  { file: "img-6.jpeg", caption: "Fully stocked namkeen aisle", width: 192, height: 144 },
  { file: "img-7.jpeg", caption: "Juice &amp; beverage counter", width: 318, height: 159 },
  { file: "img-8.jpeg", caption: "Gathiya counter", width: 318, height: 159 },
  { file: "img-9.jpeg", caption: "Packaged namkeen shelf", width: 192, height: 192 },
  { file: "img-10.jpeg", caption: "Biscuits &amp; packaged snacks aisle", width: 318, height: 159 },
  { file: "img-11.jpeg", caption: "Bright aisle with natural light", width: 318, height: 159 },
  { file: "img-12.jpeg", caption: "Dry fruits &amp; bulk namkeen display", width: 259, height: 194 },
  { file: "img-13.jpeg", caption: "Packed farsan counter", width: 259, height: 194 },
  { file: "img-14.jpeg", caption: "Shelves of packed namkeen varieties", width: 225, height: 225 },
  { file: "img-15.jpeg", caption: "Bulk namkeen &amp; snacks display", width: 194, height: 259 },
  { file: "img-16.jpeg", caption: "Assorted namkeen mix", width: 252, height: 200 },
];

const items = photos
  .map(
    (p) => `<button class="gallery-grid__item" type="button" data-full="/img/gallery/${p.file}">
        <img src="/img/gallery/${p.file}" alt="${p.caption} — Dharti Namkeen &amp; Sweets" width="${p.width}" height="${p.height}" loading="lazy" decoding="async">
      </button>`
  )
  .join("\n      ");

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">A look inside</p>
  <h1>Gallery</h1>
  <p class="hero__lede">A look inside our store — sweets counter, namkeen aisles and packed farsan on the shelf.</p>
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
  description: "Photos from inside Dharti Namkeen &amp; Sweets, Surat — the sweet counter, namkeen aisles and packed farsan on the shelf.",
  activeRoute: "gallery",
  extraHead: breadcrumbJsonLd(trail, "/gallery/"),
  bodyScripts: ["lightbox.js"],
  main,
});
