var cont = 1;
var resultado = 0;
var texto = "";


do {
    if (cont % 4 == 0) {
        resultado = cont;
        texto += "<br> Os números divisíveis por 4 até 200 é: " + resultado;
    }
    cont++
} while (cont <= 200)
document.getElementById("divisao").innerHTML = texto;