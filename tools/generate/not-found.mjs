import { page, svgSprite, waLink } from "../build-pages.mjs";

const main = `
<section class="container not-found">
  <p class="not-found__code" aria-hidden="true">404</p>
  <h1>Page not found</h1>
  <p class="hero__lede u-mx-auto">The page you're looking for has moved or doesn't exist. Try one of these instead:</p>
  <div class="hero__actions u-justify-center">
    <a class="btn btn--primary" href="/">Home</a>
    <a class="btn btn--ghost" href="/products/">Products</a>
    <a class="btn btn--ghost" href="/outlets/">Outlets</a>
    <a class="btn btn--accent" href="${waLink("Hi, I followed a broken link on your website and couldn't find the page I wanted.")}" target="_blank" rel="noopener noreferrer">${svgSprite("chat")} Ask us on WhatsApp</a>
  </div>
</section>
`;

page({
  route: "/404.html",
  path: "404.html",
  title: "Page Not Found | Dharti Namkeen &amp; Sweets",
  description: "The page you're looking for doesn't exist. Return to the Dharti Namkeen &amp; Sweets home page or contact us directly.",
  activeRoute: "",
  robots: "noindex, follow",
  main,
});
