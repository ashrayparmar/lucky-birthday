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

    console.log(date);
    console.log(month);
    console.log(year);

    var sum = date+month+year;

    if(sum % num == 0) {
        console.log("You're lucky! ")
    }
    else {
        console.log("You're unlucky! ")
    }


}


btnCheck.addEventListener("click", clickHandler);