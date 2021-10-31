var num = 0;
var maior = 0;
var menor = 0;
var texto1 = "";
var texto2 = "";

while (num >= 0) {
    num = +(prompt("Digite um número: "));
    if (num > maior) {
        maior = num;
    } else if (num > menor) {
        menor = num;
    }
    texto1 = "O maior número digitado foi: " + maior;
    texto2 = "O menor número digitado foi: " + menor;
}
document.getElementById("numero-M").innerHTML = texto1;
document.getElementById("numero-m").innerHTML = texto2;