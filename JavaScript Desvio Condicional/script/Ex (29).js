var numero1 = +(prompt("Digite um número: "))
var numero2 = +(prompt("Digite um número: "))
var numero3 = +(prompt("Digite um número: "))

if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) {
    var somaNumerosMaiores = numero1 + numero2
    alert("A soma dos dois maiores valores é: " + somaNumerosMaiores);
} else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2) {
    var somaNumerosMaiores = numero1 + numero3
    alert("A soma dos dois maiores valores é: " + somaNumerosMaiores);
} else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3) {
    var somaNumerosMaiores = numero2 + numero1
    alert("A soma dos dois maiores valores é: " + somaNumerosMaiores);
} else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1) {
    var somaNumerosMaiores = numero2 + numero3
    alert("A soma dos dois maiores valores é: " + somaNumerosMaiores);
} else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2) {
    var somaNumerosMaiores = numero3 + numero1
    alert("A soma dos dois maiores valores é: " + somaNumerosMaiores);
} else {
    var somaNumerosMaiores = numero3 + numero2
    alert("A soma dos dois maiores valores é: " + somaNumerosMaiores);
}