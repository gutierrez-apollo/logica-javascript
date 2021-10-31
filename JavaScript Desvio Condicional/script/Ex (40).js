var produto = (prompt("Digite o nome do produto: "));
var quantidade = parseInt(prompt("Digite a quantidade adquirida do produto: "));
var precoUnidade = parseInt(prompt("Digite o valor de unidade do produto: "));

if (quantidade <= 5) {
    var total = quantidade * precoUnidade;
    var desconto = total * 0.02;
    var valorFinal = total - desconto;
    alert("O valor total do(a) " + produto + " a ser pago é: R$ " + valorFinal.toFixed(2));
} else if (quantidade > 5 && quantidade <= 10) {
    var total = quantidade * precoUnidade;
    var desconto = total * 0.03;
    var valorFinal = total - desconto;
    alert("O valor total do(a) " + produto + " a ser pago é: R$ " + valorFinal.toFixed(2));
} else {
    var total = quantidade * precoUnidade;
    var desconto = total * 0.05;
    var valorFinal = total - desconto;
    alert("O valor total do(a) " + produto + " a ser pago é: R$ " + valorFinal.toFixed(2));
}