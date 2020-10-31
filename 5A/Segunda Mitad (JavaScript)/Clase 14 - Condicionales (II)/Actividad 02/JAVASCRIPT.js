// Escribe aquí tu código JS
function mostrarDado() {
    var valorObtenido = numeroAzar();
    document.getElementById("indicadorValor").innerHTML = valorObtenido;
    if (valorObtenido == 5) {
        document.getElementById("indicadorFinal").innerHTML = "¡Has Ganado!";
    }
}
