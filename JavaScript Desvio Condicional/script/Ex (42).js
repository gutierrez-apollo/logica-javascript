var codigo = parseInt(prompt("Digite  o código do funcionário: "));
var nascimento = parseInt(prompt("Digite  o seu ano de nascimento: "));
var ingresso = parseInt(prompt("Digite  o ano de ingresso na empresa: "));
var anoAtual = parseInt(prompt("Digite  o ano atual: "));

var idade = anoAtual - nascimento;
var anosTrabalhados = anoAtual - ingresso;

if (idade >= 65 || anosTrabalhados >= 30) {
    alert("Já pode se Aponsentar!")
} else if (idade >= 60 && anosTrabalhados >= 25) {
    alert("Já pode se Aponsentar!")
} else {
    alert("Não pode se Aponsentar!")
}