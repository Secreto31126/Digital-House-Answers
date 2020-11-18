// Escribe aquí tu código JS
function confirmarEliminacion() {
  var confirmacionUsuario = confirm("¿Estás seguro?");

  if (confirmacionUsuario) {
    eliminarSeleccionadas();
  }
}
