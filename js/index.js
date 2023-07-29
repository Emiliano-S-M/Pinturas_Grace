// Elementos del DOM
const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// Textos a mostrar
const texts = [
	"",
	"Colores",
	"que",
	"inspiran,",
	"pinturas",
	"que",
	"perduran",
	""
];

// Tiempo de la transición del morph
const morphTime = 1;
// Tiempo de enfriamiento entre transiciones
const cooldownTime = 0.25;

// Índice actual del texto
let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

// Mostrar el primer texto y el siguiente
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// Función para hacer la transición del morph
function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	let fraction = morph / morphTime;
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	setMorph(fraction);
}

// Función para aplicar el morph con una fracción dada
function setMorph(fraction) {
	// Aplicar efecto de blur y opacidad al texto2
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	// Calcular la fracción invertida para el texto1
	fraction = 1 - fraction;
	// Aplicar efecto de blur y opacidad al texto1
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	// Actualizar los textos con los nuevos valores
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

// Función para hacer el enfriamiento después de la transición
function doCooldown() {
	morph = 0;
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Función de animación principal
function animate() {
	requestAnimationFrame(animate);
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	cooldown -= dt;
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		doMorph();
	} else {
		doCooldown();
	}
}

// Llamar a la función de animación
animate();

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento con la clase "header" y la duración de la animación CSS
    var animationElement = document.querySelector(".header");
    var animationDuration = getComputedStyle(animationElement).animationDuration;
    animationDuration = parseFloat(animationDuration) * 1000;
    // Redirigir a la página "Principal.html" después de la duración de la animación
    setTimeout(function() {
        window.location.href = "../html/Principal.html";
    }, animationDuration);
});
