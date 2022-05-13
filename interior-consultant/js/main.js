const openMenuBtn = document.querySelector("#openMenuBtn");
const closeMenuBtn = document.querySelector("#closeMenuBtn");
const mainNavLinkList = document.querySelector(".main-nav__link-list");

openMenuBtn.addEventListener("click", () => {
    mainNavLinkList.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    mainNavLinkList.classList.remove("active");
})