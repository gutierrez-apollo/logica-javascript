var contador = 1;
var num1 = -1;
var num2 = 1;
var num3;
var texto = "";

for (contador; contador <= 15; contador++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    texto += num3 + "... ";
}
document.getElementById("fibonacci").innerHTML = texto;