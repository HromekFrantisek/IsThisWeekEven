var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var fullDate = day + "/" + month + "/" + year;

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [weekNo];
}

function isEven() {
    var isEvenText = document.getElementById("even");
    if (getWeekNumber(today) % 2 == 1) {
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
