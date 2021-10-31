var contador = 0;
var texto = "";

for (contador; contador <= 100; contador = contador + 10) {
    var F = (9 * contador + 160) / 5;
    texto += "<br> A temperatura em Celsius é: " + contador + "°C " + " e em Fahrenheint: " + F + " F.";
}
document.getElementById("temperatura").innerHTML = texto;