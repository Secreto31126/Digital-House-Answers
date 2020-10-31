// Escribe aquí tu código JS
var precio = #Cambiar;
document.getElementById("indicadorPrecio").innerHTML = precio;
var dineroDisponible = prompt("#Cambiar");
if (dineroDisponible >= precio) {
  document.getElementById("indicadorCalculo").innerHTML = "¡El dinero fue suficiente!";
  document.getElementById("indicadorVuelto").innerHTML = dineroDisponible - precio;
} else {
  document.getElementById("indicadorCalculo").innerHTML = "¡El dinero no alcanzó!";
}
