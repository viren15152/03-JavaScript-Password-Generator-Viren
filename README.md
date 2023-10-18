# 03-JavaScript-Password-Generator-Viren
**JavaScript Password Generator Challenge**:
I have modified starter code to create an application that enables employees to generate random passwords based on the criteria that they have selected. The app will run in a browser and will feature dynamically updated HTML and CSS powered by JavaScript. 

##User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
#### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
**Screenshot**: ![Alt text](<Screenshot 2023-10-18 at 17.22.48.png>)

**The changes I have made to the JavaScript:**

Ensure the user is asked questions to determine what characters they would like in their password. 

var length = prompt("Select password length between 8 and 128 characters");  
  var askNumbers = confirm("Would you like your password to contain numbers?");
  var askLowerCase = confirm("Would you like your password to contain lower case letters?");
  var askUpperCase = confirm("Would you like your password to contain upper case letters? ");
  var askSpecial = confirm("Would you like your password to include special characters?");

