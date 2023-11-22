var generateBtn = document.querySelector("#generate");

// Assigned Variables, Arrays for possible character choices (This prompts for the password to generate)
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '£', '$', '%', '^', '&', '*', '#', '(', ')', '?', '<', '>', '=', '+', '_', '-', '.', '/', '`', '~', '|', ':', ';', '{', '}', ']', '['];

//This function is to prompt the user for password criteria 


function questions() {
  var isValid = false;
  do {

    //This will the prompt the user for password length and character types
    var length = prompt("Select password length between 8 and 128 characters");
    var askNumbers = confirm("Would you like your password to contain numbers?");
    var askLowerCase = confirm("Would you like your password to contain lower case letters?");
    var askUpperCase = confirm("Would you like your password to contain upper case letters?");
    var askSpecial = confirm("Would you like your password to include special characters?");
    // This section will allow me to store user responses 
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial,
    };

    //This section will validate user reponses 
    if (length < 8 || length > 128) {
      alert("Choose a number between 8 and 128");
    } else if (!askNumbers && !askLowerCase && !askUpperCase && !askSpecial) {
      alert("Must choose at least one type.");
    } else {
      isValid = true;
    }
  } while (!isValid);
  //This will allow me to return my users responses 
  return responses;
}

// I have created this function to join all of the users responses to then create a result of a strong password based on the users choices

function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNumbers) {
    for (var i of numbers) possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lower) possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upper) possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special) possibleCombo.push(i);
  }
//Log possible characters to the console 
  console.log(possibleCombo);
//for loop (loops through a block of code a number of times.) This will generate a password randomly by selecting characters from possibleCombo
  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
// This will log the final password to the console
  console.log(finalPassword);

  return finalPassword;
}
//This function will write the generated password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
