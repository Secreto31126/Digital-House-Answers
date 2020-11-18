// Escribe aquí tu código JS
function solicitarPermiso() {
  var edadUsuario = document.getElementById("inputEdad").value;
  var confirmacionUsuario = confirm("¿Confirmas los datos ingresados?");

  if (confirmacionUsuario && edadUsuario >= 18) {
    entregarPermiso();
  } else {
    rechazarPermiso();
  }
}
