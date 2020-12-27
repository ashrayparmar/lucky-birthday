var inputTxt = document.querySelector("#input");
var btnCheck = document.querySelector("#btn");
var luckyNum = document.querySelector("#num");

function clickHandler() {

    var dateOfBirth = inputTxt.value;
    var num = luckyNum.value;

    var array = dateOfBirth.split("-");
    var date = array[0];
    var month = array[1];
    var year = array[2];

    if(date <= 1 || date >= 31 || date == '') {
        console.log("Please enter date correctly");
    }
    if(month <= 1 || month >= 12 || month == '') {
        console.log("Please enter month correctly");   
    }
    if(year <= 1000 || year >= 2020 || year == '') {
        console.log("Please enter year correctly");   
    }

    var sum = date+month+year;

    if(sum % num == 0) {
        console.log("You're lucky! ")
    }
    else {
        console.log("You're unlucky! ")
    }
}


btnCheck.addEventListener("click", clickHandler);