var a = (prompt("Digite o valor correspondente à a: "));
var b = (prompt("Digite o valor correspondente à b: "));
var c = (prompt("Digite o valor correspondente à c: "));

if ((a < b + c) && (b < a + c) && (c < a + b)) {
    if ((a == b) && (b == c)) {
        var mens = "Triângulo Equilátero!";
    } else if ((a == b) || (b == c) || (a == c)) {
        var mens = "Triângulo Isósceles!";
    } else {
        var mens = "Triângulo Escaleno!";
    }
} else {
    var mens = "Não forma um triângulo!";
}
alert("O triângulo será do tipo: " + mens);

// ------------------------------------------------"
// |                   VARIÁVEIS                   |
// |-----------------------------------------------|
// |a | b | c |          Resposta                  |
// |-----------------------------------------------|
// |1 | 2 | 3 | Não é possível formar um triângulo |
// |-----------------------------------------------|
// |3 | 4 | 5 | Não é possível formar um triângulo |
// |-----------------------------------------------|
// |2 | 2 | 4 | Não é possível formar um triângulo |
// |-----------------------------------------------|
// |4 | 4 | 4 | Triângulo Equilátero               |
// |-----------------------------------------------|
// |5 | 3 | 3 | Não é possível formar um triângulo |
// |-----------------------------------------------|