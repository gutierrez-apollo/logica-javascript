var num = 1;
var maior = 0;
var menor = 0;
var texto = "";
var texto1 = "";
var texto2 = "";
do {
    var num = +(prompt("Digite um número inteiro: "));
    texto += num + "... ";
    if (num > maior) {
        maior = num;
    }
    if (num < menor) {
        menor = num;
    }
    texto1 = "O maior valor digitado foi: " + maior;
    texto2 = "O menor valor digitado foi: " + menor;
} while (num > 0);
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste1").innerHTML = texto1;
document.getElementById("teste2").innerHTML = texto2;