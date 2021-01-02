var inputTxt = document.querySelector("#dob");
var btnCheck = document.querySelector("#btn");
var luckyNum = document.querySelector("#num");

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
    if (date+month+year / num === 0) {
        console.log("You are lucky bro");
    } else {
        console.log("You are unlucky man")
    }
}


btnCheck.addEventListener("click", clickHandler);