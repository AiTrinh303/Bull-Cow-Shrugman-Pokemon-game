const prompt = require('prompt-sync')({ sigint: true });


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

// Function to get a random message when guess has no bulls and no cows
function getRandomMessage() {
  const messages = [
    "Keep trying! You're getting there!",
    "Don't give up! The secret number is still eluding you.",
    "Nice try! Let's see if you can get closer next time.",
    "You're not quite there yet! Keep guessing!",
    "No bulls or cows this time! But you're on the right track!"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Main game function
function playGame() {
  console.log("Let's play Bulls and Cows!");

  let playerName = prompt('Enter your name (or press Enter for "Player"): ') || "Player";
  let totalGames = 0;
  let totalAttempts = 0;
  let playAgain = 'y';

  while (playAgain.toLowerCase() === 'y') {
    totalGames++;
    console.log(`\nGame ${totalGames}:`);

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
      totalAttempts++;

      // Evaluate the guess and display the result
      const { bulls, cows } = evaluateGuess(secretNumber, guess);

      console.log(`Result for guess ${guess}: ${bulls} bulls and ${cows} cows.`);

      // Check if the player guessed correctly
      if (bulls === 4) {
        console.log(`Congratulations, ${playerName}! You've guessed the secret number ${secretNumber} in ${attempts} attempts.`);
        break;
      }

      // Random message when no bulls or cows
      if (bulls === 0 && cows === 0) {
        console.log(getRandomMessage());
      }
    }

    playAgain = prompt('Do you want to play another round? (y/n): ');
  }

  console.log(`\nTotal games played: ${totalGames}`);
  console.log(`Total attempts: ${totalAttempts}`);
  console.log(`Thank you for playing, ${playerName}! Goodbye.`);
}

// Start the game
playGame();