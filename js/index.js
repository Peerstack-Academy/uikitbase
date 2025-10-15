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
const timelinePoints = document.querySelectorAll(".faq__timeline-point");

faqItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((i) => i.classList.remove("active"));
        timelinePoints.forEach((p) => p.classList.remove("active"));

        if (!isActive) {
            item.classList.add("active");
            if (timelinePoints[index]) {
                timelinePoints[index].classList.add("active");
            }
        }
    });
});
