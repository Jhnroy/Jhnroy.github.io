// GSAP Animation on Load
gsap.from(".hero .text", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero .profile img", { opacity: 0, scale: 0.8, duration: 1, delay: 0.7 });

// Scroll-based animation for projects and certificates
const fadeElements = document.querySelectorAll(".fade-in, .project, .certificate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

fadeElements.forEach(el => observer.observe(el));

// Navbar shrink on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
});
