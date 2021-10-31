var contador = 1;
var resultado = 0;
var texto = "";

for (contador; contador <= 200; contador++) {
    if (contador % 4 == 0) {
        resultado = contador;
        texto += "<br> Os números divisíveis por 4 até 200 é: " + resultado;
    }
}
document.getElementById("divisao").innerHTML = texto;