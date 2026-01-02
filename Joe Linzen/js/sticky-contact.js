console.log("sticky-contact.js cargado");

const sticky = document.querySelector(".sticky-contact");
console.log("sticky encontrado:", sticky);

window.addEventListener("scroll", () => {
  console.log("scroll sticky");
  if (window.scrollY > window.innerHeight * 0.6) {
    sticky.classList.add("visible");
  } else {
    sticky.classList.remove("visible");
  }
});
