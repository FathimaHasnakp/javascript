// condition ? value-if-true : value-if-false; //

const prompt = require('prompt-sync')(); 
let age = prompt("enter the age :");
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
