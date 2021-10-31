var base = (prompt("Digite o valor da base: "));
var expoente = (prompt("Digite o valor do expoente: "));
var total = 1;
var cont = 0;
var texto = "";


while (cont < expoente) {
    total = total * base;
    texto = "O resultado de " + base + " elevado a " + expoente + " = " + total;
    cont++;
}

document.getElementById("potencia").innerHTML = texto;