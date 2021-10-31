var areaTotal = 0;
var resposta = "SIM";
var texto1 = "";
var texto2 = "";

while (resposta == "SIM") {
    var comodo = (prompt("Digite o cômodo da casa: "));
    var largura = +(prompt("Digite a largura do cômodo: "));
    var comprimento = +(prompt("Digite o comprimento do cômodo: "));
    var area = largura * comprimento;
    texto1 += "<br> A área do  " + comodo + " é de: " + area + "m².";
    areaTotal += area;
    resposta = prompt("Deseja continuar calculando as áreas dos cômodos? [SIM] ou [NÃO]. ");
    texto2 = "A área total da residência é de:  " + areaTotal + "m².";
}
document.getElementById("comodo").innerHTML = texto1;
document.getElementById("area").innerHTML = texto2;