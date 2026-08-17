/* "Open now / Closed" badge, computed client-side from the hours encoded in
   the badge's own data attributes — no server, no fetch.
   Markup contract (see partials / home page):
     <p class="status-badge" data-status-badge
        data-open="09:30" data-close="21:30" data-days="0,1,2,3,4,5,6">
       <span class="status-badge__dot" aria-hidden="true"></span>
       <span data-status-text>Checking hours…</span>
     </p>
   data-days uses JS getDay() numbering: 0 = Sunday … 6 = Saturday.
   If JS is disabled the badge keeps its static fallback text from the HTML. */
(function () {
  var badges = document.querySelectorAll("[data-status-badge]");
  if (!badges.length) return;

  function toMinutes(hhmm) {
    var parts = hhmm.split(":");
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  }

  badges.forEach(function (badge) {
    var openAt = badge.getAttribute("data-open");
    var closeAt = badge.getAttribute("data-close");
    var days = (badge.getAttribute("data-days") || "0,1,2,3,4,5,6")
      .split(",")
      .map(function (d) { return parseInt(d, 10); });
    var textEl = badge.querySelector("[data-status-text]");
    if (!openAt || !closeAt || !textEl) return;

    var now = new Date();
    var nowMinutes = now.getHours() * 60 + now.getMinutes();
    var isOpenDay = days.indexOf(now.getDay()) !== -1;
    var isOpenTime = nowMinutes >= toMinutes(openAt) && nowMinutes < toMinutes(closeAt);
    var isOpen = isOpenDay && isOpenTime;

    badge.setAttribute("data-status", isOpen ? "open" : "closed");
    textEl.textContent = isOpen
      ? "Open now · closes " + formatTime(closeAt)
      : "Closed now · opens " + formatTime(openAt);
  });

  function formatTime(hhmm) {
    var parts = hhmm.split(":");
    var h = parseInt(parts[0], 10);
    var m = parts[1];
    var suffix = h >= 12 ? "pm" : "am";
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m === "00" ? "" : ":" + m) + " " + suffix;
  }
})();
