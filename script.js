//create variables to hold the character options for Special, Lowercase, Uppercase, and Numeric Character

var specialCharsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", "`", "~", "<", ",", ">", ".", "?", "/", "|"];
var numericalNumsArray = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCharsArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCharsArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var possibleChars = [];
var passwordArray = [];
var numChars; 
var specialChars;
var numericalNums; 
var lowerChars;
var upperChars; 

//Function to determine the length of the password

function validatesUserInput () {
  numChars = prompt("How many characters would you like in your password?(You must choose between 8-128)");
    if (numChars < 8) {
      alert("Please pick a number is either 8 or bigger 😐");
      validatesUserInput ();
    } else if (numChars > 128) {
      alert("Please pick a number that is either 128 or smaller :D 😐");
      validatesUserInput ();
    } else if (isNaN(numChars)) {
      alert("Please write a numerical number that is between 8-128 🙄");
      validatesUserInput ();
    } else {
      alert("Thank you! You will now select whether or not you would like to include Special Characters, Numerical Numbers, Lowercase Letters, or Uppercase Letter!😁");
    } 
}
validatesUserInput();

if (specialChars) {
  possibleChars.concat(specialCharsArray) 
}
if (numericalNums) {
   possibleChars.concat(numericalNumsArray) 
}
if (lowerChars) {
   possibleChars.concat(lowerCharsArray) 
}
if (upperChars) {
   possibleChars.concat(upperCharsArray) 
}


// validate that at least one option was selected

function createPassword () {
  var specialChars = confirm("Would you like Special Characters?😏");
  var numericalNums = confirm("Would you like Numbers?😏");
  var lowerChars = confirm("Would you like Lower Case Letters?😏");
  var upperChars = confirm("Would you like Upper Case Letters?😏");
  if (!specialChars && !numericalNums && !lowerChars && !upperChars) {
   alert ("You need to select at least one type of character!😒");
   createPassword();
  } else {
    alert ("Are you sure about that?🥳")
  }
}

createPassword();

// after validation is complete start pushing the selected characters into possible chars array

if (specialChars) {
  possibleChars.concat(specialCharsArray) 
}
if (numericalNums) {
   possibleChars.concat(numericalNumsArray) 
}
if (lowerChars) {
   possibleChars.concat(lowerCharsArray) 
}
if (upperChars) {
   possibleChars.concat(upperCharsArray) 
}


// create a random number 

//loop through possibleChars and select a random character from the possibleChars array based on how many characters they entered into the prompt

// push() the randomly generated character to a empty array called passwordArray

// return passwordArray.join()

















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
