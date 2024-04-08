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
    ],
    books: [
        'Harry Potter',
        'Lord of the Rings',
        'The Great Gatsby',
        'Death In The Clouds',
        'Sparkling Cyanide',
        'The Body in the Library',
        'The Rose and the Yew Tree',
        'Murder in Mesopotamia',
        'Murder on the Orient Express',
        'All Quiet on the Western Front',
        'Pride and Prejudice',
        'And Then There Were None',
        'The ABC Murders',
        'Arch of Triumph: A Novel of a Man Without a Country',
        'A Time to Love and a Time to Die',
        'Three Comrades',
        'My Name Is Red',
        'Eleven Minutes',
        'A Strangeness in My Mind',
        'The Catcher in the Rye',
        'Harry Potter and the Goblet of Fire'
    ],
    quotes: [
        'To be or not to be',
        'May the Force be with you',
        'To be or not to be, that is the question.',
        'I have a dream.',
        'May the Force be with you.',
        'You shall not pass!',
        'Houston, we have a problem.',
        'Elementary, my dear Watson.',
        'I am your father.',
        'Go ahead, make my day.'
    ]
};

//Main function
function playGame() {
    const game = new Shrugman(options); //create an instance of the Shrugman class using the options object
    console.clear();

    let category = promptSync('Choose a category: movies, books, or quotes: ');

    //check if the category is valid
    while (!game.setCategory(category.toLowerCase())) {
        category = promptSync('Invalid category. Choose movies, books, or quotes: ');
    }

    secret

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

