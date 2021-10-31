var salarioFixo = parseFloat(prompt("Digite o valor do salário fixo do vendedor: "));
var comissaoCarro = parseFloat(prompt("Digite a comissão por carro vendido: "));
var quantidadeCarros = parseInt(prompt("Digite a quantidade de carros vendidos: "));
var valorTotalCarro = parseFloat(prompt("Digite a soma total dos valores dos carros: "));
var salarioFinal = parseFloat(salarioFixo + (comissaoCarro * quantidadeCarros) + (5 * valorTotalCarro / 100)).toFixed(2);
alert("O salário final do vendedor equivale a: R$ " + salarioFinal);