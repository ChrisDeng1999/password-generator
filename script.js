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

function passwordLength () {
  numChars = prompt("How many characters would you like in your password?(You must choose between 8-128)");
    if (numChars < 8) {
      alert("Please pick a number is either 8 or bigger 😐");
      passwordLength ();
    } else if (numChars > 128) {
      alert("Please pick a number that is either 128 or smaller :D 😐");
      passwordLength ();
    } else if (isNaN(numChars)) {
      alert("Please write a numerical number that is between 8-128 🙄");
      passwordLength ();
    } else {
      alert("Thank you! You will now select whether or not you would like to include Special Characters, Numerical Numbers, Lowercase Letters, or Uppercase Letter!😁");
    }
  }

// Function that allows user to select what they want in their password

function passwordOptions() {
  specialChars = confirm("Would you like Special Characters?😏");
  numericalNums = confirm("Would you like Numbers?😏");
  upperChars = confirm("Would you like Upper Case Letters?😏");
  lowerChars = confirm("Would you like Lower Case Letters?😏");
  if (!specialChars && !numericalNums && !lowerChars && !upperChars) {
    alert ("You need to select at least one type of character!😒");
    passwordOptions();
   } else {
   alert ("Are you sure about that?🥳");  
   }
}


// after validation is complete start pushing the selected characters into possible chars array

function randomPassword() {
    
    var passwordArray = "";
    passwordLength();
    console.log(numChars);
    passwordOptions();
    console.log(specialChars);
    console.log(numericalNums);
    console.log(upperChars);
    console.log(lowerChars);
    console.log(possibleChars);
    if (specialChars === true) {
      possibleChars=possibleChars.concat(specialCharsArray) 
    }
    if (numericalNums === true) {
      possibleChars=possibleChars.concat(numericalNumsArray) 
    }
    if (lowerChars === true) {
      possibleChars=possibleChars.concat(lowerCharsArray) 
    }
    if (upperChars === true) {
      possibleChars=possibleChars.concat(upperCharsArray) 
    }
    
    for (var i = 0; i < numChars; i++) {
        passwordArray += possibleChars[Math.floor(Math.random() * possibleChars.length)];
      }
      console.log(passwordArray)
      return passwordArray;
  }

//loop through possibleChars and select a random character from the possibleChars array based on how many characters they entered into the prompt

// push() the randomly generated character to a empty array called passwordArray

// return passwordArray.join()




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = randomPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
