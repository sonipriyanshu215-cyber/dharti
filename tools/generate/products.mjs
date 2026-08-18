import { page, breadcrumbs, breadcrumbJsonLd, productCard, categoryCard, svgSprite, waLink } from "../build-pages.mjs";

/* ---------------------------------------------------------------------- *
 * Hub page — /products/
 * ---------------------------------------------------------------------- */
const hubTrail = [{ label: "Home", href: "/" }, { label: "Products" }];

const hubCategories = [
  categoryCard({ href: "/products/sweets/", icon: "gift", title: "Sweets (Mithai)", desc: "Kaju katli, peda, barfi, rasmalai, ghari and more, made fresh daily." }),
  categoryCard({ href: "/products/namkeen/", icon: "bowl", title: "Namkeen &amp; Farsan", desc: "Gathiya, sev, chevda and bhel mixes — packed for home, gifting and wholesale." }),
  categoryCard({ href: "/products/farsan-chaat/", icon: "sparkle", title: "Chaat &amp; Hot Farsan", desc: "Samosa, kachori, puri and a full chaat counter, made to order." }),
  categoryCard({ href: "/products/bakery/", icon: "bakery", title: "Bakery &amp; Beverages", desc: "Cakes, biscuits, lassi and squash." }),
  categoryCard({ href: "/products/festive/", icon: "sparkle", title: "Festive &amp; Sugar-Free", desc: "Seasonal specials, gift hampers and a genuine sugar-free range." }),
];

const hubMain = `
${breadcrumbs(hubTrail)}
<header class="container section--tight">
  <p class="eyebrow">Our range</p>
  <h1>Everything we make, by category</h1>
  <p class="hero__lede">Browse the counter before you visit. We don't publish prices online — they change with ingredient cost and season, so please call or WhatsApp for today's rate.</p>
  <a class="btn btn--accent" href="${waLink("Hi, I'd like to ask about your products and today's rates.")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} Ask on WhatsApp</a>
</header>
<section class="section">
  <div class="container">
    <div class="grid grid--3">
      ${hubCategories.join("\n      ")}
    </div>
  </div>
</section>
<section class="section section--alt">
  <div class="container">
    <div class="panel">
      <h3>Gujarati names — coming soon</h3>
      <p class="u-m-0">We show product names in English first. Gujarati spellings for each item are being confirmed with the owner (PLAN.md §11.2) and will be added alongside once verified, so we don't publish an incorrect spelling in the meantime.</p>
    </div>
  </div>
</section>
`;

page({
  route: "/products/",
  path: "products/index.html",
  title: "Products — Sweets, Namkeen &amp; Farsan | Dharti Namkeen",
  description: "Browse the full Dharti Namkeen &amp; Sweets catalogue: mithai, namkeen &amp; farsan, chaat, bakery and festive specials. No prices online — enquire on WhatsApp.",
  activeRoute: "products",
  extraHead: breadcrumbJsonLd(hubTrail, "/products/"),
  main: hubMain,
});

/* ---------------------------------------------------------------------- *
 * Shared category-page builder
 * ---------------------------------------------------------------------- */
function categoryPage({ route, path, navRoute, title, description, eyebrow, heading, lede, cards, filterBar, extraNote }) {
  const trail = [{ label: "Home", href: "/" }, { label: "Products", href: "/products/" }, { label: heading }];
  const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">${eyebrow}</p>
  <h1>${heading}</h1>
  <p class="hero__lede">${lede}</p>
</header>
<section class="section">
  <div class="container">
${filterBar ? `    ${filterBar}\n` : ""}    <div class="grid grid--4">
      ${cards.join("\n      ")}
    </div>
${extraNote ? `    <div class="panel u-mt-lg">${extraNote}</div>\n` : ""}  </div>
</section>
<section class="section section--alt">
  <div class="container cluster u-justify-between">
    <p class="u-m-0 u-max-48">Don't see what you're after? Our full range is larger than any single page — ask in-store or on WhatsApp.</p>
    <a class="btn btn--primary" href="${waLink("Hi, I'd like to ask about an item that's not listed on your website.")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} Ask on WhatsApp</a>
  </div>
</section>
`;
  page({
    route,
    path,
    title,
    description,
    activeRoute: navRoute,
    extraHead: breadcrumbJsonLd(trail, route),
    bodyScripts: navRoute === "products-namkeen" ? ["filter.js"] : [],
    main,
  });
}

/* ---------------------------------------------------------------------- *
 * Sweets — /products/sweets/
 * ---------------------------------------------------------------------- */
categoryPage({
  route: "/products/sweets/",
  path: "products/sweets/index.html",
  navRoute: "products-sweets",
  title: "Sweets &amp; Mithai — Kaju Katli, Peda, Barfi | Dharti Namkeen",
  description: "Traditional Gujarati and pan-Indian mithai from Dharti Namkeen &amp; Sweets, Surat: kaju katli, mohan thal, peda, rasmalai, ghari and more.",
  eyebrow: "Mithai",
  heading: "Sweets",
  lede: "Made fresh in our Udhna kitchen with desi ghee — ask us which batch came out today.",
  cards: [
    productCard({ name: "Kaju Katli", image: "kaju-katli", desc: "Smooth cashew fudge diamonds with edible silver leaf.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Kesar Kaju Katli", image: "kesar-kaju-katli", desc: "Kaju katli laced with saffron for colour and aroma.", tags: ["veg"] }),
    productCard({ name: "Mohan Thal", image: "mohan-thal", desc: "Rich, ghee-roasted gram-flour fudge with nuts.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Motichoor Laddu", image: "motichoor-laddu", desc: "Fine boondi pearls bound in sugar syrup.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Bikaneri Laddu", image: "bikaneri-laddu", desc: "Coarser boondi laddu with a nuttier bite.", tags: ["veg"] }),
    productCard({ name: "Desi Ghee Boondi Laddu", image: "desi-ghee-boondi-laddu", desc: "Classic boondi laddu made with pure desi ghee.", tags: ["veg"] }),
    productCard({ name: "Dharti Special Peda", image: "dharti-special-peda", desc: "Our house peda recipe — soft, mildly sweet mawa.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Kesar Peda", image: "kesar-peda", desc: "Mawa peda flavoured with saffron and cardamom.", tags: ["veg"] }),
    productCard({ name: "Milk Cake", image: "milk-cake", desc: "Dense, caramelised milk sweet with a fudgy texture.", tags: ["veg"] }),
    productCard({ name: "Angoor Rabdi", image: "angoor-rabdi", desc: "Small paneer balls soaked in thickened, sweetened milk.", tags: ["veg"] }),
    productCard({ name: "Rasmalai", image: "rasmalai", desc: "Soft paneer discs in saffron-scented reduced milk.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Rasgulla", image: "rasgulla", desc: "Spongy paneer balls in light sugar syrup.", tags: ["veg"] }),
    productCard({ name: "Gulab Jamun", image: "gulab-jamun", desc: "Deep-fried mawa dumplings soaked in rose-cardamom syrup.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Pista Ghari", image: "pista-ghari", desc: "Surat's signature ghari — mawa, ghee and pistachio.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Kesar Ghari", image: "kesar-ghari", desc: "Ghari finished with saffron, traditionally made for Chandi Padvo.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Chocolate Barfi", image: "chocolate-barfi", desc: "A modern, chocolate-forward take on classic barfi.", tags: ["veg"] }),
    productCard({ name: "Kaju Jalebi", image: "kaju-jalebi", desc: "Cashew-paste jalebi — a richer alternative to the classic batter version.", tags: ["veg"] }),
    productCard({ name: "Shrikhand (Kesar Elaichi)", image: "shrikhand", desc: "Strained, sweetened yoghurt with saffron and cardamom.", tags: ["veg"] }),
  ],
  extraNote: "<h3>Also available</h3><p class=\"u-m-0\">Kaju roll, kaju anjeer roll, kaju apple, mawa diamond &amp; fruit cake, mawa kesar roll, raj bhog, kala &amp; lal jamun, rasbhari, balushahi, anjeer chakra &amp; kalakand, and Bengali sweets (sandesh, petha) — ask in-store.</p>",
});

/* ---------------------------------------------------------------------- *
 * Namkeen &amp; farsan — /products/namkeen/ (with client-side filter)
 * ---------------------------------------------------------------------- */
const namkeenFilterBar = `<div class="filter-bar" data-filter-bar role="group" aria-label="Filter namkeen by type">
      <button class="filter-chip" type="button" data-filter="all" aria-pressed="true">All</button>
      <button class="filter-chip" type="button" data-filter="sev" aria-pressed="false">Gathiya &amp; Sev</button>
      <button class="filter-chip" type="button" data-filter="chevda" aria-pressed="false">Chevda Mixes</button>
      <button class="filter-chip" type="button" data-filter="bhel" aria-pressed="false">Bhel &amp; Ready Mixes</button>
      <button class="filter-chip" type="button" data-filter="farali" aria-pressed="false">Upvas / Farali</button>
    </div>`;

categoryPage({
  route: "/products/namkeen/",
  path: "products/namkeen/index.html",
  navRoute: "products-namkeen",
  title: "Namkeen &amp; Farsan — Gathiya, Sev, Chevda | Dharti Namkeen",
  description: "Own-manufactured namkeen and packed farsan from Dharti Namkeen &amp; Sweets, Surat: gathiya, sev, chevda mixes, bhel and upvas farali packs.",
  eyebrow: "Own manufacture",
  heading: "Namkeen &amp; Packed Farsan",
  lede: "Made and packed at our Udhna unit — the same items we supply to shops and distributors. Use the filter to jump to a type.",
  filterBar: namkeenFilterBar,
  cards: [
    productCard({ name: "Bhavnagri Gathiya", image: "bhavnagri-gathiya", desc: "Thick, spiced besan gathiya.", tags: ["bestseller", "sev", "veg"] }),
    productCard({ name: "Tikha Gathiya", image: "tikha-gathiya", desc: "A spicier, thinner gathiya.", tags: ["sev", "veg"] }),
    productCard({ name: "Bhata Kani Gathiya", image: "bhata-kani-gathiya", desc: "Coarse-textured gathiya with a distinct bite.", tags: ["sev", "veg"] }),
    productCard({ name: "Sev Mamra", image: "sev-mamra", desc: "Fine sev mixed with puffed rice.", tags: ["sev", "veg"] }),
    productCard({ name: "Ratlami Sev", image: "ratlami-sev", desc: "Spiced, coarse sev in the Ratlam style.", tags: ["sev", "veg"] }),
    productCard({ name: "Chana Dal", image: "chana-dal", desc: "Roasted and salted split-gram namkeen.", tags: ["sev", "veg"] }),
    productCard({ name: "Chatpata Chana", image: "chatpata-chana", desc: "Tangy, spiced roasted chana.", tags: ["sev", "veg"] }),
    productCard({ name: "Navratna Mix Chevda", image: "navratna-mix-chevda", desc: "Nine-ingredient classic mixed chevda.", tags: ["bestseller", "chevda", "veg"] }),
    productCard({ name: "Makkai Chivda", image: "makkai-chivda", desc: "Flattened-corn chevda, lightly spiced.", tags: ["chevda", "veg"] }),
    productCard({ name: "Dal Muth Mix Chivda", image: "dal-muth-mix-chivda", desc: "Lentil-and-sev mixed chevda.", tags: ["chevda", "veg"] }),
    productCard({ name: "Bombay Mix", image: "bombay-mix", desc: "The classic all-purpose snack mix.", tags: ["chevda", "veg"] }),
    productCard({ name: "Nadiyadi Bhel", image: "nadiyadi-bhel", desc: "Sev, puffed rice and chutneys, Nadiad style.", tags: ["bhel", "veg"] }),
    productCard({ name: "Instant Bhel", image: "instant-bhel", desc: "Pack-and-go bhel mix for a quick snack.", tags: ["bhel", "veg"] }),
    productCard({ name: "Pudina Mix", image: "pudina-mix", desc: "Mint-forward crunchy snack mix.", tags: ["bhel", "veg"] }),
    productCard({ name: "Cheese Masala Mix", image: "cheese-masala-mix", desc: "A cheesy, spiced take on the classic mix.", tags: ["bhel", "veg"] }),
    productCard({ name: "Farali Mix (Upvas)", image: "farali-mix-upvas", desc: "Fasting-friendly mix for vrat days.", tags: ["farali", "veg"] }),
    productCard({ name: "Banana Wafers", image: "banana-wafers", desc: "Thin, crisp fried banana chips.", tags: ["farali", "veg"] }),
  ],
  extraNote: "<h3>Packed for home and business</h3><p class=\"u-m-0\">Retail packs including sealed 500 g packs are available; pack sizes and shelf life will be listed here once confirmed. For wholesale quantities, see <a href=\"/bulk-orders/\">Bulk &amp; corporate orders</a>.</p>",
});

/* ---------------------------------------------------------------------- *
 * Chaat &amp; hot farsan — /products/farsan-chaat/
 * ---------------------------------------------------------------------- */
categoryPage({
  route: "/products/farsan-chaat/",
  path: "products/farsan-chaat/index.html",
  navRoute: "products-farsan-chaat",
  title: "Chaat &amp; Hot Farsan — Samosa, Sev Puri | Dharti Namkeen",
  description: "Fresh-cooked chaat and hot farsan at Dharti Namkeen &amp; Sweets, Surat: samosa, kachori, papdi chaat, pani puri and more, made through the day.",
  eyebrow: "Made through the day",
  heading: "Chaat &amp; Hot Farsan",
  lede: "Our counter items — cooked fresh rather than held overnight. Availability can vary through the day.",
  cards: [
    productCard({ name: "Samosa", image: "samosa", desc: "Crisp pastry, spiced potato filling.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Dal Kachori", image: "dal-kachori", desc: "Flaky kachori stuffed with spiced lentils.", tags: ["veg"] }),
    productCard({ name: "Raj Kachori", image: "raj-kachori", desc: "Large crisp shell loaded with chaat toppings.", tags: ["veg"] }),
    productCard({ name: "Kachori Chaat", image: "kachori-chaat", desc: "Kachori broken up and dressed chaat-style.", tags: ["veg"] }),
    productCard({ name: "Samosa Chaat", image: "samosa-chaat", desc: "Samosa topped with yoghurt, chutneys and sev.", tags: ["veg"] }),
    productCard({ name: "Papdi Chaat", image: "papdi-chaat", desc: "Crisp papdi with potato, yoghurt and chutneys.", tags: ["veg"] }),
    productCard({ name: "Bhalla Chaat", image: "bhalla-chaat", desc: "Soft lentil dumplings in spiced yoghurt.", tags: ["veg"] }),
    productCard({ name: "Basket Chaat", image: "basket-chaat", desc: "Edible potato basket filled with chaat.", tags: ["veg"] }),
    productCard({ name: "Basket Cheese Chaat", image: "basket-cheese-chaat", desc: "Basket chaat finished with cheese.", tags: ["veg"] }),
    productCard({ name: "Sev Puri", image: "sev-puri", desc: "Crisp puris, chutneys, sev and vegetables.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Cheese Sev Puri", image: "cheese-sev-puri", desc: "Sev puri topped with cheese.", tags: ["veg"] }),
    productCard({ name: "Pani Puri", image: "pani-puri", desc: "Puris filled with spiced, tangy water.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Bombay Bhel", image: "bombay-bhel", desc: "Puffed rice bhel, Mumbai style.", tags: ["veg"] }),
    productCard({ name: "Delhi Chaat", image: "delhi-chaat", desc: "North Indian-style mixed chaat.", tags: ["veg"] }),
    productCard({ name: "Dahi Puri", image: "dahi-puri", desc: "Puri filled with yoghurt, chutney and sev.", tags: ["veg"] }),
    productCard({ name: "Khakhra Pizza", image: "khakhra-pizza", desc: "Crisp khakhra topped pizza-style.", tags: ["veg"] }),
  ],
});

/* ---------------------------------------------------------------------- *
 * Bakery &amp; beverages — /products/bakery/
 * ---------------------------------------------------------------------- */
categoryPage({
  route: "/products/bakery/",
  path: "products/bakery/index.html",
  navRoute: "products-bakery",
  title: "Bakery &amp; Beverages — Cakes, Lassi | Dharti Namkeen",
  description: "Cakes, biscuits, bakery items and cooling drinks from Dharti Namkeen &amp; Sweets, Surat, including malai, kesar and mango lassi.",
  eyebrow: "From the bakery counter",
  heading: "Bakery &amp; Beverages",
  lede: "A smaller range alongside the mithai and namkeen counters — good for a quick bite or a hot-day drink.",
  cards: [
    productCard({ name: "Assorted Cookies &amp; Biscuits", image: "assorted-cookies-biscuits", desc: "A rotating selection of house-baked biscuits.", tags: ["veg"] }),
    productCard({ name: "Fresh Cream Cakes", image: "fresh-cream-cakes", desc: "Cakes for birthdays and small celebrations.", tags: ["veg"] }),
    productCard({ name: "Pastries", image: "pastries", desc: "Individual pastries from the bakery counter.", tags: ["veg"] }),
    productCard({ name: "Bread &amp; Buns", image: "bread-buns", desc: "Everyday bakery bread and buns.", tags: ["veg"] }),
    productCard({ name: "Rusk", image: "rusk", desc: "Twice-baked, tea-time rusk.", tags: ["veg"] }),
    productCard({ name: "Malai Lassi", image: "malai-lassi", desc: "Thick, creamy sweet lassi.", tags: ["bestseller", "veg"] }),
    productCard({ name: "Kesar Lassi", image: "kesar-lassi", desc: "Lassi flavoured with saffron.", tags: ["veg"] }),
    productCard({ name: "Mango Lassi", image: "mango-lassi", desc: "Seasonal mango lassi.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Cold Coco", image: "cold-coco", desc: "Chilled chocolate milk drink.", tags: ["veg"] }),
    productCard({ name: "Fruit Squash &amp; Crush", image: "fruit-squash-crush", desc: "Bottled fruit squashes and crushes.", tags: ["veg"] }),
  ],
});

/* ---------------------------------------------------------------------- *
 * Festive &amp; sugar-free — /products/festive/
 * ---------------------------------------------------------------------- */
categoryPage({
  route: "/products/festive/",
  path: "products/festive/index.html",
  navRoute: "products-festive",
  title: "Festive Specials &amp; Sugar-Free Range | Dharti Namkeen",
  description: "Seasonal festival mithai, gift hampers and a genuine sugar-free range from Dharti Namkeen &amp; Sweets, Surat — Diwali, Chandi Padvo and more.",
  eyebrow: "Seasonal &amp; sugar-free",
  heading: "Festive Specials &amp; Sugar-Free Range",
  lede: "Festival mithai made around the calendar, plus a genuine sugar-free range available on request year-round.",
  cards: [
    productCard({ name: "Sugar Free Anjeer Chikki", image: "sugar-free-anjeer-chikki", desc: "Fig-and-nut chikki made without added sugar.", tags: ["sugar-free", "veg"] }),
    productCard({ name: "Sugar Free Khajur Chikki", image: "sugar-free-khajur-chikki", desc: "Date-and-nut chikki made without added sugar.", tags: ["sugar-free", "veg"] }),
    productCard({ name: "Sugar-Free Sweets (On Request)", image: "sugar-free-sweets-on-request", desc: "Selected mithai made sugar-free with advance notice.", tags: ["sugar-free", "veg"] }),
    productCard({ name: "Khajur Pak", image: "khajur-pak", desc: "Winter-special date-and-ghee sweet.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Kesar Ghari", image: "kesar-ghari", desc: "Traditionally made for Chandi Padvo.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Mohan Thal (Diwali)", image: "mohan-thal", desc: "A Diwali-season favourite, made in larger batches.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Ghughra / Mathiya", image: "ghughra-mathiya", desc: "Diwali-season fried snacks.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Modak", image: "modak", desc: "Made around Ganesh Chaturthi.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Diwali Gift Hampers", image: "diwali-gift-hampers", desc: "Curated mithai and namkeen boxes for gifting.", tags: ["seasonal", "veg"] }),
    productCard({ name: "Wedding &amp; Festival Boxes", image: "wedding-festival-boxes", desc: "Larger hamper options for functions and weddings.", tags: ["seasonal", "veg"] }),
  ],
  extraNote: "<h3>Confirm the calendar first</h3><p class=\"u-m-0\">Exact festival timing and seasonal availability are being confirmed with the owner (PLAN.md §11.2). For bulk hamper orders, see <a href=\"/bulk-orders/\">Bulk &amp; corporate orders</a>.</p>",
});
