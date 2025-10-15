const mobileNav = document.querySelector(".mobile-nav");
const mobileNavOverlay = document.querySelector(".mobile-nav--overlay");

const openMobileNavBtn = document.querySelector("#menu-open");
const closeMobileNavBtn = document.querySelector("#menu-close");

openMobileNavBtn.addEventListener("click", () => {
    mobileNav.classList.add("mobile-nav--open");
    mobileNavOverlay.style.display = "block";
});

closeMobileNavBtn.addEventListener("click", () => {
    mobileNav.classList.remove("mobile-nav--open");
    mobileNavOverlay.style.display = "none";
});
