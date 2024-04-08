import prompt from 'prompt-sync'{ sigint: true };
import chalk from 'chalk';
import Shrugman from './Shrugman.js';



// Start a new game
const game = new Shrugman();
// Cleanup screen and display word
console.clear();
// Select category
let category = prompt('Choose categories: movies or books ');
while (!game.setCategory(category)) {
    category = prompt('Choose categories: movies or books ');
}

console.clear();
console.log(`\n${game.renderWord()}\n`);
console.log(chalk.bold.magenta(`\n${game.renderShrugMan()}\n`));

// Keep playing until the user wins or looses
while (game.isGameOn()) {
    let guess = prompt('Guess a letter ');

    while (!game.validateGuess(guess)) {
        guess = prompt('Guess a letter ');
    }

    game.update(guess);
    console.clear();
    console.log(`\n${game.renderWord()}\n`);
    console.log(chalk.bold.magenta(`\n${game.renderShrugMan()}\n`));

    if (!game.isGameOn()) {
        const isWinning = game.isWinning();
        game.updateStats(isWinning);

        if (isWinning) {
            console.log('Hey you are a winner');
        } else {
            console.log('Better luck next time: ', game.currentWord);
        }

        let anotherRound = prompt('Another round (y)? ');

        if (anotherRound === 'y') {
            game.reset()
            console.clear();
            console.log(`\n${game.renderWord()}\n`);
            console.log(chalk.bold.magenta(`\n${game.renderShrugMan()}\n`));
        } else {
            console.clear();
            console.log(chalk.bold.yellowBright(`\n${game.getFormattedStats()}\n`));
            console.log('Byeeee see you next time...');
        }
    }
}

console.log(chalk.yellow(`-- THE END --`));
