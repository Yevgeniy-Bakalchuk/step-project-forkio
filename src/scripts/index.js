const btnMenu = document.getElementById("btn-menu"),
menu = document.querySelector(".header_nav_menu");
icon = document.querySelector(".burger-menu-lines");

btnMenu.addEventListener("click",() =>{
btnMenu.classList.toggle(".burger-menu-button--open");
menu.classList.toggle(".header_nav_menu--open");
icon.classList.toggle(".burger-menu-lines-active")
});
