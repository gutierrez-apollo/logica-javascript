var soma = 0;
var cont = 1;
var texto = "";

while (cont <= 100) {
    soma += cont;
    texto = ("O resultado da soma dos números de 1 a 100 é: " + soma + ".");
    cont++;
}

document.getElementById("soma").innerHTML = texto;