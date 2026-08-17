import { page, breadcrumbs, breadcrumbJsonLd } from "../build-pages.mjs";

/* ---------------------------------------------------------------------- *
 * Privacy Policy — /privacy-policy/
 * ---------------------------------------------------------------------- */
const privacyTrail = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

const privacyMain = `
${breadcrumbs(privacyTrail)}
<header class="container section--tight">
  <p class="eyebrow">Legal</p>
  <h1>Privacy Policy</h1>
  <p class="hero__lede">Plain-language summary: this website does not collect any personal data.</p>
</header>
<section class="section">
  <div class="container prose">
    <h2>What this website collects</h2>
    <p>This website is a static, informational brochure site for Dharti Namkeen &amp; Sweets. In its current version it:</p>
    <ul>
      <li>Has <strong>no contact or enquiry form</strong> — every "Contact" or "Enquire" action opens your own phone app or WhatsApp, and any message you choose to send goes directly to us through WhatsApp or your phone carrier, not through this website.</li>
      <li>Sets <strong>no cookies</strong> of its own.</li>
      <li>Uses <strong>no advertising or cross-site tracking</strong>, and includes no third-party tracking pixels.</li>
      <li>Runs <strong>no server-side code and has no database</strong> — there is nowhere on our side for personal data submitted through this site to be stored, because none is collected.</li>
    </ul>
    <p>If we ever add an enquiry form or enable analytics in a future version of this site, this policy will be rewritten first to describe exactly what is collected, why, how long it is kept, and how to request its deletion — consistent with India's Digital Personal Data Protection Act, 2023 (DPDP Act).</p>

    <h2>Links to other services</h2>
    <p>This site links out to services we don't control, including Google Maps, WhatsApp, Instagram, Facebook, LinkedIn, Zomato/Justdial listings, and your device's own phone dialler. Those services have their own privacy practices, which we encourage you to review separately. Our Google Maps embed only loads after you click "Load interactive map" — nothing from Google Maps loads automatically when you open a page.</p>

    <h2>Grievance / contact</h2>
    <p>For any question about this policy, or about information relating to Dharti Namkeen &amp; Sweets published on this site, contact us via the details on our <a href="/contact/">Contact page</a>.</p>

    <h2>Changes to this policy</h2>
    <p>We will update the "last reviewed" date below whenever this policy changes in a meaningful way.</p>
    <p><em>Last reviewed: 2026-08-17.</em></p>
  </div>
</section>
`;

page({
  route: "/privacy-policy/",
  path: "privacy-policy/index.html",
  title: "Privacy Policy | Dharti Namkeen &amp; Sweets",
  description: "Dharti Namkeen &amp; Sweets privacy policy: this website collects no personal data, sets no cookies, and uses no advertising or cross-site tracking.",
  activeRoute: "privacy-policy",
  extraHead: breadcrumbJsonLd(privacyTrail, "/privacy-policy/"),
  main: privacyMain,
});

/* ---------------------------------------------------------------------- *
 * Terms of Use — /terms/
 * ---------------------------------------------------------------------- */
const termsTrail = [{ label: "Home", href: "/" }, { label: "Terms of Use" }];

const termsMain = `
${breadcrumbs(termsTrail)}
<header class="container section--tight">
  <p class="eyebrow">Legal</p>
  <h1>Terms of Use</h1>
</header>
<section class="section">
  <div class="container prose">
    <h2>About this website</h2>
    <p>This website is operated by Dharti Food Products Private Limited (trading as "Dharti Namkeen &amp; Sweets"), CIN U15400GJ2008PTC054244, for the purpose of providing information about our shop, products and how to reach us. It is informational only — there is no online ordering, cart or payment facility on this site.</p>

    <h2>Content disclaimer</h2>
    <ul>
      <li><strong>Product availability, weight and appearance may vary</strong> from what is shown or described here. Photographs on this site are indicative and, where marked, are placeholders pending original photography.</li>
      <li><strong>No prices are published on this website.</strong> Please call or message us on WhatsApp for current rates; prices quoted verbally or in-store take precedence over any figure implied elsewhere.</li>
      <li>Ratings and review excerpts shown are linked to their original public source (Google, Justdial) rather than reproduced as unverifiable quotes.</li>
    </ul>

    <h2>Intellectual property</h2>
    <p>The Dharti Namkeen &amp; Sweets name, and all photography and content once published on this site, belong to Dharti Food Products Private Limited unless otherwise credited. Do not reproduce photography or copy text from this site without permission.</p>

    <h2>External links</h2>
    <p>Links to Google Maps, WhatsApp, social media profiles and third-party review or delivery platforms are provided for convenience. We are not responsible for the content or availability of those external sites.</p>

    <h2>Limitation</h2>
    <p>Information on this site is provided in good faith and is not intended as a substitute for confirming details directly with us, especially for time-sensitive matters such as bulk orders, festival hours, or allergen and dietary questions.</p>

    <h2>Copyright</h2>
    <p>&copy; Dharti Food Products Private Limited. All rights reserved.</p>
    <p><em>Last reviewed: 2026-08-17.</em></p>
  </div>
</section>
`;

page({
  route: "/terms/",
  path: "terms/index.html",
  title: "Terms of Use | Dharti Namkeen &amp; Sweets",
  description: "Terms of use and content disclaimer for the Dharti Namkeen &amp; Sweets website — an informational site with no online ordering or published prices.",
  activeRoute: "terms",
  extraHead: breadcrumbJsonLd(termsTrail, "/terms/"),
  main: termsMain,
});
