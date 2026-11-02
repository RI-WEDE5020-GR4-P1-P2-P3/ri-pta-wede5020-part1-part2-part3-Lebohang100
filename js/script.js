document.addEventListener("DOMContentLoaded", () => {
  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      if (answer) answer.hidden = isOpen;

      const icon = button.querySelector("span");
      if (icon) icon.textContent = isOpen ? "+" : "−";
    });
  });

  // Programme search
  const search = document.querySelector("#programmeSearch");
  const cards = [...document.querySelectorAll("[data-programme]")];
  const count = document.querySelector("#programmeCount");

  function filterProgrammes() {
    if (!search) return;

    const term = search.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const matches = card.textContent.toLowerCase().includes(term);
      card.hidden = !matches;
      if (matches) visible++;
    });

    if (count) {
      count.textContent = `${visible} programme${visible === 1 ? "" : "s"} found`;
    }
  }

  if (search) {
    search.addEventListener("input", filterProgrammes);
    filterProgrammes();
  }

  // Client-side validation before opening the visitor's email app
  ["enquiryForm", "contactForm"].forEach((formId) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", (event) => {
      const status = form.querySelector('[role="status"]');

      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        if (status) status.textContent =
          "Please check the highlighted fields and complete the form.";
        return;
      }

      if (status) {
        status.textContent =
          "Your email app should open with the message prepared. Please review and send it there.";
      }
    });
  });
});s