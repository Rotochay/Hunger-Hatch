const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// MOBILE MENU

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


// SMALL NAVBAR EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.style.background = "rgba(11, 11, 10, 0.98)";
    } else {
        navbar.style.background = "rgba(11, 11, 10, 0.94)";
    }
});