// Assignment code here
const characterAmountRange = document.getElementById ('characterAmountRange')
const characterAmountNumber = document.getElementById ('characterAmountNumber')
const includeUppercaseElement = document.getElementById ('includeUppercase')
const includeLowercaseElement = document.getElementById ('includeLowercase')
const includeNumbersElement = document.getElementById ('includeNumbers')
const includeSpecialCharactersElement = document.getElementById ('includeSpecialCharacters')
const form = document.getElementById('generate'); 
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIALCHARACTERS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
) .concat(
  arrayFromLowToHigh(91, 96)
) .concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('click', e =>{
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSpecialCharacters = includeSpecialCharactersElement.checked
  const password = generatePassword( characterAmount, includeUppercase, includeLowercase,
    includeNumbers, includeSpecialCharacters)
    passwordDisplay.innerText = password; 
})

function generatePassword(characterAmount, includeUppercase, includeLowercase,
  includeNumbers, includeSpecialCharacters) {
    let charCodes = []; 
    if (includeLowercase) charCodes = charCodes.concat (LOWERCASE_CHAR_CODES);
    if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES);
    if (includeNumbers) charCodes = charCodes.concat (NUMBERS_CHAR_CODES); 
    if (includeSpecialCharacters) charCodes = charCodes.concat (SPECIALCHARACTERS_CHAR_CODES); 

    if (charCodes.length == 0){
      alert("No character criteria selected. Select lowercase, uppercase, numbers or special characters."); 
      return;
    }
    
    const passwordCharacters = []; 
    for(let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]; 
      passwordCharacters.push(String.fromCharCode(characterCode)); 
    }
    return passwordCharacters.join('')
  }

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

// const LIST_SPECIAL_CHARS = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// const a = ["number", "upperCase", "lowerCase", "specialCharacter"]

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

  // fetch(`https://passwordwolf.com/api/?length=${len}&upper=${upper}&lower=${lower}&numbers=${numbers}&special=${special}&repeat=1`)
  // .then( res => res.json())
  // .then( res => {
  //   console.log(res); 
  // });


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// function getLength() {
//   try { 
//     let len = prompt("What is length of the password [#s 8-128 only] ?")
//     if (isNaN(len) || !(len >= 8 && len <= 128)) {
//       throw "Illegal Argument"; 
//     } 
//     return parseInt(len); 
//   }catch (exception){
//     alert("Incorrect Input. Must be a numeric value between 8-128.");
//     return getLength(); 
//   }
// }



// function getLowerCase() {
//   try { 
//     let lower = prompt("Do you want lowercase characters in your password? [Y/N] ")
//     if (lower.toUpperCase() != "Y" && lower.toUpperCase() != "N") {
//       throw "Illegal Argument"; 
//     } 
//     return lower.toUpperCase(); 
//   }catch (exception){
//     alert("Incorrect value given. Must select [Y/N]");
//     return getLowerCase(); 
//   }
// }



// function getUpperCase() {
//   try { 
//     let upper = prompt("Do you want uppercase characters in your password? [Y/N] ")
//     if (upper.toUpperCase() != "Y" && upper.toUpperCase() != "N") {
//       throw "Illegal Argument"; 
//     } 
//     return upper.toUpperCase();
//   }catch (exception){
//     alert("Incorrect value given. Must select [Y/N]");
//     return getUpperCase(); 
//   }
// }



// function getSpecialCharacters() {
//   try { 
//     let special = prompt("Do you want special characters in your password? [Y/N] ")
//     if (special.toUpperCase() != "Y" && special.toUpperCase() != "N") {
//       throw "Illegal Argument"; 
//     } 
//     return special.toUpperCase(); 
//   }catch (exception){
//     alert("Incorrect value given. Must select [Y/N]");
//     return getSpecialCharacters(); 
//   }
// }

// function getNumbers() {
//   try { 
//     let numbers = prompt("Do you want numbers in your password? [Y/N] ")
//     if (numbers.toUpperCase() != "Y" && numbers.toUpperCase() != "N") {
//       throw "Illegal Argument"; 
//     } 
//     return numbers.toUpperCase(); 
//   }catch (exception){
//     alert("Incorrect value given. Must select [Y/N]");
//     return getNumbers(); 
//   }
// }


// function getRandomPassword(length, numbers= false, lower=false, upper=false, special=false) {

//   let password = ""; 

//   let index = 0;
//   if (numbers) index++; 
//   if (lower) index++; 
//   if (upper) index++; 
//   if (special) index++; 

//   while (password.length != length) {
//       if (index == 1) {
//         if (numbers) { 
//             let numR = Math.floor(Math.random(10)) + 48; 
//             password += String.fromCharCode(numR);
//         }
        
//         if (lower) {
//           let lowerR = Math.floor(Math.random(26)) + 97; 
//           password += String.fromCharCode(lowerR);
//         }else if (upper) {
//           let upperR = Math.floor(Math.random(26)) + 97; 
//           password += String.fromCharCode(upperR);
//         }else {
//           // speical
//           password += LIST_SPECIAL_CHARS.charAt(Math.random(LIST_SPECIAL_CHARS.length)); 
//         }
//       }else {
//         if (password.length % index == 0) {
//           if (numbers && index <= 2) { 
//               addNumToPassword(password); 
//           }else if (lower) {
//             let lowerR = Math.floor(Math.random(26)) + 97; 
//             password += String.fromCharCode(lowerR);
//           }else if (upper) {
//             let upperR = Math.floor(Math.random(26)) + 97; 
//             password += String.fromCharCode(upperR);
//           }else {
//             // speical
//             password += LIST_SPECIAL_CHARS.charAt(Math.random(LIST_SPECIAL_CHARS.length)); 
//           }
//         }
//       }
//   }


//   return password; 
// }


// function addNumToPassword(pwd) {
//   let numR = Math.floor(Math.random(10)) + 48; 
//   pwd += String.fromCharCode(numR);
// }