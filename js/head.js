/* Sets a `js` class on <html> pre-paint so the no-JS layout never flashes.
   Loaded synchronously in <head>, kept intentionally tiny (~90 B). */
document.documentElement.classList.add("js");
