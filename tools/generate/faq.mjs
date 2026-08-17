import { page, breadcrumbs, breadcrumbJsonLd, jsonLdScript, waLink, svgSprite } from "../build-pages.mjs";

const trail = [{ label: "Home", href: "/" }, { label: "FAQ" }];

const faqs = [
  {
    q: "Do you make sugar-free sweets?",
    a: "Yes — we make a genuine sugar-free range including sugar-free anjeer and khajur chikki, plus selected sugar-free mithai available on request. See the Festive &amp; Sugar-Free page.",
  },
  {
    q: "Do you take bulk or wedding orders, and how much notice do you need?",
    a: "Yes, we regularly supply weddings, festivals and corporate gifting. Message us your date and quantity on WhatsApp and we'll advise on timing directly — the earlier you reach out around Diwali or wedding season, the more options you'll have.",
  },
  {
    q: "Is everything at Dharti Namkeen &amp; Sweets pure vegetarian?",
    a: "Yes — the full range at Dharti Namkeen &amp; Sweets is 100% pure vegetarian.",
  },
  {
    q: "Do you deliver, or are you on Zomato / Swiggy?",
    a: "We're focused on our two physical outlets — call or WhatsApp us to check on delivery for your area.",
  },
  {
    q: "Can you ship packed namkeen outside Surat?",
    a: "Message us on WhatsApp with your location and we'll let you know what's possible for packed namkeen outside Surat.",
  },
  {
    q: "What's the shelf life of your packed namkeen?",
    a: "Our packed namkeen is sealed for freshness — ask us in-store or on WhatsApp for the shelf life of a specific item.",
  },
  {
    q: "Do you give GST invoices for bulk or wholesale orders?",
    a: "Ask us when you place a bulk or wholesale enquiry and we'll sort out an invoice.",
  },
  {
    q: "Is there parking at your outlets?",
    a: "Parking is limited right at the Udhna outlet, so allow a few extra minutes to find a spot, especially at peak times.",
  },
  {
    q: "Do you make festival gift hampers?",
    a: "Yes, including Diwali corporate boxes and wedding/festival hampers — see Bulk &amp; Corporate Orders for how to enquire.",
  },
  {
    q: "Why don't you show prices on the website?",
    a: "Prices change with ingredient cost and season. Rather than publish a price list that goes stale, we ask you to call or WhatsApp for today's rate — the most common complaint in reviews is exactly this kind of stale pricing, and we'd rather avoid it.",
  },
];

const faqList = faqs
  .map(
    (f) => `<details class="faq-item">
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>`
  )
  .join("\n      ");

const faqJsonLd = jsonLdScript({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // f.q / f.a are authored for HTML display and may contain "&amp;" — decode
  // back to a literal "&" for JSON-LD, which must not contain HTML entities.
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q.replace(/&amp;/g, "&"),
    acceptedAnswer: { "@type": "Answer", text: f.a.replace(/&amp;/g, "&") },
  })),
});

const main = `
${breadcrumbs(trail)}
<header class="container section--tight">
  <p class="eyebrow">Common questions</p>
  <h1>Frequently Asked Questions</h1>
  <p class="hero__lede">Everything you need to know before you visit or place an order.</p>
</header>
<section class="section">
  <div class="container">
    <div class="faq-list">
      ${faqList}
    </div>
    <div class="panel u-mt-lg">
      <h3>Still have a question?</h3>
      <p class="u-mb-md">Message us directly — we're quick to reply on WhatsApp during opening hours.</p>
      <a class="btn btn--accent" href="${waLink("Hi, I have a question that's not on your FAQ page: ")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} Ask on WhatsApp</a>
    </div>
  </div>
</section>
`;

page({
  route: "/faq/",
  path: "faq/index.html",
  title: "FAQ | Dharti Namkeen &amp; Sweets",
  description: "Frequently asked questions about Dharti Namkeen &amp; Sweets, Surat — sugar-free sweets, bulk orders, delivery, shipping, GST invoices and parking.",
  activeRoute: "faq",
  extraHead: breadcrumbJsonLd(trail, "/faq/") + faqJsonLd,
  main,
});
