var resposta = "SIM";
var texto = "";
var texto2 = "";
var areaTotal = 0;

do {
    var comodo = (prompt("Digite o cômodo da casa: "));
    var largura = +(prompt("Digite a largura do cômodo: "));
    var comprimento = +(prompt("Digite a comprimento do cômodo: "));
    var area = largura * comprimento;
    texto += "<br> A área do cômodo: " + comodo + " é de: " + area + "m²";
    areaTotal += area;
    resposta = (prompt("Deseja continuar calculando as áreas dos cômodos? [ SIM ] ou [ NAO ] "));
    texto2 = "A área total da residência é: " + areaTotal + "m²";
} while (resposta == "SIM");

document.getElementById("teste").innerHTML = texto;
document.getElementById("teste2").innerHTML = texto2;