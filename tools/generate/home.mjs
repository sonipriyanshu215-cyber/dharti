import {
  page, productCard, categoryCard, statusBadgeHTML, svgSprite, waLink,
  organizationJsonLd, websiteJsonLd, localBusinessJsonLd,
  PHONE_UDHNA_TEL, PHONE_UDHNA_DISPLAY, ADDRESS_UDHNA, ADDRESS_CITYLIGHT,
} from "../build-pages.mjs";

const bestsellers = [
  productCard({ name: "Kaju Katli", image: "kaju-katli", desc: "Smooth cashew fudge diamonds, finished with edible silver leaf.", tags: ["bestseller", "veg"] }),
  productCard({ name: "Mohan Thal", image: "mohan-thal", desc: "Rich gram-flour fudge slow-roasted in ghee with cardamom and nuts.", tags: ["bestseller", "veg"] }),
  productCard({ name: "Bhavnagri Gathiya", image: "bhavnagri-gathiya", desc: "Thick, spiced besan gathiya — a Surat breakfast-table staple.", tags: ["bestseller", "veg"] }),
  productCard({ name: "Samosa", image: "samosa", desc: "Crisp-fried pastry, spiced potato filling, made fresh through the day.", tags: ["bestseller", "veg"] }),
  productCard({ name: "Rasmalai", image: "rasmalai", desc: "Soft paneer discs in lightly reduced, saffron-scented milk.", tags: ["bestseller", "veg"] }),
  productCard({ name: "Pista Ghari", image: "pista-ghari", desc: "Surat's signature ghari — mawa, ghee and pistachio in a crisp shell.", tags: ["bestseller", "veg"] }),
  productCard({ name: "Motichoor Laddu", image: "motichoor-laddu", desc: "Fine boondi pearls bound in sugar syrup — a festival and puja favourite.", tags: ["bestseller", "veg"] }),
  productCard({ name: "Sev Puri", image: "sev-puri", desc: "Crisp puris layered with chutneys, sev and fresh vegetables.", tags: ["bestseller", "veg"] }),
];

const categories = [
  categoryCard({ href: "/products/sweets/", icon: "gift", title: "Sweets (Mithai)", desc: "Kaju katli, peda, barfi, rasmalai and more, made fresh daily." }),
  categoryCard({ href: "/products/namkeen/", icon: "bowl", title: "Namkeen &amp; Farsan", desc: "Gathiya, sev, chevda and bhel mixes, packed for home and gifting." }),
  categoryCard({ href: "/products/farsan-chaat/", icon: "sparkle", title: "Chaat &amp; Hot Farsan", desc: "Samosa, kachori and a full chaat counter, made to order." }),
  categoryCard({ href: "/products/bakery/", icon: "bakery", title: "Bakery &amp; Beverages", desc: "Cakes, biscuits and cooling lassi &amp; squash for hot Surat afternoons." }),
  categoryCard({ href: "/products/festive/", icon: "sparkle", title: "Sugar-Free Range", desc: "Genuine sugar-free chikki and mithai, made on request." }),
  categoryCard({ href: "/bulk-orders/", icon: "gift", title: "Gift Hampers &amp; Bulk", desc: "Diwali boxes, wedding orders and corporate gifting, planned ahead." }),
];

const main = `
<section class="hero">
  <div class="container hero__grid">
    <div>
      <p class="eyebrow">Udhna &amp; City Light, Surat</p>
      <h1>Surat's favourite mithai, namkeen &amp; farsan<span class="hero__gu" lang="gu">મીઠાઈ, નમકીન અને ફરસાણ</span></h1>
      <p class="hero__lede">Fresh sweets, hand-fried farsan and a full chaat counter — made in our own Udhna kitchen since 1993, and served 100% pure vegetarian across two outlets in Surat.</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="tel:${PHONE_UDHNA_TEL}">${svgSprite("phone")} Call Now</a>
        <a class="btn btn--accent" href="${waLink("Hi Dharti Namkeen &amp; Sweets, I'd like to know more.")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} WhatsApp</a>
      </div>
      ${statusBadgeHTML("Checking today's hours…")}
    </div>
    <div class="hero__media">
      <img src="/img/placeholder-4x3.svg" alt="Assorted mithai and namkeen at Dharti Namkeen &amp; Sweets" width="800" height="600" loading="eager" decoding="async">
    </div>
  </div>
</section>

<section class="trust-strip">
  <div class="container">
    <ul class="trust-strip__list">
      <li><strong>30+ yrs</strong> in business</li>
      <li><strong>2</strong> outlets in Surat</li>
      <li><strong>4.2★</strong> <a href="https://www.google.com/search?q=Dharti+Namkeen+%26+Sweets+Udhna+Surat" target="_blank" rel="noopener noreferrer">on Google</a></li>
      <li><strong>100%</strong> pure vegetarian</li>
      <li><strong>FSSAI</strong> licensed</li>
      <li><strong>Own</strong> manufacturing unit</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">What we're known for</p>
      <h2>One shop, the whole spread</h2>
      <p>From everyday namkeen to wedding-hamper mithai, everything is made in-house at our Udhna unit. Prices aren't listed online — ask in-store or on WhatsApp for today's rate.</p>
    </div>
    <div class="grid grid--3">
      ${categories.join("\n      ")}
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Bestsellers</p>
      <h2>What customers ask for first</h2>
    </div>
    <div class="grid grid--4">
      ${bestsellers.join("\n      ")}
    </div>
  </div>
</section>

<!-- FESTIVAL BANNER — swap or delete this single block for the current
     festival; confirm the calendar with the owner before publishing text
     as a firm claim. See PLAN.md §5.1.5. -->
<section class="section section--tight">
  <div class="container">
    <div class="panel cluster u-justify-between">
      <div>
        <p class="eyebrow">Festival &amp; season specials</p>
        <h3 class="u-m-0">Diwali, Chandi Padvo &amp; winter Khajur Pak</h3>
        <p class="u-mt-xs">Seasonal mithai and gift hampers are available around major festivals — ask us what's ready this week.</p>
      </div>
      <a class="btn btn--ghost" href="/products/festive/">See festive range ${svgSprite("arrow")}</a>
    </div>
  </div>
</section>
<!-- END FESTIVAL BANNER -->

<section class="section">
  <div class="container">
    <div class="panel cluster u-justify-between panel--primary">
      <div>
        <p class="eyebrow">For weddings, festivals &amp; offices</p>
        <h3 class="u-m-0">Bulk orders &amp; corporate gifting</h3>
        <p class="u-mt-xs">Diwali hampers, wedding boxes and wholesale supply for shops and distributors — planned with advance notice.</p>
      </div>
      <a class="btn btn--primary" href="/bulk-orders/">Bulk order details ${svgSprite("arrow")}</a>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Reputation</p>
      <h2>What Surat says about us</h2>
      <p>We link straight to our public review profiles rather than picking quotes for you — ratings shown are correct as of when this page was last checked.</p>
    </div>
    <div class="grid grid--3">
      <div class="review-card">
        <div class="review-card__stars" aria-hidden="true">★★★★★</div>
        <p>Google — 4.2★ from roughly 3,000+ reviews at the Udhna outlet. Recurring themes: wide variety, tasty chaat and samosas, and helpful staff.</p>
        <footer><a class="rating-link" href="https://www.google.com/search?q=Dharti+Namkeen+%26+Sweets+Udhna+Surat" target="_blank" rel="noopener noreferrer">Read reviews on Google ${svgSprite("arrow")}</a></footer>
      </div>
      <div class="review-card">
        <div class="review-card__stars" aria-hidden="true">★★★★★</div>
        <p>Justdial — 4.3★ from customers across both listings. Most-mentioned: quality and freshness of the mithai counter.</p>
        <footer><a class="rating-link" href="https://www.justdial.com/Surat/Dharti-Namkeen-And-Sweets" target="_blank" rel="noopener noreferrer">Read reviews on Justdial ${svgSprite("arrow")}</a></footer>
      </div>
      <div class="review-card">
        <div class="review-card__stars" aria-hidden="true">★★★★★</div>
        <p>Honest note: a few reviews mention prices on the higher side and limited parking at Udhna. We'd rather tell you than hide it — see <a href="/outlets/">Outlets &amp; parking</a>.</p>
        <footer>Straight from the reviews, not cherry-picked</footer>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Find us</p>
      <h2>Two outlets in Surat</h2>
    </div>
    <div class="grid grid--2">
      <div class="outlet-card">
        <h3>Udhna — main outlet &amp; factory</h3>
        <dl>
          <dt>Address</dt><dd>${ADDRESS_UDHNA.street}, ${ADDRESS_UDHNA.locality} ${ADDRESS_UDHNA.postal}</dd>
          <dt>Hours</dt><dd>9:00 am – 9:30 pm, daily</dd>
          <dt>Phone</dt><dd>${PHONE_UDHNA_DISPLAY}</dd>
        </dl>
        <div class="outlet-card__actions">
          <a class="btn btn--primary btn--sm" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(ADDRESS_UDHNA.street + ", " + ADDRESS_UDHNA.locality)}" target="_blank" rel="noopener noreferrer">${svgSprite("directions")} Directions</a>
          <a class="btn btn--ghost btn--sm" href="tel:${PHONE_UDHNA_TEL}">${svgSprite("phone")} Call</a>
        </div>
      </div>
      <div class="outlet-card">
        <h3>City Light / Althan</h3>
        <dl>
          <dt>Address</dt><dd>${ADDRESS_CITYLIGHT.street}, ${ADDRESS_CITYLIGHT.locality} ${ADDRESS_CITYLIGHT.postal}</dd>
          <dt>Landmark</dt><dd>Opposite Anuvrat Dwar</dd>
          <dt>Hours</dt><dd>9:15 am – 10:00 pm, daily</dd>
        </dl>
        <div class="outlet-card__actions">
          <a class="btn btn--primary btn--sm" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(ADDRESS_CITYLIGHT.street + ", " + ADDRESS_CITYLIGHT.locality)}" target="_blank" rel="noopener noreferrer">${svgSprite("directions")} Directions</a>
          <a class="btn btn--ghost btn--sm" href="/outlets/">More details</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

page({
  route: "/",
  path: "index.html",
  title: "Dharti Namkeen &amp; Sweets — Mithai, Namkeen &amp; Farsan in Surat",
  description: "Fresh sweets, namkeen and farsan from Dharti Namkeen &amp; Sweets, Udhna &amp; City Light, Surat. Own manufacturing unit, bulk &amp; festival orders, no online prices — call or WhatsApp.",
  activeRoute: "home",
  extraHead: organizationJsonLd() + websiteJsonLd() + localBusinessJsonLd(),
  bodyScripts: ["open-now.js"],
  main,
});
