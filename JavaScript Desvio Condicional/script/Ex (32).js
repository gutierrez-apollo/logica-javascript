var time1 = (prompt("Digite o nome do time: "));
var time2 = (prompt("Digite o nome do time: "));
var golsTime1 = parseInt(prompt("Digite o número de gols do " + time1 + ": "));
var golsTime2 = parseInt(prompt("Digite o número de gols do " + time2 + ": "));

if (golsTime1 > golsTime2) {
    alert("O " + time1 + " venceu a partida!");
} else if (golsTime2 > golsTime1) {
    alert("O " + time2 + " venceu a partida!");
} else {
    alert(time1 + " e " + time2 + " empataram a partida!");
}