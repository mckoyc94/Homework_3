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

//Chooses Random Character from Array
function randomCharFromArray(arr){
  return arr[Math.floor(Math.random()* Math.floor(arr.length))]
}

// Creates Password
function generatePassword(){
  
  // Determines Password Length
  var PassLength = prompt("How many characters would you like in your password:");

  //Registers if Numbers were Added
  if (PassLength >= 8 && PassLength <= 128){
    
    // Prompts User for Desired 
    var AlphaLower = confirm("Would you like to include Lowercase letters?");
    var AlphaUpper = confirm("Would you like to include Uppercase letters?");
    var Special = confirm("Would you like to include special characters?");
    var Numerals = confirm("Would you like to include numerals?")
    var CharArray = [specChar,NumChar,upperCase,lowerCase]
    var string = ""

    // If Lower Case Characters are Requested
    if (AlphaLower === true){
      var passwordLowerChar = randomCharFromArray(lowerCase)
      console.log("Lower case character",passwordLowerChar)
    } else {
     CharArray.splice(3,1)
    }

    //If Upper Case Characters are Requested
    if (AlphaUpper === true){
      var passwordUpperChar = randomCharFromArray(upperCase)
      console.log("Upper case Character",passwordUpperChar)
    } else {
     CharArray.splice(2,1) 
    }

    //If Numerals are Requested
    if (Numerals === true){
      var passwordNumChar = randomCharFromArray(NumChar)
      console.log("Number",passwordNumChar)
    } else {
     CharArray.splice(1,1) 
    }

    //If Special Letters are Requested
    if (Special === true){
      var passwordSpecChar = randomCharFromArray(specChar)
      console.log("Special Character",passwordSpecChar)
    } else {
     CharArray.splice(0,1) 
    }

    // Run through loop to create Password
    for (var i = 0; i < PassLength; i++){
      string = string + randomCharFromArray(randomCharFromArray(CharArray))
    }
    
    //Outcome for Generate Password Function
    return string
  
  } else {
    alert("Invalid Number. \nMust be a number between 8 and 128 \nPlease try again and enter a valid number")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
