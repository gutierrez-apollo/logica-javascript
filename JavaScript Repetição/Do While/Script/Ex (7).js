var cont = 1;
var texto = "";
var texto2 = "";

do {
    if (cont % 2 == 1) {
        var num = cont;
        texto += num + "... ";
        var fatorial = 1;
        var contador = 0;
        do {
            fatorial += fatorial * contador;
            contador++;
        } while (contador < num);
        texto2 += "O fatorial do número " + num + " é igual a: " + fatorial + ". <br>";
    }
    cont++;
} while (cont <= 10);
document.getElementById("teste").innerHTML = texto;
document.getElementById("result").innerHTML = texto2;