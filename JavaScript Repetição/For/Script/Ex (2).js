var num = +(prompt("Digite um número: "));
let tabuada = 1;
var resultado = 0;
var texto1 = "";
var texto2 = "";

for (tabuada; tabuada <= 10; tabuada++) {
    resutado = num * tabuada;
    texto1 = "Tabuada do número " + num;
    texto2 += "<br> " + num + " x " + tabuada + " = " + resutado;
}
document.getElementById("p").innerHTML = texto1;
document.getElementById("tabuada").innerHTML = texto2;