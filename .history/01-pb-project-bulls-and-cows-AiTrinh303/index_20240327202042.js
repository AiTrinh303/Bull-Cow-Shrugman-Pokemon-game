// Bulls and Cows

const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 
let name = prompt('What is your name? ');
console.log(`User's input is: ${name}`);

//=================================================================================================================================================
// Function to generate a random 4-digit unique secret number
function generateSecretNumber() {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secret = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    secret.push(digits[randomIndex]);
    digits.splice(randomIndex, 1);
  }
  return secret.join('');
}

//use reduce method to generate secret number
// function generateSecretNumber() {
//   return [...Array(10).keys()].sort(() => 0.5 - Math.random()).slice(0, 4).join('');
// }
// 1. Array(10) creates an array of length 10. However, this array is empty, meaning it does not have any values in it.

// 2. .keys() is a method available on arrays which returns an iterator that produces the keys (indices) of the array.

// In this case, it will produce the keys 0 through 9.

// So, Array(10).keys() would give you an iterator for the keys 0 to 9. The ... spread syntax is then used to spread these keys into an array.

// So ...Array(10).keys() essentially expands into [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], which is an array of numbers from 0 to 9.

// This array is then used in the reduce method to generate the secret number by shuffling the digits.

// 3. The sort method is used to shuffle the array. The sort method takes a comparison function as an argument. This function is used to compare two elements of the array and determine their order.

//=================================================================================================================================================
// Function to evaluate the guess and return the number of bulls and cows
function evaluateGuess(secret, guess) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++; // If the digit is in the correct position, it's a bull
    } else if (secret.indexOf(guess[i]) !== -1) {
      cows++; // If the digit is in the secret number but not in the correct position, it's a cow 
    }
  }
  return { bulls, cows };
}




// Main game function
function playGame() {
  console.log("Let's play Bulls and Cows!");

  const secretNumber = generateSecretNumber();
  let attempts = 0;

  while (true) {
    let guess = prompt('Enter your guess (4 unique digits): ');
    guess = guess.trim();

    // Check the validity of the guess
    if (guess.length !== 4 || isNaN(Number(guess)) || new Set(guess).size !== 4) {
      console.log('Invalid guess. Please enter 4 unique digits.');
      continue;
    }

    attempts++;

    // Evaluate the guess and display the result
    const { bulls, cows } = evaluateGuess(secretNumber, guess);

    console.log(`Result for guess ${guess}: ${bulls} bulls and ${cows} cows.`);

    // Check if the player guessed correctly
    if (bulls === 4) {
      console.log(`Congratulations! You've guessed the secret number ${secretNumber} in ${attempts} attempts.`);
      break;
    }
  }
}

// Start the game
playGame();
