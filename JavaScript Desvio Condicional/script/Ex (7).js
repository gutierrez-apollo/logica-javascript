var anos = parseInt(prompt("Digite a sua idade:"));
var meses = parseInt(prompt("Digite quantos meses você tem desde o seu aniversário: "));
var dias = parseInt(prompt("Digite quantos dias você tem desde seu aniversário: "));
var total;
total = ((anos * 365) + (meses * 30) + dias);
alert("A quantidade de dias vividos é " + total);