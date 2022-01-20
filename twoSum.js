/*
This program will run on the command line if you have NodeJS runtime installed.
To run, type 'node twoSum' and the program will prompt you for 2 numbers and return their sum.
*/

const prompt = require("prompt-sync")();

//input from user
const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));

//calculate sum
const sum = num1 + num2;

//output to terminal using template literals
console.log(`Sum of ${num1} and ${num2} is ${sum} `);
