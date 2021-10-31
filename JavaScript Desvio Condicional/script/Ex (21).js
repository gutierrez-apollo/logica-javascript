var horaInicio = parseInt(prompt("Digite a hora de inicio do jogo:"))

var horaFinal = parseInt(prompt("Digite a hora na qual o jogo acabou:"))

if (horaInicio > horaFinal) {

    var totalHoras = horaFinal - horaInicio + 24

    alert("O total de horas corridas do jogo é de: " + totalHoras)

} else {

    var totalHoras = horaFinal - horaInicio

    alert("O total de horas corridas do jogo é de: " + totalHoras)

}