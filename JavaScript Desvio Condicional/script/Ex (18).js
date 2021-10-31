const ano_atual = 2021;

var ano_nasc = +(prompt("Digite seu ano de nascimento: "));

var valor = ano_atual - ano_nasc

if (valor > 16) {

    alert("Pode Votar!");

} else {

    alert("Não pode Votar!");
}