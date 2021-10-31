var quantidadeMacas = +(prompt("Digite a quantidade de maças compradas: "));
const meiaDuziaMacas = 1.30;
const duziaMacas = 1.0;
var valorFinal;
if (quantidadeMacas < 12) {
    valorFinal = quantidadeMacas * meiaDuziaMacas
    alert("Comprando " + quantidadeMacas + " o preço final é: R$ " + valorFinal);
} else {
    valorFinal = quantidadeMacas * duziaMacas
    alert("Comprando " + quantidadeMacas + " o preço final é: R$ " + valorFinal);
}