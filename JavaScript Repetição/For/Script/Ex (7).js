var contador = 1;
var elevado = 0;
var texto = "";

for (elevado; elevado <= 15; elevado++) {
    texto += "<br> O número 3 elevado a " + elevado + " = " + contador;
    contador = contador * 3;
}
document.getElementById("potencia").innerHTML = texto;