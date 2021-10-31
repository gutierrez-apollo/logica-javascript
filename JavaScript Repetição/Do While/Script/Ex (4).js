let cont = 1;
let quadro = 1;
let resultado = 0;
let texto1 = "";
let texto2 = "";

do {
    texto1 += "<br> No quadro " + cont + " tem: " + quadro + " grãos.";
    resultado += quadro;
    quadro += quadro;
    document.getElementById("graos").innerHTML = texto1;
    texto2 = "<br> O resultado da soma de todos os grãos é de: " + resultado;
    cont++
} while (cont <= 64)
document.getElementById("graos2").innerHTML = texto2;