const botones = document.querySelectorAll(".btn_info");

botones.forEach((boton) => {

    boton.addEventListener("click", function() {

        // Identificar la información correspondiente
        const trabajo = this.nextElementSibling;

        // Mostrar u ocultar la información
        trabajo.classList.toggle("activo");

    });

});

const nav = document.getElementById("nav_principal");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});