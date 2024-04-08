// Import necessary libraries
import prompt from 'prompt-sync';
import chalk from 'chalk';
import Shrugman from './Shrugman.js';

// Create a prompt function to get input from the player
const promptSync = prompt();

// Options for movies, books, and quotes
const options = {
    movies: [
        'Avatar', 'Inception', 'Titanic', 'The Godfather', 'Forrest Gump',
        'Saving Private Ryan', 'Braveheart', 'The Blind Side', 'Love Actually',
        'Onward', 'The Invisible Man', 'The Night Clerk', 'Vanguard'
    ],
    books: [
        'Harry Potter', 'Lord of the Rings', 'The Great Gatsby', 'Death In The Clouds',
        'Sparkling Cyanide', 'The Body in the Library', 'The Rose and the Yew Tree',
        'Murder in Mesopotamia', 'Murder on the Orient Express', 'All Quiet on the Western Front',
        'Pride and Prejudice', 'And Then There Were None', 'The ABC Murders',
        'Arch of Triumph: A Novel of a Man Without a Country', 'A Time to Love and a Time to Die',
        'Three Comrades', 'My Name Is Red', 'Eleven Minutes', 'A Strangeness in My Mind',
        'The Catcher in the Rye', 'Harry Potter and the Goblet of Fire'
    ],
    quotes: [
        'To be or not to be', 'May the Force be with you', 'To be or not to be, that is the question.',
        'I have a dream.', 'May the Force be with you.', 'You shall not pass!', 'Houston, we have a problem.',
        'Elementary, my dear Watson.', 'I am your father.', 'Go ahead, make my day.'
    ]
};

// Create a new instance of the Shrugman game
const game = new Shrugman(options);

// Function to start and play the game
function playGame() {
    console.log(chalk.yellow('Welcome to Shrugman! Guess the word to win, or make 10 incorrect guesses to lose.'));

    // Choose a category before starting the game
    const categoryChoice = promptSync(chalk.white('Choose a category (movies/books/quotes): '));

    

    // Set the category for the game
    game.setCategory(categoryChoice);

    console.log(chalk.cyan('\nCategory:', game.category));

    // Game loop
    while (game.isGameOn()) {
        console.log(chalk.green('Attempts left:', game.attempts));
        console.log(chalk.magenta(game.renderShrugMan()));
        console.log(chalk.blue(game.renderWord()));

        const guess = promptSync(chalk.white('Guess a letter: '));

        if (guess.toLowerCase() === 'exit') {
            console.log(chalk.yellow('Exiting the game...'));
            break;
        }

        if (!game.validateGuess(guess)) {
            console.log(chalk.red('Invalid guess. Please enter a single letter that has not been guessed before.'));
            continue;
        }

        game.update(guess);

        if (game.isWinning()) {
            console.log(chalk.green('\nCongratulations! You guessed the word:', game.currentWord));
            break;
        }
    }

    if (!game.isWinning() && game.attempts === 0) {
        console.log(chalk.red('\nSorry, you ran out of attempts. The word was:', game.currentWord));
    }

    // Update game stats
    game.updateStats(game.isWinning());

    // Show formatted stats
    console.log(chalk.yellow('\nGame Stats:'));
    console.log(game.getFormattedStats());

    // Reset the game for another round
    game.reset();

    // Ask if the player wants to play again
    const playAgain = promptSync(chalk.white('Do you want to play again? (yes/no): '));

    if (playAgain.toLowerCase() === 'yes') {
        playGame(); // Recursive call to play again
    } else {
        console.log(chalk.yellow('Thanks for playing Shrugman!'));
    }
}

// Start the game
playGame();

