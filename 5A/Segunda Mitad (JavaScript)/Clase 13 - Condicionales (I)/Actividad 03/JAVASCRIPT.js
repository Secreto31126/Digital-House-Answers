// Escribe aquí tu código JS
var respuestaObtenida = prompt("#Cambiar");
var respuestaCorrecta = "#Cambiar";
var mensaje = "";
if (respuestaObtenida == respuestaCorrecta) {
  mensaje = "¡Correcto!";
} else {
  mensaje = "¡Incorrecto!"
}
document.getElementById("resultado").innerHTML = mensaje;
