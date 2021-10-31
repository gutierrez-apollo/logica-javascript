var numero1 = (prompt("Digite um número: "));
var numero2 = (prompt("Digite um número: "));
var numero3 = (prompt("Digite um número: "));

if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) {
    alert("A ordem crescente é " + numero3 + ", " + numero2 + ", " + numero1);
} else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2) {
    alert("A ordem crescente é " + numero2 + ", " + numero3 + ", " + numero1);
} else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3) {
    alert("A ordem crescente é " + numero3 + ", " + numero1 + ", " + numero2);
} else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1) {
    alert("A ordem crescente é " + numero1 + ", " + numero3 + ", " + numero2);
} else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2) {
    alert("A ordem crescente é " + numero2 + ", " + numero1 + ", " + numero3);
} else {
    alert("A ordem crescente é " + numero1 + ", " + numero2 + ", " + numero3);
}