// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLow = 'abcdefghijklmnopqrstuvwxyz';
var alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Numbers = "0123456789";
var specChar = [' ','!','"','#','$','%','&','\'','(',')','*','+','\,','<','>','?','@','[',']','\\','^','`','_','{','}','|','~','.','-','/'];
var NumChar = Numbers.split("");
var upperCase = alphabetUp.split('');
var lowerCase = alphabetLow.split('');


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}
   

function generatePassword(){
  var PassLength = prompt("How many characters would you like in your password:");

  if (PassLength >= 8 && PassLength <= 128){
    var AlphaLower = confirm("Would you like to include Lowercase letters?");
    var AlphaUpper = confirm("Would you like to include Uppercase letters?");
    var Special = confirm("Would you like to include special characters?");
    var Numerals = confirm("Would you like to include numerals?")

    for (var i = 0; i < PassLength; i++){
      

    }
  } else {
    alert("Invalid Number. \nMust be a number between 8 and 128 \nPlease try again and enter a valid number")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
