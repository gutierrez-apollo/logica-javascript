var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var nota3 = parseFloat(prompt("Digite a terceira nota: "));
var mediaExercicios = parseFloat(prompt("Digite a média do exercícios: "));

var mediaFinal = parseFloat(nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7

if (mediaFinal > 9) {
    alert("Conceito A");
} else if (mediaFinal >= 7.5 && mediaFinal < 9) {
    alert("Conceito B");
} else if (mediaFinal >= 6 && mediaFinal < 7.5) {
    alert("Conceito C")
} else {
    alert("Conceito D")
}