var dob = document.querySelector("#dob");
var submitBtn = document.querySelector("#submitBtn");
var output = document.querySelector("#output");

function checkPalindrome(arg1, arg2){
    if (arg1 == arg2){
        console.log("Your birthday is palindrome")
    } else {
        console.log("not palindrome")
    }
}

function validate(){
    var dobValue = dob.value;
    var dobList = ((dobValue.replaceAll('-', '')).split(''));
    dobList.splice(0, 2);
    var dobStr = dobList.join('');
    var dobReversedList = (dobList.reverse()).join('');
    console.log(dobReversedList);
    console.log(dobStr);
    checkPalindrome(dobReversedList, dobStr);

    
}

submitBtn.addEventListener("click", validate)