var salarioAtual = parseFloat(prompt("Digite o sálario mensal atual de cada funcionário: "));
var reajuste = parseFloat(prompt("Digite o percentual de reajuste de um funcionário: "));
var salarioFinal = parseFloat((salarioAtual * reajuste / 100) + salarioAtual).toFixed(2);
alert("O novo salário do funcionário corresponde a: R$ " + salarioFinal);