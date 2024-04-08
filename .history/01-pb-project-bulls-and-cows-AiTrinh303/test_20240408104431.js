//not finished yet - make the game with more levels and more options 
const prompt = require("prompt-sync")({ sigint: true });

// Storing variables
let rulesMessage = `RULES: you enter your guess code, computer compares it with the secret code and gives you two clues: numbers of "bulls" and "cows".
What are bulls and cows?
- A 'cow' is a digit which is present in both the codes in the different position.
- A 'bull' is a digit which is present in both the codes in the same position.
In the game, you can get a hint by typing 'hint' or 'h' to get a random digit of the secret code that you haven't guessed yet.`;

let UserName = prompt("What's your name: ");

// 1. Function will ask the user if they know the rules
function askForTheRules() {
  let question = prompt(`Do you know the rules of the game ${UserName}? Y/N: `);
  console.clear();
  if (question.toUpperCase() === "N" || question.toUpperCase() === "NO") {
    console.log(`\n${rulesMessage}\n\nLet's go ${UserName}\n`);
  } else {
    console.log(`\nLet's go ${UserName}`);
  }
}
askForTheRules();

// 2. Function to create a secret number
function getRandomNumber(level) {
  let numberPick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numberPick
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .join("") // Join the array to a string
    .slice(0, level); // Get the first n digits
}

// 3. Function to select the level of the game
function levelSelector() {
  let levelArray = [0, 0];
  // Prompts the user to choose a level
  const userInput = prompt("Choose your level: easy (ES), easy+ (ES+), medium (M), medium+ (M+), hard (H), hard+ (H+), extreme (EX), or extreme+ (EX+): ");

  // Set level and maxAttempts based on user input
  switch (userInput.toLowerCase()) {
    case "easy":
    case "es":
      levelArray[0] = 3; // 3-digit number
      levelArray[1] = Infinity; // No limit on attempts
      console.log(`\nEasy level: Guess a ${levelArray[0]}-digit number! No limit on attempts. Good luck!`);
      break;

    case "easy+":
    case "es+":
      levelArray[0] = 3; // 3-digit number
      levelArray[1] = 15; // 15 attempts limit
      console.log(`\nEasy+ level: Guess a ${levelArray[0]}-digit number! You have ${levelArray[1]} attempts. Good luck!`);
      break;

    case "medium":
    case "m":
      levelArray[0] = 4; // 4-digit number
      levelArray[1] = Infinity; // No limit on attempts
      console.log(`\nMedium level: Guess a ${levelArray[0]}-digit number! No limit on attempts. Good luck!`);
      break;

    case "medium+":
    case "m+":
      levelArray[0] = 4; // 4-digit number
      levelArray[1] = 25; // 25 attempts limit
      console.log(`\nMedium+ level: Guess a ${levelArray[0]}-digit number! You have ${levelArray[1]} attempts. Good luck!`);
      break;

    case "hard":
    case "h":
      levelArray[0] = 5; // 5-digit number
      levelArray[1] = Infinity; // No limit on attempts
      console.log(`\nHard level: Guess a ${levelArray[0]}-digit number! No limit on attempts. Good luck!`);
      break;

    case "hard+":
    case "h+":
      levelArray[0] = 5; // 5-digit number
      levelArray[1] = 35; // 35 attempts limit
      console.log(`\nHard+ level: Guess a ${levelArray[0]}-digit number! You have ${levelArray[1]} attempts. Good luck!`);
      break;

    case "extreme":
    case "ex":
      levelArray[0] = 6; // 6-digit number
      levelArray[1] = Infinity; // No limit on attempts
      console.log(`\nExtreme level: Guess a ${levelArray[0]}-digit number! No limit on attempts. Good luck!`);
      break;

    case "extreme+":
    case "ex+":
      levelArray[0] = 6; // 6-digit number
      levelArray[1] = 45; // 45 attempts limit
      console.log(`\nExtreme+ level: Guess a ${levelArray[0]}-digit number! You have ${levelArray[1]} attempts. Good luck!`);
      break;

    default:
      levelArray[0]= false;
      levelArray[1] = 0;
      console.log("\nThe level should be: easy (ES), easy+ (ES+), medium (M), medium+ (M+), hard (H), hard+ (H+), extreme (EX), or extreme+ (EX+)!");
  }

  return levelArray;
}



// 4. Function to generate a random message from the array: cheerMessage
function randomMessage() {
  const cheerMessage = [
    "Keep trying! You're getting there!",
    "Don't give up! The secret number is still eluding you.",
    "Nice try! Let's see if you can get closer next time.",
    "You're not quite there yet! Keep guessing!",
    "No bulls or cows this time! But you're on the right track!",
    "Just a friendly reminder that I believe in you.",
    "I predict a big win at the next guess",
    "Crossing my fingers for you! Go, go, go",
  ];
  return cheerMessage[Math.floor(Math.random() * cheerMessage.length)];
}

// 5. Function to ask the user if they want to play again
function playAgain() {
  let playAgainTheGame = "";
  while (!(playAgainTheGame.toUpperCase() === "Y" || playAgainTheGame.toUpperCase() === "N")) {
    playAgainTheGame = prompt("Do you want to play again? Y/N: ");
    if (playAgainTheGame.toUpperCase() === "Y") {
      return start();
    } else if (playAgainTheGame.toUpperCase() === "N") {
      console.log(`\n Thanks for playing ${UserName} `);
      break;
    } else {
      console.log(`Please check the input for 'Y' for 'yes' and 'N' for 'no', any other input is not valid.`);
    }
  }
}

// 6. Function checks for valid input numbers from the user (the length of the number should be the same as the level, only numbers, no repeat numbers)
function validGuess(guess, level) {
  let valid = true;
  if (guess.length !== level || isNaN(Number(guess)) || new Set(guess).size !== level) {
    console.log('Invalid guess. Please enter again.');
    valid = false;
  }
  return valid;
}

// 7. Function to evaluate the guess and return the number of bulls and cows
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

// 8. Function to get a hint - give the random digits of the secret number that the user hasn't guessed yet
function getHint(secret, guessed) {
  const remainingDigits = secret.split('').filter(digit => !guessed.includes(digit));
  if (remainingDigits.length === 0) {
    return "All digits have been guessed! No more hints available.";
  }
  const randomIndex = Math.floor(Math.random() * remainingDigits.length);
  return remainingDigits[randomIndex];
}

// 9. PlayTheGame function
function playTheGame(levelArray) {
  let secretNumber = getRandomNumber(levelArray[0]);
  let attempts = 0;  // Track the number of attempts
  let hintCount = 0; // Track the number of hints used
  let guessedDigits = [];
  let maxAttempts = levelArray[1];

  console.log("\n");

  while (attempts < maxAttempts) {
    attempts++;
    let guess = prompt(`Enter your guess (${levelArray[0]} unique digits), or type 'hint' or 'h' to get a hint: `);
    guess = guess.trim();

    // Check if user wants a hint
    if (guess.toLowerCase() === 'hint' || guess.toLowerCase() === 'h') {
      if (hintCount <= levelArray[0] - 1) { // Allow hint if not used more than level - 1 times
        hintCount++;
        let hint = getHint(secretNumber, guessedDigits);
        console.log(`Hint: One of the remaining digits is '${hint}'`);
        continue;
      } else {
        console.log(`You've used all available hints! Make your guess.`);
        continue;
      }
    }

    // Check the validity of the guess
    if (!validGuess(guess, levelArray[0])) {
      continue;
    }

    guessedDigits.push(...guess); // Store guessed digits

    let { bulls, cows } = evaluateGuess(secretNumber, guess);

  // if the user don't find anything then it will print a random cheer message or if the user find a cow or a bull it will print the number of cows and bulls
  if (bulls === 0 && cows === 0) {
    console.log("\n", randomMessage(), "\n"); }
    console.log(
      cows === 1 ? `You found ${cows} cow &&` : `You found ${cows} cows &&`,
      bulls === 1 ? `You found ${bulls} bull` : `You found ${bulls} bulls `
      );

    // Check if the guess is correct
    if (secretNumber === guess) {
      console.log(
        attempts === 1
          ? `\nYou won at your first attempt! Well done!`
          : `\nYou won after ${attempts} attempts with ${hintCount} hints! Very well done!`
      );

      // Ask if player wants to play again
      let playAgainTheGame = "";
      while (playAgainTheGame.toUpperCase() !== "Y" && playAgainTheGame.toUpperCase() !== "N") {
        playAgainTheGame = prompt("Do you want to play again? 'Y/N': ");
        if (playAgainTheGame.toUpperCase() === "Y") {
          console.clear();
          start();
        } else if (playAgainTheGame.toUpperCase() === "N") {
          console.log("\nThanks for playing!");
          return;
        } else {
          console.log("Invalid input. Please enter 'Y' or 'N'.");
        }
      }
      break;
    }
  }

  // If player has not won within maxAttempts
  if (attempts === levelArray[1]) {
    console.log(`\nSorry, you didn't guess the number within ${levelArray[1]} attempts. The number was ${secretNumber}.`);
    let playAgainTheGame = "";
    while (playAgainTheGame.toUpperCase() !== "Y" && playAgainTheGame.toUpperCase() !== "N") {
      playAgainTheGame = prompt("Do you want to play again? 'Y/N': ");
      if (playAgainTheGame.toUpperCase() === "Y") {
        console.clear();
        start();
      } else if (playAgainTheGame.toUpperCase() === "N") {
        console.log("\nThanks for playing!");
        return;
      } else {
        console.log("Invalid input. Please enter 'Y' or 'N'.");
      }
    }
  }
}

// 10. Function to start the game
function start() {
  
  levelSelector();
  // while (levelSelector()[0] === false) {
  //   [selectedLevel, levelArray[1]] = levelSelector();
  // }
  playTheGame(level, levelArray[1]);
  playAgain();
}

// const [selectedLevel, levelArray[1]] = levelSelector(levelArray);
// if (selectedLevel) {
//   console.log("You selected:", selectedLevel);
//   console.log("You have", levelArray[1], "attempts to guess the number.");
// } else {
//   console.log("Invalid level selected.");
// }
start();
