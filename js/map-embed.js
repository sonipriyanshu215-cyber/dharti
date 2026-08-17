/* Click-to-load Google Maps embed (PLAN.md §7.5). Nothing from Google loads
   until the visitor explicitly asks for it, so first paint has no third-party
   cookies or requests. Plain "Get directions" links need no embed at all and
   work with JS disabled. */
(function () {
  var buttons = document.querySelectorAll("[data-map-embed-trigger]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var wrapper = button.closest(".map-embed");
      var src = button.getAttribute("data-map-src");
      if (!wrapper || !src) return;
      var iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.title = button.getAttribute("data-map-title") || "Map";
      wrapper.innerHTML = "";
      wrapper.appendChild(iframe);
    });
  });
})();
