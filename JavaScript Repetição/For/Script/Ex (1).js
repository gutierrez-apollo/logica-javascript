var texto = "";
let contador = 15;
var resultado = 0;

for (contador; contador <= 200; contador++) {
    resultado = Math.pow(contador, 2);
    texto += "<br>" + contador + "² : " + contador + " x " + contador + " = " + resultado;
}

document.getElementById("potencia").innerHTML = texto;