var soma = 0;
var pares = 0;
var texto = "";

while (pares <= 500) {
    if (pares % 2 == 0) {
        soma = soma + pares;
        texto = "O somatório dos números pares de 1 a 500 é: " + soma + ".";
    }
    pares++;
}
document.getElementById("soma").innerHTML = texto;