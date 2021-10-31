var custoFabrica = parseFloat(prompt("Digite o valor do custo de fábrica do carro: "));
var valorFinal = parseFloat((custoFabrica * 0.28) + (custoFabrica * 0.45) + custoFabrica).toFixed(2);
alert("O valor final do carro para o consumidor final será de: R$ " + valorFinal);