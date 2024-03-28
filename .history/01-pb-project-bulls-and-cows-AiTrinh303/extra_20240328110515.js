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

// 2. Function specifies the level of the game the level value will be used in the 1st function
function levelSelector() {
  level = prompt("Choose your level easy (ES), medium (M), hard (H) or extreme (EX): ");
  if (level.toLowerCase() === "easy" || level.toLowerCase() === "es"){
    level = 3;
    console.log(`\nSo easy level then guess a ${level} digit number!!Good luck ${findTheUser}`);
  } else if (level.toLowerCase() === "medium" || level.toLowerCase() === "m") {
    level = 4;
    console.log(`\nSo medium level then guess a ${level} digit number!!Good luck ${findTheUser}`);
  } else if (level.toLowerCase() === "hard" || level.toLowerCase() === "h"){
    level = 5;
    console.log(`\nSo hard level then guess a ${level} digit number!!Good luck ${findTheUser}`);
  } else if (level.toLowerCase() === "extreme" || level.toLowerCase() === "ex"){
    level = 6;
    console.log(`\nSo extreme level then guess a ${level} digit number!!you are brave ${findTheUser}`);
  } else {
    level = false;
    console.log(
      "\nThe level should be: easy (ES), medium (M), hard (H) or extreme (EX)!"
    );
  }
  return level;
}

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
        
        // Check for duplicate digits in the guess
        let hasDuplicates = (new Set(guess)).size !== level;
        // Check for duplicate digits
        if (hasDuplicates) {
          console.log("Your guess contains duplicate digits. Please try again.");
          valid = false;
          continue;
        }
      
        // Check if the length of the guess matches the level
        if (guess.length !== level) {
          console.log(`Invalid number of digits. Enter ${level}-digit number!!!`);
          valid = false;

        }
      
          // Check if the guess contains only digits
        if (guess.split("").find(char => isNaN(parseInt(char)))) {
            console.log("Only digits are allowed!!! Please try again.");
            valid = false;
        }      
      
        // If the guess is valid, return true
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



// 8. Main function of the game

function playTheGame(level) {
  let secretNumber = getRandomNumber(level);
  let attempts = 0;
  console.log("\n");
  while (true) {
    attempts++;
    guess = prompt(`Enter your guess (${level} unique digits): `);
    guess = guess.trim();

    // Check the validity of the guess
    if (!validGuess(guess, level)) {
      continue;
    }

    // if the guess is the same number as the secretNumber then you won message will be print and also the attempts
    if (secretNumber === guess) {
      console.log(
        attempts === 1
          ? `you won at your first attempt well done ${findTheUser}`
          : `You won after ${attempts} attempts very well done ${findTheUser} `
      );
      break;
    }

    // // check and count the secretNumber if has same number as the users input
    // // if the number is in the same position  then it will count a bull
    // // if the numbers is included in the guess but in different position it will count as a cow
    // let cows = 0;
    // let bulls = 0;
    // for (let i = 0; i < secretNumber.length; i++) {
    //   for (let j = 0; j < guess.length; j++) {
    //     if (secretNumber[i] === guess[j]) {
    //       if (i === j) {
    //         bulls++;
    //       } else {
    //         cows++;
    //       }
    //     } else continue;
    //   }
    // }

    let { bulls, cows } = evaluateGuess(secretNumber, guess);

    // if the user dont find anything then it will print a random cheer message
    if (bulls === 0 && cows === 0) {
      console.log("\n", randomMessage(), "\n");
    }
    console.log(
      cows === 1 ? `You found ${cows} cow &&` : `You found ${cows} cows &&`,
      bulls === 1 ? `You found ${bulls} bull` : `You found ${bulls} bulls `
    );
   
  }
}

// calling the functions and start the game
function start() {

  let level = levelSelector();
  while (level === false) {
    level = levelSelector();
  }
  playTheGame(level);
  playAgain();
}
start();