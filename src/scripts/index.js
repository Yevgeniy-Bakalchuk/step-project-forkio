// const btnMenu = document.getElementById("btn-menu"),
// menu = document.querySelector(".header_nav_menu"),
// icon = document.querySelector(".burger-menu-lines");
//
// btnMenu.addEventListener("click",() =>{
// btnMenu.classList.toggle(".burger-menu-button--open");
// menu.classList.toggle(".header_nav_menu--open");
// icon.classList.toggle(".burger-menu-lines-active")
// });

const btnMenu = document.getElementById("btn-menu");
const icon = document.querySelector(".burger-menu-lines");
const menu = document.querySelector(".header_nav");

btnMenu.addEventListener("click", () => {
  icon.classList.toggle("burger-menu-lines-active");
  menu.classList.toggle("header_nav-open");
});
