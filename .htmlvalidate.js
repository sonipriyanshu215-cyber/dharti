// Dev-only config for html-validate (PLAN.md §4/§10 phase 5).
// Not a dependency of the site itself — run ad hoc with:
//   npx html-validate "**/index.html" "404.html"
module.exports = {
  extends: ["html-validate:recommended"],
  rules: {
    // False positive: every visible phone number is already written with
    // &nbsp; between groups (see PHONE_UDHNA_DISPLAY / WHATSAPP_DISPLAY in
    // tools/build-pages.mjs). This rule also matches digit-space-digit runs
    // inside inline SVG `d` path data on <a href="tel:..."> buttons, which
    // is coordinate data, not a phone number — off rather than noisy.
    "tel-non-breaking": "off",
  },
};
