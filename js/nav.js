/* Mobile nav: accessible toggle, Esc to close, closes on outside click.
   With JS disabled the nav-list is shown flat (see main.css) and this file
   never runs, so the site remains fully navigable. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var list = document.querySelector(".nav-list");
  if (!toggle || !list) return;

  function closeMenu() {
    list.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    list.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    var isOpen = list.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && list.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!list.classList.contains("is-open")) return;
    if (list.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  var mq = window.matchMedia("(min-width: 900px)");
  mq.addEventListener("change", function () {
    closeMenu();
  });
})();
