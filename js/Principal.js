// function mostrarDiv(nombreDiv) {
//     var contenidos = document.getElementsByClassName("contenido");
    
//     for (var i = 0; i < contenidos.length; i++) {
//         contenidos[i].style.display = "none";
//     }

//     // Ocultar todos los elementos con la clase "contenido" usando transiciones
//     setTimeout(function() {
//         for (var i = 0; i < contenidos.length; i++) {
//             contenidos[i].classList.add("hidden");
//         }
        
//         var divMostrar = document.getElementById(nombreDiv);
//         if (divMostrar) {
//             divMostrar.style.display = "block";
//             // Mostrar el div con el efecto de desvanecimiento
//             setTimeout(function() {
//                 divMostrar.classList.remove("hidden");
//             }, 20);
//         }

//     }, 500); // Esperar 0.5 segundos antes de cambiar la visualización

//     var listaLinks = document.querySelectorAll(".menu li a");
    
//     listaLinks.forEach(function(link) {
//         if (link.textContent.toUpperCase() === nombreDiv.toUpperCase()) {
//             link.classList.add("active-link");
//             link.classList.remove("inactive-link");
//         } else {
//             link.classList.remove("active-link");
//             link.classList.add("inactive-link");
//         }
//     });

//     // Guardar el ID del div en el almacenamiento local
//     localStorage.setItem("ultimaPosicion", nombreDiv);
// }

// // Mostrar el div almacenado en el almacenamiento local al cargar la página
// var ultimaPosicion = localStorage.getItem("ultimaPosicion");
// if (ultimaPosicion) {
//     mostrarDiv(ultimaPosicion);
// } else {
//     // Mostrar el div "Inicio" por defecto si no hay almacenamiento local
//     mostrarDiv('inicio');
// }

// // Evento para guardar la última posición al cerrar la página
// window.addEventListener("beforeunload", function() {
//     var divActual = document.querySelector(".contenido[style*='display: block']");
//     if (divActual) {
//         var nombreDivActual = divActual.id;
//         localStorage.setItem("ultimaPosicion", nombreDivActual);
//     }
// });

function mostrarDiv(nombreDiv) {
    var contenidos = document.getElementsByClassName("contenido");
    
    for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].classList.remove("visible");
    }

    // Ocultar todos los elementos con la clase "contenido" usando transiciones
    setTimeout(function() {
        for (var i = 0; i < contenidos.length; i++) {
            contenidos[i].style.display = "none";
        }
        
        var divMostrar = document.getElementById(nombreDiv);
        if (divMostrar) {
            divMostrar.style.display = "block";
            // Mostrar el div con el efecto de desvanecimiento
            setTimeout(function() {
                divMostrar.classList.add("visible");
            }, 20);
        }

    }, 500); // Esperar 0.5 segundos antes de cambiar la visualización

    var listaLinks = document.querySelectorAll(".menu li a");
    
    listaLinks.forEach(function(link) {
        if (link.textContent.toUpperCase() === nombreDiv.toUpperCase()) {
            link.classList.add("active-link");
            link.classList.remove("inactive-link");
        } else {
            link.classList.remove("active-link");
            link.classList.add("inactive-link");
        }
    });

    // Guardar el ID del div en el almacenamiento local
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
    var divActual = document.querySelector(".contenido[style*='display: block']");
    if (divActual) {
        var nombreDivActual = divActual.id;
        localStorage.setItem("ultimaPosicion", nombreDivActual);
    }
});