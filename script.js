//create variables to hold the character options for Special, Lowercase, Uppercase, and Numeric Character

var specialCharsArray = ['!','@','#','$','%','^','&','*','+','-'];
var numericalNumsArray = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCharsArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCharsArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


//create an empty array that will hold the user selcted characters

var possibleChars = [];
var passwordArray = [];

// on game start prompt for users number of character and hold in a variable
var numChars = prompt("How many characters would you like in your password?");

//check the users input and comfirm they put in a number between 8 and 128, and that it is a number

// write function that validates users input

function validatesUserInput (chars) {
  // parseInt(chars)
  if (chars < 8 || chars >128);
  return null;
}

validatesUserInput();

// after validation create variables for character selections

var specialChars = confirm("Would you like Special Characters?")
var numericalNums = confirm("Would you like Numbers?")
var lowerChars = confirm("Would you like Lower Case Letters?")
var upperChars = confirm("Would you like Upper Case Letters?")

// validate that at least one option was selected

if (!specialChars && !numericalNums && !lowerNums && !upperNums) {
  prompt ("You need to select at least one type of character!");
  // generatePassword();
}

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
