var primeiraNota = parseFloat(prompt("Digite o valor da primeira nota: "));
var segundaNota = parseFloat(prompt("Digite o valor da segunda nota: "));
var terceiraNota = parseFloat(prompt("Digite o valor da terceira nota: "));
var mediaFinal = parseFloat((primeiraNota * 2) + (segundaNota * 3) + (terceiraNota * 5) / 10).toFixed(1);
alert("A média final do aluno é: " + mediaFinal);