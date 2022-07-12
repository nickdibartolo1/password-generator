// Assignment Code
var letters = "abcdefghijklmnopqrstuvwxyz"
var cap_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = "!@#$%^&*()"

// random function for generating random characters into password
function randomItem(letters)
{
    var charNumber = (Math.floor(Math.random()*letters.length))
return letters.charAt(charNumber);
}
// console.log(randomItem(letters));


// data holder

function generatePassword() {

  var acceptChar = "";
  var result = "";

  let passwordLength = window.prompt("How long would you like your password (8-128 char)");

  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    window.prompt("Invalid response. Please use a correct amount of characters.")
    return;
  }

  console.log(passwordLength);


  var useLowercase = window.confirm("Would you like to use lowercase letters in the password?");  // -> True or False
  console.log(useLowercase)

  var useCapLetters = window.confirm("Would you like to use CAPITAL letters in your password?");
  console.log(useCapLetters)

  var useNumbers = window.confirm("Would you like to use numbers in your password?");
  console.log(useNumbers)

  var useSymbols = window.confirm("Would you like to use symbols in your password?");

if (useLowercase){
  acceptChar = acceptChar+ letters;
}
if (useCapLetters){
  acceptChar = acceptChar+ cap_letters;
}
if (useNumbers){
  acceptChar = acceptChar+ numbers;
}
if (useSymbols){
  acceptChar = acceptChar+ symbols;
}

  // for  loop 
  for (var i = 0; i < passwordLength; i++) {
      // grab a char from the letters STRING and add it to our result.
      var tempChar = randomItem(acceptChar)
      // concatenating our result string 
      result += tempChar;

      
    // }
  }
  console.log("Result is : " + result)
  // we want to return a value (STRING)
  return result
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);