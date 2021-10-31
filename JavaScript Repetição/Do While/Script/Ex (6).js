var cont = 0;
var soma = 0;
var media = 1;
var texto = "";
var texto1 = "";
var texto2 = "";
var texto3 = "";

do {
    var valor = +(prompt("Digite um valor: "));
    cont++
    soma += valor;
    media = soma / cont;
    texto1 = "A quantidade de números foi de: " + cont;
    texto2 = "O somatório de todos os números é igual a: " + soma;
    texto3 = "A média de todos os valores digitados é igual a: " + media;
    texto += valor + "... ";
} while (valor >= 0)

document.getElementById("teste").innerHTML = texto;
document.getElementById("teste1").innerHTML = texto2;
document.getElementById("teste2").innerHTML = texto1;
document.getElementById("teste3").innerHTML = texto3;