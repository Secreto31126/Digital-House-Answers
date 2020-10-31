function comenzar (){
  var tipoPersonaje = preguntarPersonaje();
  // Completa con tu código JS a partir de aqui (dentro del cuerpo de la función)
  var textoAtaque = "Aún no se sabe";
  if (tipoPersonaje == "MAGO") {
    textoAtaque = "Elige tu hechizo";
  } else {
    textoAtaque = "Elige tu espada";
  }
  document.getElementById("parrafoPersonaje").innerHTML = textoAtaque;
}
