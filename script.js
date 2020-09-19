var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var fullDate = day + "/" + month + "/" + year;

function isEven() {
    var isEvenText = document.getElementById("even");
    if (month % 2 == 1) {
        isEvenText.innerHTML = ("Tento týden je lichý").toUpperCase();
    }
    else {
        isEvenText.innerHTML = ("Tento týden je sudý").toUpperCase();
    }
}

window.onload = function () {
    var todayText = document.getElementById("today");
    todayText.innerHTML = fullDate;
    isEven();
}
