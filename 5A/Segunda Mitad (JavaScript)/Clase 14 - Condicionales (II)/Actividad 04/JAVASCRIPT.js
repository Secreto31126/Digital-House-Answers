// Copia y pega aquí el código JS del paso anterior.
// Copia y pega aquí el código JS del paso anterior.
// Escribe aquí tu código JS
function mostrarDado() {
    var valorObtenido = numeroAzar();
    document.getElementById("indicadorValor").innerHTML = valorObtenido;
    if (valorObtenido >= 5) {
        document.getElementById("indicadorFinal").innerHTML = "¡Has Ganado!";
    } else {
        document.getElementById("indicadorFinal").innerHTML = "¡Has Perdido!";
    }
}
