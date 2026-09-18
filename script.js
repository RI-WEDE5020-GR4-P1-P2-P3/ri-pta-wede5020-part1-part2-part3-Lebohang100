/* =========================================
   COTLANDS WEBSITE
   ===================================== */


/* ---------- CURRENT YEAR ---------- */

const yearElements =
    document.querySelectorAll("#currentYear");

yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});


/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle("open");

            if (mainNav.classList.contains("open")) {

                menuToggle.textContent = "✕";

            } else {

                menuToggle.textContent = "☰";

            }

        }
    );

}


/* ---------- FAQ ---------- */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener(
        "click",
        function () {

            const faqItem =
                question.parentElement;

            faqItem.classList.toggle("open");

            const icon =
                question.querySelector("span");

            if (faqItem.classList.contains("open")) {

                icon.textContent = "−";

            } else {

                icon.textContent = "+";

            }

        }
    );

});


/* ---------- FAQ SEARCH ---------- */

const faqSearch =
    document.getElementById("faqSearch");


if (faqSearch) {

    faqSearch.addEventListener(
        "input",
        function () {

            const searchTerm =
                faqSearch.value.toLowerCase();

            const faqItems =
                document.querySelectorAll(".faq-item");


            faqItems.forEach(function (item) {

                const question =
                    item
                        .querySelector(".faq-question")
                        .textContent
                        .toLowerCase();

                const answer =
                    item
                        .querySelector(".faq-answer")
                        .textContent
                        .toLowerCase();


                if (
                    question.includes(searchTerm) ||
                    answer.includes(searchTerm)
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        }
    );

}


/* ---------- DONATION ---------- */

const donationButtons =
    document.querySelectorAll(".donation-btn");

const customAmount =
    document.getElementById("customAmount");

const selectedAmount =
    document.getElementById("selectedAmount");

const continueDonation =
    document.getElementById("continueDonation");

const donationMessage =
    document.getElementById("donationMessage");


let donationValue = 0;


function updateDonation(amount) {

    donationValue =
        Number(amount);

    if (selectedAmount) {

        selectedAmount.textContent =
            "R" +
            donationValue.toLocaleString(
                "en-ZA"
            );

    }

}


donationButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            donationButtons.forEach(
                function (btn) {

                    btn.classList.remove(
                        "selected"
                    );

                }
            );


            button.classList.add("selected");


            const amount =
                button.dataset.amount;

            updateDonation(amount);


            if (customAmount) {

                customAmount.value = "";

            }

        }
    );

});


if (customAmount) {

    customAmount.addEventListener(
        "input",
        function () {

            donationButtons.forEach(
                function (btn) {

                    btn.classList.remove(
                        "selected"
                    );

                }
            );


            updateDonation(
                customAmount.value || 0
            );

        }
    );

}


if (continueDonation) {

    continueDonation.addEventListener(
        "click",
        function () {

            if (donationValue <= 0) {

                donationMessage.textContent =
                    "Please select or enter a donation amount.";

                return;

            }


            donationMessage.textContent =
                "Thank you. Your donation of R" +
                donationValue.toLocaleString(
                    "en-ZA"
                ) +
                " has been selected. This is a demonstration prototype.";

        }
    );

}


/* ---------- GET INVOLVED MODAL ---------- */

const modal =
    document.getElementById("enquiryModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const enquiryForm =
    document.getElementById("enquiryForm");

const modalButtons =
    document.querySelectorAll(".open-modal");


modalButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const type =
                button.dataset.type;

            if (modalTitle) {

                modalTitle.textContent =
                    type + " Enquiry";

            }


            if (modal) {

                modal.classList.add("show");

            }

        }
    );

});


if (modalClose) {

    modalClose.addEventListener(
        "click",
        function () {

            modal.classList.remove("show");

        }
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        }
    );

}


if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you for your enquiry. " +
                "This form is currently a demonstration prototype."
            );

            enquiryForm.reset();

            modal.classList.remove("show");

        }
    );

}


/* ---------- CONTACT FORM ---------- */

const contactForm =
    document.getElementById("contactForm");

const contactMessageStatus =
    document.getElementById(
        "contactMessageStatus"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            contactMessageStatus.textContent =
                "Thank you. Your enquiry has been captured in this prototype.";


            contactForm.reset();

        }
    );

}


/* ---------- RESOURCE BUTTONS ---------- */

const resourceButtons =
    document.querySelectorAll(
        ".resource-button"
    );


resourceButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            alert(
                "This resource is a demonstration item. " +
                "A production website would connect this button " +
                "to the appropriate downloadable resource."
            );

        }
    );

});