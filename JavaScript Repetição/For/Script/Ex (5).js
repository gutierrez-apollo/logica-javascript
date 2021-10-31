var num = 0;
var impar = 0;
for (num; num < 20; num++) {
    if (num % 2 == 1) {
        impar += "<br>" + num;
        document.getElementById("impar").innerHTML = impar;
    }
}