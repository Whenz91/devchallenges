const mobileNavButton = document.querySelector(".mobile-nav-button");
const linkWrapper = document.querySelector(".link-wrapper");

mobileNavButton.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    linkWrapper.classList.toggle("active");
})