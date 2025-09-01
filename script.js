// Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu").querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Scroll top button
const scrollBtn = document.querySelector(".scroll-top");
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animate skill bars
const skillSection = document.querySelector(".skills");
const fills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  const rect = skillSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    fills.forEach(fill => {
      fill.style.width = fill.getAttribute("data-width") + "%";
    });
  }
});
