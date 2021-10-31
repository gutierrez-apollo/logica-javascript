var cont = 1;
var somatorio = 0;
var texto1 = "";
var texto2 = "";
var media = 0;

while (cont <= 10) {
    var num = +(prompt("Digite um número: "));
    somatorio += num;
    media = somatorio / 10;
    texto1 = "O somatório de todos os números é: " + somatorio;
    texto2 = "A média aritmética dos números dados é: " + media;
    cont++;
}
document.getElementById("valores").innerHTML = texto1;
document.getElementById("valores2").innerHTML = texto2;