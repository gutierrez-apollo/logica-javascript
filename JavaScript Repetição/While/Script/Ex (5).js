var contador = 1;
var elevado = 0;
var texto = "";

while (elevado <= 15) {
    texto += "<br> O número 3 elevado a " + elevado + " = " + contador;
    contador = contador * 3;
    elevado++;
}
document.getElementById("potencia").innerHTML = texto;