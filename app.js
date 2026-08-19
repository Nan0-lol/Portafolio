// app.js - Lógica de tu portafolio

// Comprobamos que el archivo se conectó correctamente
console.log("¡El archivo app.js está conectado y funcionando!");

// Ejemplo de interactividad: Agregar un mensaje al hacer clic en las tarjetas de proyectos
document.addEventListener("DOMContentLoaded", () => {
    const proyectos = document.querySelectorAll('.proyecto-card');


    proyectos.addEventListener('click', () => {
    const githubLink = proyecto.getAttribute('data-github');
    if (githubLink) {
        window.open(githubLink, '_blank'); // '_blank' sirve para abrir en pestaña nueva
    }
    });
});