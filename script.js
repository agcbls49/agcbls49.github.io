// Code for Hamburger Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Code for Accordion
var accord = document.getElementsByClassName("accordion");

for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        panel.classList.toggle("hidden");
    });
}