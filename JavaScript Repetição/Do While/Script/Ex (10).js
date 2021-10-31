var n1 = +(prompt("Digite um número: "));
var n2 = +(prompt("Digite outro número: "));
var cont = 0;
var texto = "";
var resultado = 0;

if (n1 > n2) {
    do {
        resultado += n2;
        texto = "A divisão inteira do número " + n1 + " pelo número " + n2 + " é igual a: " + cont + ".";
        cont++;
    } while (resultado <= n1);

} else if (n2 > n1) {
    do {
        resultado += n1;
        texto = "A divisão inteira do número " + n2 + " pelo número " + n1 + " é igual a: " + cont + ".";
        cont++;
    } while (resultado <= n2);

} else {
    texto = "O resultado é = 1";
}

document.getElementById("teste").innerHTML = texto;