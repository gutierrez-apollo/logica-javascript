var contador = 1;
var texto1 = "";
var texto2 = "";
var fatorial = 1;
var cont = 0;

for (contador; contador <= 10; contador++) {
    if (contador % 2 == 1) {
        var impar = contador;
        texto1 += impar + "... "
        for (cont; cont < impar; cont++) {
            fatorial += fatorial * cont;
        }
        texto2 += "O fatorial  do número " + impar + " é igual a: " + fatorial + " .<br>";
    }
}
document.getElementById("impar").innerHTML = texto1;
document.getElementById("fatorial").innerHTML = texto2;