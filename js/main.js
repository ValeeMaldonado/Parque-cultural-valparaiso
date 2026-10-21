
// ==========================================
// PARQUE CULTURAL DE VALPARAÍSO
// INTERACCIONES GENERALES
// ==========================================


// 1. MENÚ RESPONSIVO

const botonMenu = document.querySelector(".menu-toggle");
const navegacion = document.querySelector(".navegacion");

if (botonMenu && navegacion) {

    function cerrarMenu() {
        navegacion.classList.remove("abierta");

        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    }

    botonMenu.addEventListener("click", function () {

        const abierto = navegacion.classList.toggle("abierta");

        botonMenu.setAttribute(
            "aria-expanded",
            String(abierto)
        );

        botonMenu.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );

    });

    // Cerrar con la tecla Escape

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            cerrarMenu();
        }

    });

    // Cerrar al seleccionar un enlace

    navegacion.querySelectorAll("a").forEach(function (enlace) {

        enlace.addEventListener("click", cerrarMenu);

    });

    // Restablecer menú al volver a escritorio

    window.addEventListener("resize", function () {

        if (window.innerWidth > 1150) {
            cerrarMenu();
        }

    });

}


// 2. BUSCADOR PROVISIONAL

const buscador = document.querySelector(".buscador");

if (buscador) {

    buscador.addEventListener("submit", function (evento) {

        // Se habilitará al implementar la búsqueda real.
        evento.preventDefault();

    });

}
