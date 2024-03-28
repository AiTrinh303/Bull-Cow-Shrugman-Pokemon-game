// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 
let name = prompt('What is your name? ');
console.log(`User's input is: ${name}`);

