var generateBtn = document.querySelector("#generate");
//Get 'password' from user input
function getPass() {
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var specials = "!@#$%^&*()_+?<>";
//Disband strings into  arrays to call from later

var upperArray = upperCase.split("");
var lowerArray = lowerCase.split("");
var numArray = num.split("")
var specialsArray = specials.split("");

//*Q*
allCharacters = [];

//*Q*
password = "";

var length = prompt("How many characters would you like your password to be?            Min-8 Max-128");

if (length < 8 || length > 128) {
    alert("Password must be between defined range.");
    getPass()
  }
  if (confirm("Do you want uppercase letters?")) {
    allCharacters.push(...upperArray); //Check use '...' to send items, not whole array
  }
  if (confirm("Do you want lowercase letters?")){ //You could also use .concat method instead of .push method in your if statements but they accomplish the same thing in this instance.
    allCharacters.push(...lowerArray); //allCharacters = allCharacters.concat(lowerArray)
  }
  if (confirm("Do you want numbers?")){
    allCharacters.push(...numArray);
  }
  if (confirm("Do you want special characters IE. !, @, #, $, ?")){
    allCharacters.push(...specialsArray);
  }
  for (var i = 0; i < length; i++){

    var random = Math.floor(Math.random() * Math.floor(allCharacters.length));
    password += allCharacters[random];
  }
  
  return password;

}

generateBtn.addEventListener("click", putPass);

//Set 'password' to #password so it shows on screen
function putPass() {
    var password = getPass();
    var passwordText = document.querySelector("#password"); //id =password
    passwordText.value = password;
    
    }
//Button to copy new password
function copyPassword() {
var copyText = document.getElementById("password");
  copyText.select();

  navigator.clipboard.writeText(copyText.value);
  alert("Copied your new password: " + copyText.value);
}