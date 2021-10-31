var quantidadeTotal = parseInt(prompt("Digite a quantidade total de eleitores de um munincípio:"));
var quantidadeVotosBrancos = parseInt(prompt("Digite a quantidade de votos em branco de um munincípio:"));
var quantidadeVotosNulos = parseInt(prompt("Digite a quantidade de votos nulos de um munincípio:"));
var quantidadeVotosValidos = parseInt(prompt("Digite a quantidade de votos validos de um município:"))
porVotosBrancos = parseFloat((quantidadeVotosBrancos * 100) / quantidadeTotal).toFixed(1);
porVotosNulos = parseFloat((quantidadeVotosNulos * 100) / quantidadeTotal).toFixed(1);
porVotosValidos = parseFloat((quantidadeVotosValidos * 100) / quantidadeTotal).toFixed(1);
alert("A porcentagem de votos brancos correspondem a: " + porVotosBrancos + "%");
alert("A porcentagem de votos nulos correspondem a: " + porVotosNulos + "%");
alert("A porcentagem de votos validos correspondem a: " + porVotosValidos + "%");