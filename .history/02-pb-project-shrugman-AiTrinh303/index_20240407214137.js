import prompt from 'prompt-sync';
const promptSync = prompt();
import chalk from 'chalk';
import Shrugman from './Shrugman.js';

const options = {
    movies: [
        'Avatar',
        'Inception',
        'Titanic',
        'The Godfather',
        'Forrest Gump',
        'Saving Private Ryan',
        'Braveheart',
        'The Blind Side',
        'Love Actually',
        'Onward',
        'The Invisible Man',
        'The Night Clerk',
        'Vanguard'
    ]};


//Main function
function playGame() {
    const game = new Shrugman(options); //create an instance of the Shrugman class using the options object
    console.clear();

    //let category = promptSync('Choose a category: movies, books, or quotes: ');

    //check if the category is valid
    while (!game.setCategory(category.toLowerCase())) {
        category = promptSync('Invalid category. Choose movies, books, or quotes: ');
    }

    console.clear();
    console.log(chalk.greenBright(`\n${game.renderWord()}\n`));
    console.log(chalk.bold.magenta(`\n${game.renderShrugMan()}\n`));

    //Game loops
    while (game.isGameOn()) {
        let guess = promptSync('Guess a letter: ');

        while (!game.validateGuess(guess)) {
            guess = promptSync('Invalid guess. Guess a letter: ');
        }

        game.update(guess);
        console.clear();
        console.log(chalk.greenBright(`\n${game.renderWord()}\n`));
        console.log(chalk.bold.magenta(`\n${game.renderShrugMan()}\n`));

        if (!game.isGameOn()) {
            const isWinning = game.isWinning();
            game.updateStats(isWinning);

            if (isWinning) {
                console.log(chalk.yellow('Congratulations! You guessed the word!'));
            } else {
                console.log(chalk.redBright('You ran out of attempts! The word was: ', game.currentWord));
            }

            let anotherRound = promptSync('Play another round with the same category (y/n)? ');
            if (anotherRound.toLowerCase() === 'y') {
                game.reset();
                console.clear();
                console.log(chalk.greenBright(`\n${game.renderWord()}\n`));
                console.log(chalk.bold.magenta(`\n${game.renderShrugMan()}\n`));
            } else {
                console.clear();
                console.log(chalk.cyanBright('Game Statistics:'));
                console.log(chalk.yellowBright(`\n${game.getFormattedStats()}\n`));
                console.log(chalk.cyan('Thanks for playing!'));
            }
        }
    }
}

playGame();

