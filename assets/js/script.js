'use strict';

/**
 * navbar toggle (only on pages that have a menu)
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

if (navbar && navbarToggler) {
  navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
  });

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      navbarToggler.classList.remove("active");
    });
  });
}



/**
 * sticky header & back-to-top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY >= 200;
  if (header) header.classList.toggle("active", scrolled);
  if (backTopBtn) backTopBtn.classList.toggle("active", scrolled);
}, { passive: true });
