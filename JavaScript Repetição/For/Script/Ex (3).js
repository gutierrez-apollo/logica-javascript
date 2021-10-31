let contador = 1;
var resultado = 0;
var texto1 = "";
var texto2 = "";

for (contador; contador <= 100; contador++) {
    resultado = resultado + contador;
    texto2 = "Apresentar o total da soma otida dos cem primeiros números inteiros: ";
    texto1 = "<br>" + "O resultado da soma é: " + resultado;
}
document.getElementById("p").innerHTML = texto2;
document.getElementById("soma").innerHTML = texto1;