// Assignment code here
const LIST_SPECIAL_CHARS = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const a = ["number", "upperCase", "lowerCase", "specialCharacter"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword () {
// https://passwordwolf.com/api/?length=8&upper=on&lower=on&numbers=off&special=on&repeat=1
  let len = getLength(); 
  let upper = getUpperCase() == "Y";  
  let lower = getLowerCase() == "Y"; 
  let special = getSpecialCharacters() == "Y"; 
  let numbers = getNumbers() == "Y"; 

if (!upper && !lower && !special && !numbers) {
  alert("Please select Y to some character criteria."); 
  generatePassword(); 
  return; 
}
  
  // fetch(`https://passwordwolf.com/api/?length=${len}&upper=${upper}&lower=${lower}&numbers=${numbers}&special=${special}&repeat=1`)
  // .then( res => res.json())
  // .then( res => {
  //   console.log(res); 
  // });

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getLength() {
  try { 
    let len = prompt("What is length of the password [#s 8-128 only] ?")
    if (isNaN(len) || !(len >= 8 && len <= 128)) {
      throw "Illegal Argument"; 
    } 
    return parseInt(len); 
  }catch (exception){
    alert("Incorrect Input. Must be a numeric value between 8-128.");
    return getLength(); 
  }
}



function getLowerCase() {
  try { 
    let lower = prompt("Do you want lowercase characters in your password? [Y/N] ")
    if (lower.toUpperCase() != "Y" && lower.toUpperCase() != "N") {
      throw "Illegal Argument"; 
    } 
    return lower.toUpperCase(); 
  }catch (exception){
    alert("Incorrect value given. Must select [Y/N]");
    return getLowerCase(); 
  }
}



function getUpperCase() {
  try { 
    let upper = prompt("Do you want uppercase characters in your password? [Y/N] ")
    if (upper.toUpperCase() != "Y" && upper.toUpperCase() != "N") {
      throw "Illegal Argument"; 
    } 
    return upper.toUpperCase();
  }catch (exception){
    alert("Incorrect value given. Must select [Y/N]");
    return getUpperCase(); 
  }
}



function getSpecialCharacters() {
  try { 
    let special = prompt("Do you want special characters in your password? [Y/N] ")
    if (special.toUpperCase() != "Y" && special.toUpperCase() != "N") {
      throw "Illegal Argument"; 
    } 
    return special.toUpperCase(); 
  }catch (exception){
    alert("Incorrect value given. Must select [Y/N]");
    return getSpecialCharacters(); 
  }
}

function getNumbers() {
  try { 
    let numbers = prompt("Do you want numbers in your password? [Y/N] ")
    if (numbers.toUpperCase() != "Y" && numbers.toUpperCase() != "N") {
      throw "Illegal Argument"; 
    } 
    return numbers.toUpperCase(); 
  }catch (exception){
    alert("Incorrect value given. Must select [Y/N]");
    return getNumbers(); 
  }
}


function getRandomPassword(length, numbers= false, lower=false, upper=false, special=false) {

  let password = ""; 

  let index = 0;
  if (numbers) index++; 
  if (lower) index++; 
  if (upper) index++; 
  if (special) index++; 

  while (password.length != length) {
      if (index == 1) {
        if (numbers) { 
            let numR = Math.floor(Math.random(10)) + 48; 
            password += String.fromCharCode(numR);
        }
        
        if (lower) {
          let lowerR = Math.floor(Math.random(26)) + 97; 
          password += String.fromCharCode(lowerR);
        }else if (upper) {
          let upperR = Math.floor(Math.random(26)) + 97; 
          password += String.fromCharCode(upperR);
        }else {
          // speical
          password += LIST_SPECIAL_CHARS.charAt(Math.random(LIST_SPECIAL_CHARS.length)); 
        }
      }else {
        if (password.length % index == 0) {
          if (numbers && index <= 2) { 
              addNumToPassword(password); 
          }else if (lower) {
            let lowerR = Math.floor(Math.random(26)) + 97; 
            password += String.fromCharCode(lowerR);
          }else if (upper) {
            let upperR = Math.floor(Math.random(26)) + 97; 
            password += String.fromCharCode(upperR);
          }else {
            // speical
            password += LIST_SPECIAL_CHARS.charAt(Math.random(LIST_SPECIAL_CHARS.length)); 
          }
        }
      }
  }


  return password; 
}


function addNumToPassword(pwd) {
  let numR = Math.floor(Math.random(10)) + 48; 
  pwd += String.fromCharCode(numR);
}