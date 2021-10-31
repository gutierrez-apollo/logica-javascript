var ladoA = parseFloat(prompt("Digite o valor um lado do triângulo: "));
var ladoB = parseFloat(prompt("Digite o valor um lado do triângulo: "));
var ladoC = parseFloat(prompt("Digite o valor um lado do triângulo: "));


if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    alert("É um Triângulo!");
} else {
    alert("Não é um Triângulo!");
}