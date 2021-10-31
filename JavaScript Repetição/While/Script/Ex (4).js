var num = 0;
var impar = 0;

while (num <= 20) {
    if (num % 2 == 1) {
        impar += "<br>" + num;
        document.getElementById("impar").innerHTML = impar;
    }
    num++;
}