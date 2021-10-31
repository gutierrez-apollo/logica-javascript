var agencia = +(prompt("Digite o número da sua agência: "));
var saldo = +(prompt("Digite seu saldo disponivel: "));
var debito = +(prompt("Digite seu débito disponivel: "));
var credito = +(prompt("Digite seu crédito disponivel: "));

var saldoAtual = saldo - debito + credito;

if (saldoAtual >= 0) {
    alert("Saldo Positivo!")
} else {
    alert("Saldo Negativo!")
}