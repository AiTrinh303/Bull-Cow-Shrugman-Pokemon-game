// Bulls and Cows

const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 
let name = prompt('What is your name? ');
console.log(`User's input is: ${na  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secret = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    secret.push(digits[randomIndex]);
    digits.splice(randomIndex, 1);
  }
  return secret.join('');
}
me}`);


// Function to generate a random 4-digit unique secret number
function generateSecretNumber() {

// Function to evaluate the guess and return the number of bulls and cows
function evaluateGuess(secret, guess) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.indexOf(guess[i]) !== -1) {
      cows++;
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
