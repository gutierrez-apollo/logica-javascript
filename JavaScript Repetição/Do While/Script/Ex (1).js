var cont = 15;
var resultado = 0;
var texto = "";

do {
    resultado = Math.pow(cont, 2);
    texto += "<br>" + cont + "² : " + cont + " x " + cont + " = " + resultado;
    cont++

} while (cont <= 200)

document.getElementById("potencia").innerHTML = texto;