// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
    return number + 7;
}
// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(number1, number2) {
    return number1 * number2;
}
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
function lastLetter(string) {
    return string.charAt(string.length - 1);;
}
console.log(lastLetter("Jupiter"));