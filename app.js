var inputTxt = document.querySelector("#dob");
var btnCheck = document.querySelector("#btn");
var luckyNum = document.querySelector("#num");
var outputDiv = document.querySelector("#output");

function clickHandler() {

    var dateOfBirth = inputTxt.value;
    var num = luckyNum.value;

    var array = dateOfBirth.split("-");
    var date = array[0];
    var month = array[1];
    var year = array[2];

    if(date == '' || month == '' || year == ''){
        alert("Please enter your date of birth");
    }  else if(num == '') {
        alert("Please enter your lucky number");
    } 

    let sum = 0;
    sum = date+month+year;
    if (sum % num == 0) {
        var lucky = "You are lucky"
        outputDiv.innerText = lucky;
    } else {
        var unlucky = "You are unlucky"
        outputDiv.innerText = unlucky;
    }
}


btnCheck.addEventListener("click", clickHandler);