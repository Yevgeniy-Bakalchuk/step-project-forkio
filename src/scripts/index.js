// const btnMenu = document.getElementById("btn-menu"),
// menu = document.querySelector(".header_nav_menu");
// icon = document.querySelector(".burger-menu-lines");
//
// btnMenu.addEventListener("click",() =>{
// btnMenu.classList.toggle(".burger-menu-button--open");
// menu.classList.toggle(".header_nav_menu--open");
// icon.classList.toggle(".burger-menu-lines-active")
// });

const burgerMenu = () => {
    const menu = document.getElementById('btn-menu'),
        menuNav = document.querySelector('.header_nav_menu'),
        body = document.querySelector('body');
        // lines = document.querySelector('.burger-menu-lines');

    body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.closest('.burger-menu-button')) {
            menu.classList.add('.burger-menu-button--open');
            // lines.classList.add('.burger-menu-lines-active');
            menuNav.style.display = 'block';
        } else if (target.classList.contains('.burger-menu-button')) {
            menu.classList.remove('burger-menu-button--open');
            menuNav.style.display = 'none';
        } else if (target.tagName !== 'DIV' || target.tagName !== 'burger-menu-button') {
            menu.classList.remove('burger-menu-button--open');
            menuNav.style.display = 'none';
        } else {
            return;
        }
    });
};
burgerMenu();
