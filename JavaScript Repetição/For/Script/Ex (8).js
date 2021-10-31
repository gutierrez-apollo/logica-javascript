var base = +(prompt("Digite o valor da base: "));
var expoente = +(prompt("Digite o valor do expoente: "));
var total = 1;
var contador = 0;
var texto = "";

for (contador; contador < expoente; contador++) {
    total = total * base;
    texto = "O resultado de " + base + " elevado a " + expoente + " = " + total;
}
document.getElementById("potencia").innerHTML = texto;