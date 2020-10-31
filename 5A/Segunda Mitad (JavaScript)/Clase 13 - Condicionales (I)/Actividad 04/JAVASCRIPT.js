function confirmarNombre() {
  var nombre1 = document.getElementById("nombreUsuario1").value;
  var nombre2 = document.getElementById("nombreUsuario2").value;
  if (nombre1 == nombre2) {
    document.getElementById("mensaje").innerHTML = "Nombre cambiado con éxito."
  } else {
    document.getElementById("mensaje").innerHTML = "El nombre de usuario ingresado no es el mismo."
  }
}
