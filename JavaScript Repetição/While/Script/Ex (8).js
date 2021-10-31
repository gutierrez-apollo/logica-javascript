var cont = 0;
var texto = "";

while (cont <= 100) {
    var F = (9 * cont + 160) / 5;
    texto += "<br> A temperatura em Celsius é: " + cont + "°C " + " e em Fahrenheint: " + F + " F.";
    cont = cont + 10;
}
document.getElementById("temperatura").innerHTML = texto;