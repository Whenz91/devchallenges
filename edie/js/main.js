const mobileMenuBtn = document.querySelector(".main-nav__mobile-menu-btn");
const mainNavList = document.querySelector(".main-nav__list");

mobileMenuBtn.addEventListener("click", () => {
    mainNavList.classList.toggle("active");
});

mainNavList.addEventListener("click", (e) => {
    if(!e.target.classList.contains("main-nav__list__item__link")) return;
    mainNavList.classList.remove("active");
});