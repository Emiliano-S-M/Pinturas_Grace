// Función para mostrar un div específico y cambiar la visualización de los enlaces
function mostrarDiv(nombreDiv) {
    // Obtener todos los elementos con la clase "contenido"
    var contenidos = document.querySelectorAll(".contenido");
    
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


// // Colores RAL-Classic (algunos ejemplos, puedes agregar más colores según tu necesidad)
// const ralColors = [
//     { name: "RAL 1000 BEIGE VERDOSO", hex: "#CDBA88" },
//     { name: "RAL 2004 NARANJA PURO", hex: "#E97451" },
//     { name: "RAL 3005 ROJO VINO", hex: "#7B1E3A" },
//     { name: "RAL 3009 ROJO OXIDO", hex: "#6D342D" },
//     { name: "RAL 330 30 40 INTENSE MAUVE", hex: "#75476F"}
//     // Añadir más colores aquí...
// ];

// // Obtén el elemento del DOM para la lista de colores y el div del nombre del color seleccionado
// const colorList = document.getElementById("colorList");
// const selectedColorNameDiv = document.getElementById("selectedColorName");

// // Crea las opciones de colores en la lista
// ralColors.forEach(color => {
//     const colorOption = document.createElement("div");
//     colorOption.classList.add("color-option");
//     colorOption.style.backgroundColor = color.hex;
//     colorOption.title = color.name;
//     colorOption.addEventListener("click", () => {
//         colorizeImage(color.hex);
//         showSelectedColorName(color.name);
//     });
//     colorList.appendChild(colorOption);
// });

// // Función para colorear el div con clase "color"
// function colorizeImage(color) {
//     const colorDiv = document.querySelector(".canvas .color");
//     colorDiv.style.backgroundColor = color;
// }

// // Función para mostrar el nombre del color seleccionado
// function showSelectedColorName(colorName) {
//     selectedColorNameDiv.textContent = `Color seleccionado: ${colorName}`;
// }

// // Llama a la función colorizeImage con el color inicial (por ejemplo, el primer color de la lista)
// const colorInicial = ralColors[0].hex;
// colorizeImage(colorInicial);
// showSelectedColorName(ralColors[0].name); // Mostrar el nombre del color inicial al cargar la página



// Colores RAL-Classic organizados por categoría tonal
const ralColors = {
    Amarillos: [
        { name: "RAL 1000", hex: "#BEBD7F" },
        // Añadir más colores amarillos aquí...
    ],
    Naranjas: [
        { name: "RAL 2004", hex: "#E97451" },
        // Añadir más colores naranjas aquí...
    ],
    Rojos: [
        { name: "RAL 3005", hex: "#7B1E3A" },
        // Añadir más colores rojos aquí...
    ],
    Violetas: [
        // Añadir más colores violetas aquí...
    ],
    Azules: [
        // Añadir más colores azules aquí...
    ],
    Verdes: [
        // Añadir más colores verdes aquí...
    ],
    Grises: [
        // Añadir más colores grises aquí...
    ],
    Marrones: [
        // Añadir más colores marrones aquí...
    ],
    BlancosNegros: [
        // Añadir más colores blancos y negros aquí...
    ],
};

// Obtén el elemento del DOM para la lista de colores, el div del nombre del color seleccionado y la lista desplegable
const colorList = document.getElementById("colorList");
const selectedColorNameDiv = document.getElementById("selectedColorName");
const colorCategorySelect = document.getElementById("colorCategory");

// Función para mostrar los colores de una categoría tonal seleccionada
function showColorsByCategory() {
    const selectedCategory = colorCategorySelect.value;
    colorList.innerHTML = ""; // Limpiamos la lista de colores

    if (ralColors.hasOwnProperty(selectedCategory)) {
        ralColors[selectedCategory].forEach(color => {
            const colorOption = document.createElement("div");
            colorOption.classList.add("color-option");
            colorOption.style.backgroundColor = color.hex;
            colorOption.title = color.name;
            colorOption.addEventListener("click", () => {
                colorizeImage(color.hex);
                showSelectedColorName(color.name);
            });
            colorList.appendChild(colorOption);
        });
    }
}

// Función para colorear el div con clase "color"
function colorizeImage(color) {
    const colorDiv = document.querySelector(".canvas .color");
    colorDiv.style.backgroundColor = color;
}

// Función para mostrar el nombre del color seleccionado
function showSelectedColorName(colorName) {
    selectedColorNameDiv.textContent = `Color seleccionado: ${colorName}`;
}

// Llama a la función colorizeImage con el color inicial (por ejemplo, el primer color de la lista)
const colorInicial = ralColors.Amarillos[0].hex;
colorizeImage(colorInicial);
showSelectedColorName(ralColors.Amarillos[0].name); // Mostrar el nombre del color inicial al cargar la página
showColorsByCategory(); // Mostrar los colores de la categoría Amarillos al cargar la página
