class Shrugman {
    constructor(options) {
        this.gameOn = true; // Game status
        this.knownLettersList = []; //array of letters that have been guessed
        this.playedWords = {
            movies: [],
            books: [],
            quotes: []
        }; //List of played words
        this.attempts = 10; // Number of attempts
        this.stats = []; // array containing the game stats
        this.options = options; // Object containing the categories and words
        this.category = Object.keys(this.options)[0]; // Category of the current game
        // this.currentWord = this.getSecretWord(this.category); // Current word to guess
    }

    //1. Set the category of the game
    setCategory(category) {
        if (!this.options.hasOwnProperty(category)) // Check if the category exists
        {
            return false; // Return false if the category does not exist
        }
        this.category = category; // Set the category
        return true; // Return true if the category exists
    }

    //2. Get a random word from the options, based on the category
    getSecretWord(category) {
        let randomIndex = Math.floor(Math.random() * this.options[category].length);
        let secretWord = this.options[category][randomIndex];

        // Reset the played words list if all words have been played
        if (this.playedWords[this.category].length === this.options[this.category].length) {
            this.playedWords[this.category] = [];
        }

        // Get a new word if the current word has already been played
        while (this.playedWords[this.category].includes(secretWord)) {
            randomIndex = Math.floor(Math.random() * this.options[category].length);
            secretWord = this.options[category][randomIndex];
        }

        //after getting a new word, add it to the played words list
        this.playedWords[this.category].push(secretWord);

        return secretWord; // Return the random word and did not play before
    }

    //3. check if the guessed letter is valid or not
    validateGuess(letter) {
        if (!letter) {
            return false; //letter is valid if it is letter
        }
        if (letter.length !== 1) {
            return false; //letter is valid if it is a single character
        }
        return !this.knownLettersList.includes(letter.toLowerCase()); //letter is valid if it has not been guessed before
    }

    //4. Update the game after a guess : decrease the attempts if the guess is wrong, add the letter to the known letters list if it is correct
    update(letter, currentWord) {
        this.knownLettersList.push(letter.toLowerCase());
        if (!this.currentWord.toLowerCase().includes(letter)) {
            this.attempts--;
        }
    }

    //5. Render the word with the guessed letters and '_' for the unknown letters
    renderWord(currentWord) {
        return this.currentWord
            .split('')
            .map(char => (this.knownLettersList.includes(char.toLowerCase()) || char === ' ' ? char : ' _'))
            .join('');
    }

    //6. Render emoji shrug -every time the player makes a wrong guess, draws one part of the emoji
    renderShrugMan() {
        const shrugEmoji = '¯\\_(:/)_/¯'.split('');
        return shrugEmoji.slice(0, shrugEmoji.length - this.attempts).join('');
    }

    //7. Update the game stats after a round (win or loss) and add the word and the result to the stats array
    updateStats(gameResult,currentWord) {
        this.stats.push({
            word: this.currentWord,
            result: gameResult ? 'win' : 'loss'
        });
    }

    //8. return the information about the results of the game, including the word and the result
    getFormattedStats() {
        return this.stats
            .map((stat, index) => `${index + 1}. ${stat.word} - ${stat.result}`) //new array with the word and the result in string format
            .join('\n'); //join the array elements with a new line and separate them by a new line
    }

    //9. Check the player won the game
    isWinning() {
        return this.currentWord === this.renderWord();
    }

    //10. Check if the game is still on - based on the number of attempts and if the player has won
    isGameOn() {
        if (this.attempts === 0) {
            return false;
        }
        if (this.isWinning()) {
            return false;
        }
        return true;
    }

    //11. Reset the game after a round
    reset() {
        this.knownLettersList = [];
        this.attempts = 10;
        this.currentWord = this.getSecretWord(this.category);
    }
}

export default Shrugman;
