document.addEventListener("DOMContentLoaded", function() {
    const ingresarBtn = document.getElementById("ingresarBtn");
    const bienvenida = document.getElementById("bienvenida");
    const contenido = document.getElementById("contenido-principal");

    ingresarBtn.addEventListener("click", function() {
        bienvenida.style.display = "none"; // Oculta la pantalla de bienvenida
        contenido.style.display = "block"; // Muestra la página principal
    });
});
