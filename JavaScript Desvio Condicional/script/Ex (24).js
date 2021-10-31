var salarioFixo = +(prompt("Digite o valor do saláio fixo: "));
var valorVendas = +(prompt("Digite o valor de vendas: "));
const valorTotalVendas = 1500;

if (valorVendas <= valorTotalVendas) {
    var comissao = valorVendas * 0.03;
    var salarioFinal = comissao + salarioFixo;
    alert("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2))
} else {
    var valorComissao1 = (valorVendas - valorTotalVendas) * 0.05;
    var valorComissao2 = valorTotalVendas * 0.03;
    var salarioFinal = valorVendas + valorComissao1 + valorComissao2;
    alert("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2))
}