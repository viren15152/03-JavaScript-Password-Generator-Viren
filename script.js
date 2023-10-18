// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assigned Variables, I've created Arrays for the possible character choices,(This prompts for the password to generate)
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '£', '$', '%', '^', '&', '*', '#', '(', ')', '?', '<', '>', '=', '+', '_', '-', '.', '/', '`', '~', '|', ':', ';', '{', '}', ']', '['];



//I've created a function that wil ensure the user is requested to confirm which options they would like. I've also included conditional statements to make certain the minimum option requirements were made. 

function questions() {
  var isValid = false;
  do {
  var length = prompt("Select password length between 8 and 128 characters");  
  var askNumbers = confirm("Would you like your password to contain numbers?");
  var askLowerCase = confirm("Would you like your password to contain lower case letters?");
  var askUpperCase = confirm("Would you like your password to contain upper case letters? ");
  var askSpecial = confirm("Would you like your password to include special characters?");
  var responses = {
    length: length,
    askNumbers: askNumbers,
    askLowerCase: askLowerCase,
    askUpperCase: askUpperCase,
    askSpecial: askSpecial,
  }
  if((length < 8)||(length > 128))
  alert("Choose number between 8 and 128");
  else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
  alert("Must choose at least one type.");
  else
  isValid = true;

} while(!isValid);
return responses;


 //I have created this function to join all of the users responses to then create a result of a strong password as per the user story.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";


  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }

}

//for loop (loops through a block of code a number of times. (Not sure what the problem is in this section will address when I resubmit)
console.log(possibleCombo);


for (var i = 0; i < passwordOptions.length; i++) {
  finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  
}

console.log(finalPassword);

return final.Password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Generator:
//Create Variables to store all options 
//1 Ask Me What length the password I want

// Use prompt to get password length
  //check to make sure number is between 8-128

//2 Do you want special characters?
 //use confirm 
//3 Do you want numbers?
 //use confirm
//4 Do you want upper
 //use confirm
//5 Lower case letters 
 //use confirm

//6 generate password
// create array that holds users preferences 
//look into random Maths.random to randomize selection 
//loop to select a random character from the array
//7 Display it on html provided