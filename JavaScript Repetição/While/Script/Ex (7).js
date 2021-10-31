var cont = 1;
var num1 = -1;
var num2 = 1;
var num3;
var texto = "";

while (cont <= 15) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    texto += num3 + "....";
    cont++
}
document.getElementById("fibonacci").innerHTML = texto;