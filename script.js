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
    // Toggle mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }

    // Lightbox Carousel for Gallery
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);

    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    lightbox.appendChild(closeButton);

    // Navigation buttons for carousel
    const prevButton = document.createElement("span");
    prevButton.classList.add("prev");
    prevButton.innerHTML = "&#10094;"; // Left arrow
    lightbox.appendChild(prevButton);

    const nextButton = document.createElement("span");
    nextButton.classList.add("next");
    nextButton.innerHTML = "&#10095;"; // Right arrow
    lightbox.appendChild(nextButton);

    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = galleryImages.length - 1;
        } else if (index >= galleryImages.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        lightboxImage.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            showImage(index);
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    prevButton.addEventListener("click", function () {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showImage(currentIndex + 1);
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImage && e.target !== prevButton && e.target !== nextButton) {
            lightbox.style.display = "none";
        }
    });

    // Keyboard navigation support
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            } else if (e.key === "ArrowRight") {
                showImage(currentIndex + 1);
            } else if (e.key === "Escape") {
                lightbox.style.display = "none";
            }
        }
    });
});

