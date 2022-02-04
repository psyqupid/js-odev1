

let inputText = prompt("Lütfen adınızı giriniz:")

     if (inputText != null) {

    document.getElementById("myName").innerHTML = inputText.toUpperCase();

     }
var clock = new Date();
var time = clock.toLocaleTimeString();
var day = clock.getDay();
     if (day == 1) {
         day = " Pazartesi"
     }
     if (day == 2) {
        day = " Salı"
    }
    if (day == 3) {
        day = " Çarşamba"
    }
    if (day == 4) {
        day = " Perşembe"
    }
    if (day == 5) {
        day = " Cuma"
    }
    if (day == 6) {
        day = " Cumartesi"
    }
    if (day == 7) {
        day = " Pazar"
    }
document.getElementById("myClock").innerHTML = time + day;


