var contador = 1;
var somatoria = 0;
var texto1 = "";
var texto2 = "";
do {
    var valor = +(prompt("Digite um número: "));
    var cont = 0;
    var fatorial = 1;
    do {
        fatorial += fatorial * cont;
        cont++;
    } while (cont < valor);
    somatoria += fatorial;
    texto1 += "O fatorial de " + valor + " é =" + fatorial + ".<br>";
    contador++;
} while (contador <= 15);

texto2 += "O somatório de todos os fatoriais é: " + somatoria;
document.getElementById("fatorial").innerHTML = texto1;
document.getElementById("somatorio").innerHTML = texto2;