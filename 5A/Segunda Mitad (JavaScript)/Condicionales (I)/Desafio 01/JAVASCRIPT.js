function saludar() {
  var idioma = document.getElementById("selectLang").options[document.getElementById("selectLang").selectedIndex].value;

// Escribe aquí tu código JS
var mensaje = document.getElementById("mensaje");
if (idioma == "es") {
  mensaje.innerHTML = "¡Hola Mundo! Bienvenidos a JavaScript";
} else if (idioma == "en") {
  mensaje.innerHTML = "Hello World! Welcome to JavaScript";
} else if (idioma == "de") {
  mensaje.innerHTML = "Hallo Welt! Willkommen bei JavaScript";
} else if (idioma == "fr") {
  mensaje.innerHTML = "Salut Monde! Bienvenue sur JavaScript";
}
}
