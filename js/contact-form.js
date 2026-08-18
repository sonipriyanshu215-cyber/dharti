/* Progressive enhancement for the contact form: the plain <form> already
   POSTs to Web3Forms and works with JS disabled (it redirects back to
   /contact/#sent on success, revealed by the #sent:target rule in
   main.css). With JS available, submit via fetch instead so the visitor
   never leaves the page, and show the result inline. */
(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;
  var status = form.querySelector("[data-form-status]");
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (submitBtn) submitBtn.disabled = true;
    if (status) {
      status.textContent = "Sending…";
      status.className = "form-note";
    }

    fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (!data.success) throw new Error(data.message || "Submission failed");
        form.reset();
        if (status) {
          status.textContent = "Thanks — your message has been sent. We'll reply by phone, WhatsApp or email.";
          status.className = "form-note form-note--success";
        }
      })
      .catch(function () {
        if (status) {
          status.textContent = "Something went wrong sending that. Please call or WhatsApp us instead.";
          status.className = "form-note form-note--error";
        }
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();
