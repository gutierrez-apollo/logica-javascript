var nota1 = +(prompt("Digite a primeira nota: "));

var nota2 = +(prompt("Digite a segunda nota:"));

var media = (nota1 + nota2) / 2;

if (media >= 6) {

    alert("APROVADO! SUA MÉDIA FOI: " + media.toFixed(1));

} else {

    alert("REPROVADO! SUA MÉDIA FOI: " + media.toFixed(1));

}