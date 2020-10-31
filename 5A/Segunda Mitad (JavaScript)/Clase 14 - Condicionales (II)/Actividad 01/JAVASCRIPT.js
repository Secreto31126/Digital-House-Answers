// Escribe aquí tu código JS
var vidasActuales = #Cambiar;
function atacar() {
    vidasActuales = restarVida();
    if (vidasActuales <= 0) {
        document.getElementById("indicadorVidas").innerHTML = "¡SLIME MONSTER ha sido derrotado!";
    } else {
        document.getElementById("indicadorVidas").innerHTML = vidasActuales;
    }
}
