
const navbar = document.querySelector(".custom-navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

const closeBtn = document.querySelector(".nav-close");

if (closeBtn && navbarCollapse) {
  closeBtn.addEventListener("click", () => {
    new bootstrap.Collapse(navbarCollapse).hide();
  });
}
