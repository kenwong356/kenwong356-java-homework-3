// Assignment Code
var passwordLength = 8;
var choiceArr = [];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '%', '&', ',', '*', '+', '-', '.', '/', '<', '>', '?','~'];
var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var finishPromts = getPromts();
  var passwordText = document.querySelector("#password");
  
  if (finishPromts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i< passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomLetter]
  }
  return password;
}


function getPromts(){
  choiceArr=[];
  passwordLength = parseInt(prompt("How many characters would you like your password to contain? (Choose between 8 - 128 characters)"));

if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Character length has to be a number from 8 - 128. Please try again");
  return false;
  }
if (confirm("Would you like lowercase letters in your password")) {
  choiceArr = choiceArr.concat(lettersLower);
}
if (confirm("Would you like upercase letters in your password")) {
  choiceArr = choiceArr.concat(lettersUpper);
}
if (confirm("Would you like special characters in your password")) {
  choiceArr = choiceArr.concat(specialChar);
}

if (confirm("Would you like numbers in your password")) {
  choiceArr = choiceArr.concat(number);
}
return true;
}




