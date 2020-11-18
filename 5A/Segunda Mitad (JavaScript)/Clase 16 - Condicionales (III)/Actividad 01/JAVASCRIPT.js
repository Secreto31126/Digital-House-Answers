// Escribe aquí tu código JS
function marcarLeidos() {
  var confirmacionUsuario = confirm("¿Deseas marcar todos los mensajes como leídos?");

  if (confirmacionUsuario) {
    quitarResaltados();
  }
}
