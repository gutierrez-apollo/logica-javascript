var x = parseInt(prompt("Digite o valor correspondente à x: "));
var y = parseInt(prompt("Digite o valor correspondente à y: "));
var z = x * y + 5;

if (z <= 0) {
    var resposta = "A";
} else if (z <= 100) {
    var resposta = "B";
} else {
    var resposta = "C";
}
alert("O valor de z é " + z + " resposta é " + resposta);

// Variáveis
// | x | y | z | Resposta | 
// |3  | 2 | 11|    B     | 
// |150| 3 |455|    C     | 
// | 7 |-1 |-2 |    A     | 
// |-2 | 5 |-5 |    A     | 
// |50 | 3 |155|    C     |