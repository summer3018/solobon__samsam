const hamburger = document.querySelector(".header__icon");
const navMenu = document.querySelector(".drawer-icon");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});