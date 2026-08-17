/* Namkeen category filter — progressive enhancement only. Filters
   already-rendered cards by their data-tag attribute; with JS disabled the
   filter bar is hidden (see main.css `.js .filter-bar`) and every card
   stays visible and crawlable. */
(function () {
  var bar = document.querySelector("[data-filter-bar]");
  var cards = document.querySelectorAll("[data-filter-card]");
  if (!bar || !cards.length) return;

  var chips = bar.querySelectorAll(".filter-chip");

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      chip.setAttribute("aria-pressed", "true");
      var tag = chip.getAttribute("data-filter");

      cards.forEach(function (card) {
        var tags = (card.getAttribute("data-filter-card") || "").split(" ");
        var show = tag === "all" || tags.indexOf(tag) !== -1;
        card.hidden = !show;
      });
    });
  });
})();
