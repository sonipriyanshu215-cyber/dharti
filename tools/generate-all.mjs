#!/usr/bin/env node
/* Runs every page generator in tools/generate/. Each module calls page()
 * itself as a side effect of being imported. Re-run this after editing any
 * generator to regenerate the committed static HTML — see README.md. */
import "./generate/home.mjs";
import "./generate/about.mjs";
import "./generate/products.mjs";
import "./generate/bulk-orders.mjs";
import "./generate/outlets.mjs";
import "./generate/gallery.mjs";
import "./generate/contact.mjs";
import "./generate/faq.mjs";
import "./generate/legal.mjs";
import "./generate/not-found.mjs";

console.log("\nAll pages generated.");
