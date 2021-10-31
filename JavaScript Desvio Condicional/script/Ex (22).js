var horasTrabalhadas = +(prompt("Digite as horas trabalhadas no mês: "));
var salarioHora = +(prompt("Digite o seu salário por hora: "));

const horasTrabalhadasMensal = 160;

if (horasTrabalhadas <= horasTrabalhadasMensal) {
    var salarioFinal = salarioHora * horasTrabalhadas;
    alert("O salário final é de R$ " + salarioFinal);
} else {
    var horasExtras = horasTrabalhadas - horasTrabalhadasMensal;
    var valorHorasExtras = horasExtras * salarioHora * 1.5;
    var salarioFinal = valorHorasExtras + horasTrabalhadasMensal * salarioHora;
    alert("O salário final é de R$ " + salarioFinal);
}