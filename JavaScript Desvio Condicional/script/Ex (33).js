var numero1 = parseInt(prompt("Digite um número: "));
var numero2 = parseInt(prompt("Digite um número: "));

if (numero1 == numero2) {
    alert("Os  números são iguais: ");
} else if (numero1 > numero2) {
    alert("O " + numero1 + " é maior que o " + numero2);
} else {
    alert("O " + numero2 + " é maior que o " + numero1)
}