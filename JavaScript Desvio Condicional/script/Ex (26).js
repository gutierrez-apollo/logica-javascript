var quantidadeAtual = +(prompt("Digite a quantidade atual do produto no estoque: "));
var quantidadeMaxima = +(prompt("Digite a quantidade máxima do produto no estoque: "));
var quantidadeMinimo = +(prompt("Digite a quantidade mínima do produto no estoque: "));

var media = (quantidadeMaxima + quantidadeMinimo) / 2;

if (quantidadeAtual >= media) {
    alert("NÃO EFETUAR COMPRA!")
} else {
    alert("EFETUAR COMPRA!")
}