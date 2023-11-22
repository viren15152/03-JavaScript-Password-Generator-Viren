// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned Variables, Arrays for possible character choices
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '£', '$', '%', '^', '&', '*', '#', '(', ')', '?', '<', '>', '=', '+', '_', '-', '.', '/', '`', '~', '|', ':', ';', '{', '}', ']', '['];

function questions() {
  var isValid = false;
  do {
    var length = prompt("Select password length between 8 and 128 characters");
    var askNumbers = confirm("Would you like your password to contain numbers?");
    var askLowerCase = confirm("Would you like your password to contain lower case letters?");
    var askUpperCase = confirm("Would you like your password to contain upper case letters?");
    var askSpecial = confirm("Would you like your password to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial,
    };
    if (length < 8 || length > 128) {
      alert("Choose a number between 8 and 128");
    } else if (!askNumbers && !askLowerCase && !askUpperCase && !askSpecial) {
      alert("Must choose at least one type.");
    } else {
      isValid = true;
    }
  } while (!isValid);
  return responses;
}

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

  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  console.log(finalPassword);

  return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);
