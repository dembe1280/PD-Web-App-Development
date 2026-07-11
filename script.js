// ===============================
// PD | Web & App Development
// script.js (Part 1)
// ===============================

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll("#navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

    });

}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
// ===============================
// script.js (Part 2)
// ===============================

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {
    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been received. We'll contact you soon.");

        contactForm.reset();

    });

}

// Animated Statistics

const counters = document.querySelectorAll(".stats h2");

counters.forEach(counter => {

    const text = counter.innerText.replace("+","");
    const target = parseInt(text);

    if (isNaN(target)) return;

    let count = 0;

    const speed = Math.max(15, Math.floor(1500 / target));

    const update = () => {

        if (count < target) {

            count++;

            counter.innerText = count + "+";

            setTimeout(update, speed);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

console.log("PD | Web & App Development Loaded Successfully");
