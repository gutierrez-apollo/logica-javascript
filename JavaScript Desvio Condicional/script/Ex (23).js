var nomeUsuario = (prompt("Digite o seu nome: "));
var altura = +(prompt("Digite a sua altura: "));
var sexo = (prompt("Digite o seu sexo: "));

if (sexo == "M" || sexo.toLowerCase() == "masculino") {
    var pesoIdeal = (72.7 * altura) - 58;
    alert(nomeUsuario + " o seu peso ideal é: " + pesoIdeal.toFixed(1) + " Kg");

} else if (sexo == "F" || sexo.toLowerCase() == "feminino") {
    var pesoIdeal = (62.1 * altura) - 44.7;
    alert(nomeUsuario + " o seu peso ideal é: " + pesoIdeal.toFixed(1) + " Kg");

}