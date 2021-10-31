var soma = 0;
var pares = 0;
var texto = "";

for (pares; pares <= 500; pares++) {
    if (pares % 2 == 0) {
        soma = soma + pares;
        texto = "O somatório dos números dos números pares de 1 a 500 é: " + soma;
    }
}
document.getElementById("soma").innerHTML = texto;