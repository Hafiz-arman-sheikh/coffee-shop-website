// ==============================
// Mobile Navbar
// ==============================

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });
}


// ==============================
// Smooth Scroll
// ==============================

const allLinks = document.querySelectorAll("a[href]");

allLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const linkURL = new URL(link.href, window.location.href);

        const samePage =
            linkURL.pathname === window.location.pathname;

        // Smooth scroll for links like #products

        if (samePage && linkURL.hash) {

            const targetSection =
                document.querySelector(linkURL.hash);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                navLinks?.classList.remove("open");

            }

        }

        // Fade animation when moving to another HTML page

        else if (linkURL.origin === window.location.origin) {

            event.preventDefault();

            document.body.classList.add("page-leave");

            setTimeout(function () {

                window.location.href = linkURL.href;

            }, 200);

        }

    });

});


// ==============================
// Buy Now Modal
// ==============================

const modal = document.querySelector(".modal");
const modalProduct = document.querySelector("#modal-product");
const selectedProduct = document.querySelector("#selected-product");

const buyButtons = document.querySelectorAll("[data-buy]");
const closeButtons = document.querySelectorAll("[data-close-modal]");

function openModal(productName) {

    if (!modal) {
        return;
    }

    modalProduct.textContent = productName;
    selectedProduct.value = productName;

    modal.classList.add("open");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}

function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


// Open modal when Buy Now button is clicked

buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.dataset.buy;

        openModal(productName);

    });

});


// Close modal

closeButtons.forEach(function (button) {

    button.addEventListener("click", closeModal);

});


// Close modal with Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


// ==============================
// Order Form
// ==============================

const orderForm = document.querySelector(".order-form");
const toast = document.querySelector(".toast");

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2800);

}

if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();

        closeModal();

        showToast("Order details ready — demo mode");

        orderForm.reset();

    });

}


// ==============================
// Contact Form
// ==============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Message prepared — demo mode");

        contactForm.reset();

    });

}


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(function (element) {

    observer.observe(element);

});


// ==============================
// Automatic Current Year
// ==============================

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

    element.textContent = new Date().getFullYear();

});