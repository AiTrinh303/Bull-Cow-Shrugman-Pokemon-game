const prompt = require("prompt-sync")({ sigint: true });

// storing variables
let rulesMessage = `RULES: you enter your guess code, computer compares it with the secret code and gives you two clues: numbers of "bulls" and "cows".
What are bulls and cows?
- A 'cow' is a digit which is present in both the codes in the different position.
- A 'bull' is a digit which is present in both the codes in the same position.`;


let level = "";
let findTheUser = prompt("what's your name: ");
askForTheRules();

//1. Function generate a random number without repetitive number the length of the number is given from the user

function getRandomNumber(level) {
  let numberPick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numberPick
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, level);
}

// // 2. Function select the level of the game 
// function levelSelector() {
//   level = prompt("Choose your level easy (ES), medium (M), hard (H) or extreme (EX): ");
//   if (level.toLowerCase() === "easy" || level.toLowerCase() === "es"){
//     level = 3;
//     console.log(`\nSo easy level then guess a ${level} digit number!!Good luck ${findTheUser}`);
//   } else if (level.toLowerCase() === "medium" || level.toLowerCase() === "m") {
//     level = 4;
//     console.log(`\nSo medium level then guess a ${level} digit number!!Good luck ${findTheUser}`);
//   } else if (level.toLowerCase() === "hard" || level.toLowerCase() === "h"){
//     level = 5;
//     console.log(`\nSo hard level then guess a ${level} digit number!!Good luck ${findTheUser}`);
//   } else if (level.toLowerCase() === "extreme" || level.toLowerCase() === "ex"){
//     level = 6;
//     console.log(`\nSo extreme level then guess a ${level} digit number!!you are brave ${findTheUser}`);
//   } else {
//     level = false;
//     console.log(
//       "\nThe level should be: easy (ES), medium (M), hard (H) or extreme (EX)!"
//     );
//   }
//   return level;
// }

// Function to select the level of the game with configurable conditions
function levelSelector() {
    let level, maxAttempts;
    
    // Prompts the user to choose a level
    const userInput = prompt("Choose your level: easy (ES), easy+ (ES+), medium (M), medium+ (M+), hard (H), hard+ (H+), extreme (EX), or extreme+ (EX+): ");
    
    // Set level and maxAttempts based on user input
    switch (userInput.toLowerCase()) {
      case "easy":
      case "es":
        level = 3; // 3-digit number
        maxAttempts = Infinity; // No limit on attempts
        console.log(`\nEasy level: Guess a ${level}-digit number! No limit on attempts. Good luck!`);
        break;
      
      case "easy+":
      case "es+":
        level = 3; // 3-digit number
        maxAttempts = 10; // 10 attempts limit
        console.log(`\nEasy+ level: Guess a ${level}-digit number! You have ${maxAttempts} attempts. Good luck!`);
        break;
      
      case "medium":
      case "m":
        level = 4; // 4-digit number
        maxAttempts = Infinity; // No limit on attempts
        console.log(`\nMedium level: Guess a ${level}-digit number! No limit on attempts. Good luck!`);
        break;
      
      case "medium+":
      case "m+":
        level = 4; // 4-digit number
        maxAttempts = 15; // 15 attempts limit
        console.log(`\nMedium+ level: Guess a ${level}-digit number! You have ${maxAttempts} attempts. Good luck!`);
        break;
      
      case "hard":
      case "h":
        level = 5; // 5-digit number
        maxAttempts = Infinity; // No limit on attempts
        console.log(`\nHard level: Guess a ${level}-digit number! No limit on attempts. Good luck!`);
        break;
      
      case "hard+":
      case "h+":
        level = 5; // 5-digit number
        maxAttempts = 20; // 20 attempts limit
        console.log(`\nHard+ level: Guess a ${level}-digit number! You have ${maxAttempts} attempts. Good luck!`);
        break;
      
      case "extreme":
      case "ex":
        level = 6; // 6-digit number
        maxAttempts = Infinity; // No limit on attempts
        console.log(`\nExtreme level: Guess a ${level}-digit number! No limit on attempts. Good luck!`);
        break;
      
      case "extreme+":
      case "ex+":
        level = 6; // 6-digit number
        maxAttempts = 30; // 30 attempts limit
        console.log(`\nExtreme+ level: Guess a ${level}-digit number! You have ${maxAttempts} attempts. Good luck!`);
        break;
      
      default:
        level = false;
        maxAttempts = 0;
        console.log("\nThe level should be: easy (ES), easy+ (ES+), medium (M), medium+ (M+), hard (H), hard+ (H+), extreme (EX), or extreme+ (EX+)!");
    }
    
    // Return an object containing level and maxAttempts
    return level;
  }
  
//   // Example usage:
//   const selectedLevel = levelSelector();
//   console.log("Selected Level:", selectedLevel.level);
//   console.log("Max Attempts:", selectedLevel.maxAttempts);
  

// 3. Function will ask the user if knows the rules

function askForTheRules() {
  let question = prompt(`Do you know the rules of the game ${findTheUser} Y/N: `);
  console.clear();
  if (question.toUpperCase() === "N" || question.toUpperCase() === "NO"){
    console.log(`\n${rulesMessage}\n\nLet´s go ${findTheUser}\n`);
  } else {
    console.log(`\nLet´s go ${findTheUser}`);
  }
}

// 4. function generate a random message from the array:cheerMessage
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

// 5. Function ask the user if he/she want to play again
function playAgain() {
  let playAgainTheGame = "";
  while (
    !(
      playAgainTheGame.toUpperCase() === "Y" ||
      playAgainTheGame.toUpperCase() === "N"
    )
  ) {
    playAgainTheGame = prompt("Do you want to play again? Y/N: ");
    if (playAgainTheGame.toUpperCase() === "Y") {
      return start();
    } else if (playAgainTheGame.toUpperCase() === "N") {
      console.log(`\n Thanks for playing ${findTheUser} `);
      return
    }else{
    console.log(
      `Please check the input for Y for yes and N for no,any other input is not valid `
    );}
  }  
}

// 6. Function checks for valid input numbers from the user (no repetitive numbers, only numbers, the length of the number should be the same as the level)
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

// // 8. Main function of the game

// function playTheGame(level) {
//   let secretNumber = getRandomNumber(level);
//   let attempts = 0;
//   console.log("\n");
//   while (true) {
//     attempts++;
//     guess = prompt(`Enter your guess (${level} unique digits): `);
//     guess = guess.trim();

//     // Check the validity of the guess
//     if (!validGuess(guess, level)) {
//       continue;
//     }

//     // if the guess is the same number as the secretNumber then you won message will be print and also the attempts
//     if (secretNumber === guess) {
//       console.log(
//         attempts === 1
//           ? `you won at your first attempt well done ${findTheUser}`
//           : `You won after ${attempts} attempts very well done ${findTheUser} `
//       );
//       break;
//     }

//     let { bulls, cows } = evaluateGuess(secretNumber, guess);
//     // if the user don't find anything then it will print a random cheer message or if the user find a cow or a bull it will print the number of cows and bulls
//     if (bulls === 0 && cows === 0) {
//       console.log("\n", randomMessage(), "\n");
//     }
//     console.log(
//       cows === 1 ? `You found ${cows} cow &&` : `You found ${cows} cows &&`,
//       bulls === 1 ? `You found ${bulls} bull` : `You found ${bulls} bulls `
//     );   
//   }
// }

// 8. Main function of the game
function playTheGame(level, maxAttempts) {
    let secretNumber = getRandomNumber(level);
    let attempts = 0;
    console.log("\n");

    while (attempts <= maxAttempts) {
      attempts++;
      let guess = prompt(`Enter your guess (${level} unique digits): `);
      guess = guess.trim();
  
      // Check the validity of the guess
      if (!validGuess(guess, level)) {
        continue;
      }
  
      // if the guess is the same number as the secretNumber then you won message will be print and also the attempts
      if (secretNumber === guess) {
        console.log(
          attempts === 1
            ? `You won at your first attempt! Well done ${findTheUser}`
            : `You won after ${attempts} attempts! Very well done ${findTheUser} `
        );
        return; // End the game
      }
  
      let { bulls, cows } = evaluateGuess(secretNumber, guess);
      // if the user don't find anything then it will print a random cheer message or if the user find a cow or a bull it will print the number of cows and bulls
      if (bulls === 0 && cows === 0) {
        console.log("\n", randomMessage(), "\n");
      }
      console.log(
        cows === 1 ? `You found ${cows} cow &&` : `You found ${cows} cows &&`,
        bulls === 1 ? `You found ${bulls} bull` : `You found ${bulls} bulls `
      );   
    }  
    // If the loop ends, it means the user did not guess the number within maxAttempts
    console.log(`\nGame over! You couldn't guess the number in ${maxAttempts} attempts. The secret number was: ${secretNumber}`);
  }


// 9. Function start the game
function start() {
    const { level, maxAttempts } = levelSelector();
  while (level === false) {
    level = levelSelector();
  }
  playTheGame(level, maxAttempts);
  playAgain();
}
start();