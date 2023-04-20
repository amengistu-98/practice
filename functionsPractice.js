// Write a function called add7 that takes one number and returns that number + 7.
let add7 = (number) => number + 7;

// Write a function called multiply that takes 2 numbers and returns their product.
let multiply = (number1, number2) => number1 * number2;

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(string) {
    let restOfString = string.slice(1);
    let firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    restOfString = restOfString.toLowerCase();
    return firstLetter + restOfString;
}
// Write a function called lastLetter that takes a string and returns the very last letter of that string.
let  lastLetter = (string) => string.charAt(string.length - 1);

// logging each function into console
console.log(add7(2));
console.log(multiply(9,2));
console.log(capitalize("johnson"));
console.log(lastLetter("Jupiter"));