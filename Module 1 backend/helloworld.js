const Sentiment = require('sentiment')
const sentiment = new Sentiment();

const result = sentiment.analyze("I love programming!");

console.log(result);

console.log("Hello Rose!");
function sum(a, b) {
return a+b
}
function divide(a, b) {
    return a/b
}
function subtract(a, b) {
    return a-b
}
function multiply(a, b) {
    return a*b
}
function name(name) {
    return "Hello " + name + "!";
}
console.log(sum(1,2));
console.log(divide(10,2));
console.log(subtract(5,3));
console.log(multiply(4,6));
console.log(name("Rose"));

// Test cases for the functions
if(sum(1,2)!=4) {
    console.log("Error: sum function is not working correctly.");
}

// Array manipulation
let scores = [85, 90, 78, 92, 88];
// Create a new array with the first score removed
console.log(scores); // 1
console.log(scores); // [90, 78, 92, 88]
// Add a new score to the end of the array
scores.push(95);
console.log(scores); // [90, 78, 92, 88, 95]
// Add a new score to the beginning of the array
console.log(scores); // [95, 90, 78, 92, 88]
scores[0] = 96;
scores[4] = 100;
// Remove the last score from the array
console.log(scores); // [96, 90, 78, 92, 100]