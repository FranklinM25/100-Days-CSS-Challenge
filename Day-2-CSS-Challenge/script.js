document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector(".container__frame__center__menu-icon");
    const lines = document.querySelectorAll(".container__frame__center__menu-icon__line-basis");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        lines.forEach(line => line.classList.remove("no-animation"));
    });
})