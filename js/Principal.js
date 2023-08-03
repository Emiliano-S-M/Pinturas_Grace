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

// Colores RAL-Classic organizados por categoría tonal
const ralColors = {
    Amarillos: [
        { name: "RAL 1000 Beige verdoso", hex: "#BEBD7F" },
        { name: "RAL 1001 Beige", hex: "#D0B084" },
        { name: "RAL 1002 Amarillo arena", hex: "#D2AA6D" },
        { name: "RAL 1003 Amarillo señales", hex: "#F9A900" },
        { name: "RAL 1004 Amarillo oro", hex: "#E49E00" },
        { name: "RAL 1005 Amarillo miel", hex: "#CB8F00" },
        { name: "RAL 1006 Amarillo maíz", hex: "#E19000" },
        { name: "RAL 1007 Amarillo narciso", hex: "#E88C00" },
        { name: "RAL 1011 Beige pardo", hex: "#AF8050" },
        { name: "RAL 1012 Amarillo limón", hex: "#DDAF28" },
        { name: "RAL 1013 Blanco perla", hex: "#E3D9C7" },
        { name: "RAL 1014 Marfil", hex: "#DDC49B" },
        { name: "RAL 1015 Marfil claro", hex: "#E6D2B5" },
        { name: "RAL 1016 Amarillo azufre", hex: "#F1DD39" },
        { name: "RAL 1017 Amarillo azafrán", hex: "#F6A951" },
        { name: "RAL 1018 Amarillo de zinc", hex: "#FACA31" },
        { name: "RAL 1019 Beige agrisado", hex: "#A48F7A" },
        { name: "RAL 1020 Amarillo oliva", hex: "#A08F65" },
        { name: "RAL 1021 Amarillo colza", hex: "#F6B600" },
        { name: "RAL 1023 Amarillo tráfico", hex: "#F7B500" },
        { name: "RAL 1024 Amarillo ocre", hex: "#BA8F4C" },
        { name: "RAL 1026 Amarillo brillante", hex: "#FFFF00" },
        { name: "RAL 1027 Amarillo curry", hex: "#A77F0F" },
        { name: "RAL 1028 Amarillo melón", hex: "#FF9C00" },
        { name: "RAL 1032 Amarillo retama", hex: "#E2A300" },
        { name: "RAL 1033 Amarillo dalia", hex: "#F99A1D" },
        { name: "RAL 1034 Amarillo pastel", hex: "#EB9C52" },
        { name: "RAL 1035 Beige perlado", hex: "#8F8370" },
        { name: "RAL 1036 Oro perlado", hex: "#806440" },
        { name: "RAL 1037 Amarillo sol", hex: "#F09200" },
    ],
    Naranjas: [
        { name: "RAL 2000 Amarillo naranja", hex: "#DA6E00" },
        { name: "RAL 2001 Rojo anaranjado", hex: "#BA481C" },
        { name: "RAL 2002 Naranja sanguíneo", hex: "#BF3922" },
        { name: "RAL 2003 Naranja pálido", hex: "#F67829" },
        { name: "RAL 2004 Naranja puro", hex: "#E25304" },
        { name: "RAL 2005 Naranja brillante", hex: "#FF4D08" },
        { name: "RAL 2007 Naranja claro brillante", hex: "#FFB200" },
        { name: "RAL 2008 Rojo claro anaranjado", hex: "#EC6B22" },
        { name: "RAL 2009 Naranja tráfico", hex: "#DE5308" },
        { name: "RAL 2010 Naranja señales", hex: "#D05D29" },
        { name: "RAL 2011 Naranja intenso", hex: "#E26E0F" },
        { name: "RAL 2012 Naranja salmón", hex: "#D5654E" },
        { name: "RAL 2013 Naranja perlado", hex: "#923E25" },
        { name: "RAL 2017 Naranja RAL", hex: "#FC5500" },
    ],
    Rojos: [
        { name: "RAL 3000 Rojo vivo", hex: "#A72920" },
        { name: "RAL 3001 Rojo señales", hex: "#9B2423"},
        { name: "RAL 3002 Rojo carmin", hex: "#9B2321"},
        { name: "RAL 3003 Rojo rubí", hex: "#861A22"},
        { name: "RAL 3004 Rojo púrpura", hex: "#6B1C23"},
        { name: "RAL 3005 Rojo vino", hex: "#59191F"},
        { name: "RAL 3007 Rojo negruzco", hex: "#3E2022"},
        { name: "RAL 3009 Rojo óxido", hex: "#6D342D"},
        { name: "RAL 3011 Rojo pardo", hex: "#782423"},
        { name: "RAL 3012 Rojo beige", hex: "#C5856D"},
        { name: "RAL 3013 Rojo tomate", hex: "#972E25"},
        { name: "RAL 3014 Rojo viejo", hex: "#CB7375"},
        { name: "RAL 3015 Rosa claro", hex: "#D8A0A6"},
        { name: "RAL 3016 Rojo coral", hex: "#A63D30"},
        { name: "RAL 3017 Rosa", hex: "#CA555D"},
        { name: "RAL 3018 Rojo fresa", hex: "#C63F4A"},
        { name: "RAL 3020 Rojo tráfico", hex: "#BB1F11"},
        { name: "RAL 3022 Rojo salmón", hex: "#CF6955"},
        { name: "RAL 3024 Rojo brillante", hex: "#FF2D21"},
        { name: "RAL 3026 Rojo claro brillante", hex: "#FF2A1C"},
        { name: "RAL 3027 Rojo frambuesa", hex: "#AB273C"},
        { name: "RAL 3028 Rojo puro", hex: "#CC2C24"},
        { name: "RAL 3031 Rojo oriente", hex: "#A63437"},
        { name: "RAL 3032 Rojo rubí perlado", hex: "#701D24"},
        { name: "RAL 3033 Rosa perlado", hex: "#A53A2E"},
    ],
    Violetas: [
        { name: "RAL 4001 Rojo lila", hex: "#816183" },
        { name: "RAL 4002 Rojo violeta", hex: "#8D3C4B" },
        { name: "RAL 4003 Violeta érica", hex: "#C4618C" },
        { name: "RAL 4004 Burdeos", hex: "#651E38" },
        { name: "RAL 4005 Lila azulado", hex: "#76689A" },
        { name: "RAL 4006 Púrpurá tráfico", hex: "#903373" },
        { name: "RAL 4007 Violeta púrpura", hex: "#47243C" },
        { name: "RAL 4008 Violeta señales", hex: "#844C82" },
        { name: "RAL 4009 Violeta pastel", hex: "#9D8692" },
        { name: "RAL 4010 Magenta tele", hex: "#BB4077" },
        { name: "RAL 4011 Violeta perlado", hex: "#6E6387" },
        { name: "RAL 4012 Morado perlado", hex: "#6A6B7F" },
    ],
    Azules: [
        { name: "RAL 5000 Azul violeta", hex: "#304F6E" },
        { name: "RAL 5001 Azul verdoso", hex: "#0E4C64" },
        { name: "RAL 5002 Azul ultramar", hex: "#00387A" },
        { name: "RAL 5003 Azul zafiro", hex: "#1F3855" },
        { name: "RAL 5004 Azul negruzco", hex: "#191E28" },
        { name: "RAL 5005 Azul señales", hex: "#005387" },
        { name: "RAL 5007 Azul brillante", hex: "#376B8C" },
        { name: "RAL 5008 Azul grisáceo", hex: "#2B3A44" },
        { name: "RAL 5009 Azul azur", hex: "#215F78" },
        { name: "RAL 5010 Azul genciana", hex: "#004F7C" },
        { name: "RAL 5011 Azul acero", hex: "#1A2B3C" },
        { name: "RAL 5012 Azul luminoso", hex: "#0089B6" },
        { name: "RAL 5013 Azul cobalto", hex: "#193153" },
        { name: "RAL 5014 Azul colombino", hex: "#637D96" },
        { name: "RAL 5015 Azul celeste", hex: "#007CAF" },
        { name: "RAL 5017 Azul tráfico", hex: "#005B8C" },
        { name: "RAL 5018 Azul turquesa", hex: "#048B8C" },
        { name: "RAL 5019 Azul capri", hex: "#005E83" },
        { name: "RAL 5020 Azul océano", hex: "#00414B" },
        { name: "RAL 5021 Azul agua", hex: "#007577" },
        { name: "RAL 5022 Azul noche", hex: "#222D5A" },
        { name: "RAL 5023 Azul lejanía", hex: "#41698C" },
        { name: "RAL 5024 Azul pastel", hex: "#6093AC" },
        { name: "RAL 5025 Gencian perlado", hex: "#20697C" },
        { name: "RAL 5026 Azul noche perlado", hex: "#0F3052" },
    ],
    Verdes: [
        // Añadir más colores verdes aquí...
    ],
    Grises: [
        // Añadir más colores grises aquí...
    ],
    Marrones: [
        { name: "RAL 8000 Pardo verdoso", hex: "#89693F" },
        { name: "RAL 8001 Pardo ocre", hex: "#9D622B" },
        { name: "RAL 8002 Marrón señales", hex: "#794D3E" },
        { name: "RAL 8003 Pardo arcilla", hex: "#7E4B27" },
        { name: "RAL 8004 Pardo cobre", hex: "#8D4931" },
        { name: "RAL 8007 Pardo corzo", hex: "#70462B" },
        { name: "RAL 8008 Pardo oliva", hex: "#724A25" },
        { name: "RAL 8011 Pardo nuez", hex: "#5A3827" },
        { name: "RAL 8012 Pardo rojo", hex: "#66332B" },
        { name: "RAL 8014 Sepia", hex: "#4A3526" },
        { name: "RAL 8015 Castaño", hex: "#5E2F26" },
        { name: "RAL 8016 Caoba", hex: "#4C2B20" },
        { name: "RAL 8017 Chocolate", hex: "#442F29" },
        { name: "RAL 8019 Pardo grisáceo", hex: "#3D3635" },
        { name: "RAL 8022 Pardo negruzco", hex: "#1A1719" },
        { name: "RAL 8023 Pardo anaranjado", hex: "#A45729" },
        { name: "RAL 8024 Pardo beige", hex: "#795038" },
        { name: "RAL 8025 Pardo pálido", hex: "#755847" },
        { name: "RAL 8028 Marrón tierra", hex: "#513A2A" },
        { name: "RAL 8028 Marrón tierra", hex: "#513A2A" },
    ],
    BlancosNegros: [
        {name: "RAL 9001 Blanco crema", hex:"#E9E0D2" },
        {name: "RAL 9002 Blanco grisáceo", hex:"#D6D5CB" },
        {name: "RAL 9003 Blanco señales", hex:"#ECECE7" },
        {name: "RAL 9004 Negro señales", hex:"#2B2B2C" },
        {name: "RAL 9005 Negro intenso", hex:"#0E0E10" },
        {name: "RAL 9006 Aluminio blanco", hex:"#A1A1A0" },
        {name: "RAL 9007 Aluminio gris", hex:"#868581" },
        {name: "RAL 9010 Blanco puro", hex:"#F1EDE1" },
        {name: "RAL 9011 Negro grafito", hex:"#27292B" },
        {name: "RAL 9012 Blanco sala blanca", hex:"#F8F2E1" },
        {name: "RAL 9016 Blanco tráfico", hex:"#F1F1EA" },
        {name: "RAL 9017 Negro tráfico", hex:"#29292A" },
        {name: "RAL 9018 Blanco papiro", hex:"#C8CBC4" },
        {name: "RAL 9022 Gris claro perlado", hex:"#858583" },
        {name: "RAL 9023 Gris oscuro perlado", hex:"#787B7A" },
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
