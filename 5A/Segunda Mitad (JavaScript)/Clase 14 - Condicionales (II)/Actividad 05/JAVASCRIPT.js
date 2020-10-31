function chequearEdad() {
  var edad = document.getElementById("edadUsuario").value;
  if (edad >= 10 && edad <= 20) {
    document.getElementById("mensaje").innerHTML = "Puedes continuar con el juego";
  } else {
    document.getElementById("mensaje").innerHTML = "Lo siento, no puedes jugar";
  }
}
