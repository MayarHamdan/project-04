"use strict";

/* ========================================
   1. SELECT HTML ELEMENTS
======================================== */

const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");


/* ========================================
   2. THEME SWITCHER
======================================== */

// Apply the saved theme when the page loads.
function applySavedTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    } else {
        document.body.classList.remove("dark-theme");
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    }
}


// Switch between light and dark themes when the button is clicked.
function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    const isDarkTheme = document.body.classList.contains("dark-theme");

    if (isDarkTheme) {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light theme");

        localStorage.setItem("portfolio-theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");

        localStorage.setItem("portfolio-theme", "light");
    }
}


// Register the theme button event.
if (themeToggle) {
    applySavedTheme();
    themeToggle.addEventListener("click", toggleTheme);
}


/* ========================================
   3. CONTACT FORM
======================================== */

// Handle the form submission without reloading the page.
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Check that the required fields are not empty.
        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all fields.";
            return;
        }

        // Display a confirmation message.
        formStatus.textContent =
            "Thank you, " + name + "! Your form was checked successfully.";

        // Reset the form fields.
        contactForm.reset();
    });
}


// Active Navbar Link on Scroll

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 180) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

// Update when scrolling
window.addEventListener("scroll", updateActiveLink);

// Update when the page loads
window.addEventListener("load", updateActiveLink);

// Update immediately when clicking a navbar link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            navLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

