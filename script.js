const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");
const mobileNavLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    hamburger.classList.remove("active");
  });
});


