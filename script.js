// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLow = 'abcdefghijklmopqrstuvwxyz';
var alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Numbers = "0123456789";
var specChar = [' ','!','"','#','$','%','&','\'','(',')','*','+','\,','<','>','?','@','[',']','\b','^','`','_','{','}','|','~'];
var NumChar = Numbers.split("");
var upperCase = alphabetUp.split('');
var lowerCase = alphabetLow.split('');


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Checks that a Number is input
// function numberChecker(x){
//  var Checker = lowerCase.includes(x.toLowerCase().charAt(0))
//  if (Checker === true) {
//   do {
//   var Correction = prompt("Please enter a number");
//   x = Correction
//   } while (numberChecker(x) === true)
//  }
   

function generatePassword(){
  var PassLength = prompt("How many characters would you like in your password:");
  //var AlphaLower = confirm("Would you like to include Lowercase letters?")
  //var AlphaUpper = confirm("Would you like to include Uppercase letters?");
  //var Special = confirm("Would you like to include special characters?");
  //var Numerals = confirm("Would you like to include numerals?")
  
  //if (PassLength < 0 ) {
  //    do {
  //    var Correction = prompt("Please enter a number");
  //    x = Correction
  //    } while (PassLength < 0)
  //  }

  console.log("Can I push this to GitHub?")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
