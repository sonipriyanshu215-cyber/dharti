/* Gallery lightbox: focus-trapped, keyboard accessible (Esc, arrows, Tab loop).
   Progressive enhancement only — /gallery/ works as a plain image grid
   (each thumbnail already links to the same file) with JS disabled. */
(function () {
  var triggers = Array.prototype.slice.call(document.querySelectorAll(".gallery-grid__item"));
  var lightbox = document.querySelector(".lightbox");
  if (!triggers.length || !lightbox) return;

  var img = lightbox.querySelector("[data-lightbox-img]");
  var caption = lightbox.querySelector("[data-lightbox-caption]");
  var closeBtn = lightbox.querySelector(".lightbox__close");
  var prevBtn = lightbox.querySelector(".lightbox__prev");
  var nextBtn = lightbox.querySelector(".lightbox__next");
  var currentIndex = 0;
  var lastFocused = null;

  function openAt(index) {
    currentIndex = (index + triggers.length) % triggers.length;
    var trigger = triggers[currentIndex];
    var fullSrc = trigger.getAttribute("data-full") || trigger.querySelector("img").src;
    var alt = trigger.querySelector("img").alt || "";
    img.src = fullSrc;
    img.alt = alt;
    caption.textContent = alt;
    lastFocused = document.activeElement;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    img.src = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(event) {
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowRight") {
      openAt(currentIndex + 1);
    } else if (event.key === "ArrowLeft") {
      openAt(currentIndex - 1);
    } else if (event.key === "Tab") {
      trapFocus(event);
    }
  }

  function trapFocus(event) {
    var focusable = lightbox.querySelectorAll("button");
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  triggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      openAt(index);
    });
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", function () { openAt(currentIndex - 1); });
  nextBtn.addEventListener("click", function () { openAt(currentIndex + 1); });
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) close();
  });
})();
