// Copia y pega aquí el código JS del paso anterior.
// Copia y pega aquí el código JS del paso anterior.
function activarBolaOcho() {
  var textoPregunta = document.getElementById("inputPregunta").value;
  var respuestaObtenida = obtenerRespuesta(textoPregunta);
  document.getElementById("numeroOcho").innerHTML = "";
  document.getElementById("parrafoRespuesta").innerHTML = respuestaObtenida;
  var nuevaImagenEmoji = obtenerEmoji();
  document.getElementById("imagenEmoji").src = nuevaImagenEmoji;
}
