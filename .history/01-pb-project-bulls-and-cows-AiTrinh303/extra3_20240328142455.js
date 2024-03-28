// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something 


let playerName = prompt('What is your name? ');
if (playerName === '') {
    playerName = 'Stranger'
}
console.log('Hello, ', playerName)
let noOfGames = 1

let level = prompt('Choose your difficulty level: 1: Easy / 2: Hard ');


bullsAndCows(level)

function bullsAndCows(difficulty) {
    let howManyCanDo;
    if (difficulty === "1") {
        howManyCanDo = Infinity
    } else if (difficulty === "2"){
        howManyCanDo = 5
    }

        let secretNumber = ''
        while (secretNumber.length<4) {
            let randomNumber = Math.floor(Math.random() * 9)
            
            if (!secretNumber.includes(randomNumber)){
                
                secretNumber += randomNumber
            }
            
        }
        
        
        let noOfAttempts = 0
    
        const messageArray = ['Better luck next time!', 'No hits, haha!', 'No bulls, you bull!']
        
        let randomMessage = messageArray[Math.floor(Math.random()*messageArray.length)]
        
        console.log(secretNumber)
    
        let playerGuess = prompt('Guess a number: ');
        noOfAttempts++
        console.log(`User's input is: ${playerGuess} and your number of attempts is ${noOfAttempts}`);
        
        
        
        
        let bull = 0
        let cow = 0
        while (bull < 4 && playerGuess !== secretNumber && noOfAttempts < howManyCanDo) {
            
            if (playerGuess.length !== 4) {
                console.log('You need to enter a 4-digit number')
                playerGuess = prompt('Guess a number: ');
                noOfAttempts++
                console.log(`User's input is: ${playerGuess} and your number of attempts is ${noOfAttempts}`);
            } else {
                bull = 0
                cow = 0
                for(let i = 0; i < playerGuess.length; i++){
                    if(playerGuess[i]===secretNumber[i]) {
                        bull++
                    } else if (secretNumber.includes(playerGuess[i])) {
                        cow++
                    } 
                }
                
               
            
                if (playerGuess === secretNumber) {
                    console.log(`Congratulations, ${playerName}, you won!`)
                    let nextGame = prompt('Do you want to play again? Y/N: ');
                    if(nextGame === 'Y') {
                        bullsAndCows();
                    } else {
    
                        break
                    }
                }
    
                if (bull === 0 && cow === 0) {
                    console.log(randomMessage)
                    playerGuess = prompt('Guess a number: ');
                    noOfAttempts++
                    console.log(`User's input is: ${playerGuess} and your number of attempts is ${noOfAttempts}`);
                } else {
        
                    console.log(`Hint: ${bull} bull and ${cow} cow`)
                    playerGuess = prompt('Guess a number: ');
                    noOfAttempts++
                    console.log(`User's input is: ${playerGuess} and your number of attempts is ${noOfAttempts}`);
                }
            } 
        }
    
        if (noOfAttempts === howManyCanDo ) {
            console.log('Game Over')
        }
    
        if (playerGuess === secretNumber) {
            console.log(`Congratulations, ${playerName}, you won!`)
            let nextGame = prompt('Do you want to play again? Y/N: ');
            if(nextGame === 'Y') {
                noOfGames++
                console.log(`This is your ${noOfGames}. game`)
                bullsAndCows();
            } 
        }
    }
noOfGames