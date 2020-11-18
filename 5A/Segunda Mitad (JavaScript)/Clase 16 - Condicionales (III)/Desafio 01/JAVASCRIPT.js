// Escribe aquí tu código JS
var monedasDisponibles = #Cambiar;
document.getElementById("indicadorMonedas").innerHTML = monedasDisponibles;

function verificarMonedas() {
    var presupuesto = calcularCompra();
    document.getElementById("indicadorCosto").innerHTML = presupuesto;

    var mensaje = "";
    if (monedasDisponibles >= presupuesto) {
        mensaje = "Gracias, vuelva pronto";
    } else {
        mensaje = "No se pudo realizar la transacción";
    }
    document.getElementById("cuadroDialogo").innerHTML = mensaje;
}
