document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;

    // Función para mostrar una imagen específica
    function mostrarImagen(index) {
        // Ocultar todas las imágenes
        for (let i = 0; i < carousel.children.length; i++) {
            carousel.children[i].style.display = "none";
        }
        // Mostrar la imagen actual
        carousel.children[index].style.display = "block";
    }

    // Función para cambiar la imagen al hacer clic en un punto
    function cambiarImagen(index) {
        mostrarImagen(index);
        // Actualizar el punto activo
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[index].classList.add("active");
        currentIndex = index;
    }

    // Mostrar la primera imagen por defecto
    mostrarImagen(0);
    
    // Agregar evento de clic a cada punto
    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function() {
            cambiarImagen(index);
        });
    });

    // Función para pasar a la siguiente imagen automáticamente
    function siguienteImagen() {
        currentIndex++;
        if (currentIndex >= carousel.children.length) {
            currentIndex = 0;
        }
        cambiarImagen(currentIndex);
    }

    // Intervalo para cambiar automáticamente la imagen cada 3 segundos
    setInterval(siguienteImagen, 4000);
});
