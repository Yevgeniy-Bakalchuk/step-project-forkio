const btnMenu = document.getElementById("btn-menu");
const icon = document.querySelector(".burger-menu-lines");
const menu = document.querySelector(".header_nav");

btnMenu.addEventListener("click", () => {
  icon.classList.toggle("burger-menu-lines-active");
  menu.classList.toggle("header_nav-open");
});

document.querySelector(".modal-container").addEventListener("click", (e) => {
  menu.classList.remove("header_nav-open");
  icon.classList.remove("burger-menu-lines-active");
});
