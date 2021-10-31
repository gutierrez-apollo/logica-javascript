var numero1 = +(prompt("Digite um número: "));
var numero2 = +(prompt("Digite um número: "));
var numero3 = +(prompt("Digite um número: "));

if (numero1 > numero2 && numero1 > numero3) {
    alert("O maior valor é " + numero1)
} else if (numero2 > numero3 && numero2 > numero1) {
    alert("O maior valor é " + numero2)
} else {
    alert("O maior valor é " + numero3)
}