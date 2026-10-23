
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

// ==========================================================================
// FUNCIONALIDAD CAMBIO DE DIAPOSITIVA (CARRUSEL)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.cartelera-banner');
    const puntos = document.querySelectorAll('.carrusel-indicadores .punto');

    if (tarjetas.length > 0 && puntos.length > 0) {
        puntos.forEach((punto, i) => {
            punto.addEventListener('click', () => {
                // Oculta todas las tarjetas y apaga los puntos
                tarjetas.forEach(t => t.classList.remove('activa'));
                puntos.forEach(p => p.classList.remove('activo'));

                // Muestra la tarjeta seleccionada y enciende su punto
                tarjetas[i].classList.add('activa');
                punto.classList.add('activo');
            });
        });
    }
});

