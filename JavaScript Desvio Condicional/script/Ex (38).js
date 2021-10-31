var usuario = parseInt(prompt("Digite seu código de usuário:"));

if (usuario != 1234) {
    alert("Usuário Inválido!");
} else {
    var senha = parseInt(prompt("Usuário reconhecido, digite sua senha: "));
}
if (senha != 9999) {
    alert("Senha Incorreta!");
} else {
    alert("Acesso Permitido!");
}