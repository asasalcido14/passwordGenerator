// Assignment Code
// these arrays are for the user's password selection
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialcharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","=","+","/","?",":",";"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
// this function is named "infograb" and is a function that will ask the user for information...like "if length", "if isNaN(lookup)"

function infograb() {
  //var length is a string that returns the length of the string
  // pars int...parses a string and returns an integer
  // 
  var length = parseInt(prompt("How many characters would you like in your password?"));
  if (length < 8) {
    alert("Password must be a minimum of 8 characters");
    return;
  }
  if (length > 129) {
    alert("Password must be a maximum of 128 characters");
    return;
  }
  if (isNaN(length)===true){
    alert("How many characters are needed in the password?");
    return;
    // NaN stands for "Not a Number" value... (isNaN) Determines whether a value is an illegal number
    //inside the var above we have "if" statements and "return" statements that prompt the computer to DO something
  }
  // these arrays are asking the user to confirm what KIND of characters they would like to use...they have to choose at least one
  var lowercasecharacter = confirm("Click okay if you would like lower case characters.");
  var uppercasecharacter = confirm ("Click okay if you would upper case characters");
  var specialcharacter = confirm ("would you like to use special characters");
  var number = confirm ( "Click okay if you would like to use numbers");

  if (lowercasecharacter===false && uppercasecharacter ===false && number===false && specialcharacter===false){
    alert("You need one type of character to create a password");
    return;
  }
  // what does this var do? Options
  var options = {
    length: length,
    lowercasecharacter: lowercasecharacter,
    uppercasecharacter: uppercasecharacter,
    specialcharacter: specialcharacter,
    number: number,


  };
  return options;

}
// here the computer generates a password using the inforamtion gathered in infograb??

function generatePassword() {
  var storage = infograb();
  var results = []; 
  var characters = []; 
  var verify = []; 
  if (storage.lowercasecharacter){
  characters = characters.concat(lowercase);
  }
  if (storage.uppercasecharacter){
  characters = characters.concat(uppercase);
  }
  if (storage.specialcharacter){
  characters = characters.concat(specialcharacters);
  }
  if (storage.number) {
  characters = characters.concat(numbers);
  }

  for (var i = 0; i < storage.length; i ++) {
    var NewCharacter = getRandomindex(characters);
    results.push(NewCharacter);
    // generate random index 
  }
  console.log(results);
  return results.join("") ;
}
// .join goes @ end of results (look up)

function getRandomindex(array){
  var RandomIndex = Math.floor(Math.random()* array.length);
  var RandomCharacter = array[RandomIndex]; 
  return RandomCharacter; 
}

// You need to ask the user how many characters they want? - how do you do that?
// What kind of character? Uppercase, lowercase, special characters, number-- yes/no to each
// you need to store each type of character -- how do you do that?
// how do you pick a random character? -- What formula can you use to do that?

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





///Console log???
/// how do I Know when I'm done? 