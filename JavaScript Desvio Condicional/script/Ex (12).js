var grausFahrenheit = parseFloat(prompt("Digite a temperatura em graus fahrenheit: "));
var grausCelcius = parseFloat(((grausFahrenheit - 32) / 9) * 5).toFixed(0);
alert("A temperatura em grau Celsius equivale a: " + grausCelcius + " °");