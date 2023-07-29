// Función para mostrar un div específico y cambiar la visualización de los enlaces
function mostrarDiv(nombreDiv) {
    // Obtener todos los elementos con la clase "contenido"
    var contenidos = document.getElementsByClassName("contenido");
    
    // Ocultar todos los elementos con la clase "visible" para el efecto de desvanecimiento
    for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].classList.remove("visible");
    }

    // Ocultar todos los elementos con la clase "contenido" usando transiciones
    setTimeout(function() {
        for (var i = 0; i < contenidos.length; i++) {
            contenidos[i].style.display = "none";
        }
        
        // Mostrar el div seleccionado
        var divMostrar = document.getElementById(nombreDiv);
        if (divMostrar) {
            divMostrar.style.display = "block";
            // Mostrar el div con el efecto de desvanecimiento
            setTimeout(function() {
                divMostrar.classList.add("visible");
            }, 20);
        }

    }, 500); // Esperar 0.5 segundos antes de cambiar la visualización

    // Obtener todos los elementos de la lista de enlaces
    var listaLinks = document.querySelectorAll(".menu li a");
    
    // Cambiar las clases de los enlaces para activar/inactivar según el div mostrado
    listaLinks.forEach(function(link) {
        if (link.textContent.toUpperCase() === nombreDiv.toUpperCase()) {
            link.classList.add("active-link");
            link.classList.remove("inactive-link");
        } else {
            link.classList.remove("active-link");
            link.classList.add("inactive-link");
        }
    });

    // Guardar el ID del div en el almacenamiento local para recordar última posición
    localStorage.setItem("ultimaPosicion", nombreDiv);
}

// Mostrar el div almacenado en el almacenamiento local al cargar la página
var ultimaPosicion = localStorage.getItem("ultimaPosicion");
if (ultimaPosicion) {
    mostrarDiv(ultimaPosicion);
} else {
    // Mostrar el div "Inicio" por defecto si no hay almacenamiento local
    mostrarDiv('inicio');
}

// Evento para guardar la última posición al cerrar la página
window.addEventListener("beforeunload", function() {
    // Obtener el div actualmente mostrado
    var divActual = document.querySelector(".contenido[style*='display: block']");
    if (divActual) {
        // Obtener el ID del div actual
        var nombreDivActual = divActual.id;
        // Guardar el ID del div actual en el almacenamiento local
        localStorage.setItem("ultimaPosicion", nombreDivActual);
    }
});