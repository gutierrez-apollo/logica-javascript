var numero = (prompt("Digite  um número: "));
var contador = 1;
var texto = "";

while (contador < 10) {
    var resultado = contador * numero;
    texto += ("<br>" + contador + " x " + numero + " = " + resultado);
    contador++;
}

document.getElementById("tabuada").innerHTML = texto;