document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Exibir/ocultar menu principal
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Exibir/ocultar submenus
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita fechar o menu principal ao clicar
            this.classList.toggle("active");
        });
    });
});
