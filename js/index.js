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

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq__item");
const faqItemsIcons = document.querySelectorAll(".faq__icon");

faqItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((item) => item.classList.remove("active"));
        faqItemsIcons.forEach((item) => (item.textContent = "+"));

        console.log(faqItemsIcons[index]);

        if (!isActive) {
            item.classList.add("active");
            faqItemsIcons[index].textContent = "-";
        }
    });
});