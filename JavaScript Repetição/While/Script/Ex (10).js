var cont = 50;
var somatorio = 0;
var media = 0;
var texto = "";
var texto2 = "";
var pares = "";

while (cont <= 70) {
    if (cont % 2 == 0) {
        somatorio += cont;
        media = somatorio / 10;
        pares += cont + "... ";
        texto = "O somatório de todos os números é: " + somatorio;
        texto2 = "A média aritmética dos números é: " + media;
    }
    cont++;
}
document.getElementById("pares").innerHTML = pares;
document.getElementById("valores").innerHTML = texto;
document.getElementById("valores2").innerHTML = texto2;