function soyHumano() {
  var valorIngresado = document.getElementById("captcha").value;
  var chequeo = "QwErTyUiOp";
  if (valorIngresado == chequeo) {
    document.getElementById("mensaje").innerHTML = "Te creemos... no eres una máquina"
  } else {
    document.getElementById("mensaje").innerHTML = "Alto ahí... sabemos que eres una máquina"
  }
}
