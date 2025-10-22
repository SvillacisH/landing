"use strict";

/**
 * Muestra un mensaje emergente (toast) al agregar la clase 'md:block' al elemento con id 'toast-interactive'.
 * 
 * @function
 * @returns {void} No devuelve ningún valor.
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Muestra un video en YouTube al hacer clic en el elemento con id 'demo'.
 * Abre el enlace en una nueva pestaña.
 * 
 * @function
 * @returns {void} No devuelve ningún valor.
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};

(() => {
    showToast();
    showVideo();
})();
