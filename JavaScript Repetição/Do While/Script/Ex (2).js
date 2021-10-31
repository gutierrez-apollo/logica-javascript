var cont = 1;
var resultado = 0
var texto = "";

do {
    if (cont % 2 == 0) {
        resultado += cont;
        texto = "<br> O  resultado da somatória dos números pares de 1 até 500 é: " + resultado;
    }
    cont++
} while (cont <= 500)
document.getElementById("soma").innerHTML = texto;