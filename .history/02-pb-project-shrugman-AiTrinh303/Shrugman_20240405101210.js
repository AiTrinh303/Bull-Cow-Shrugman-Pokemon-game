class Shrugman {
    constructor(options) {
        this.gameOn = true; // Game status
        this.knownLettersList = []; //array of letters that have been guessed
        this.playedWords = {
            movies: [],
            books: [],
            quotes: []
        }; //List of played words
        this.attempts = 7; // Number of attempts
        this.stats = []; // array containing the game stats
        this.options = options; // Object containing the categories and words
        this.category = Object.keys(this.options)[0]; // Category of the current game
        this.currentWord = this.getSecretWord(this.category); // Current word to guess
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

    //2. Get a random word from the selected category
    getSecretWord(category) {
        let randomIndex = Math.floor(Math.random() * this.options[category].length);
        let secretWord = this.options[category][randomIndex];

        if (this.playedWords[this.category].length === this.options[this.category].length) {
            this.playedWords[this.category] = [];
        }

        while (this.playedWords[this.category].includes(secretWord)) {
            randomIndex = Math.floor(Math.random() * this.options[category].length);
            secretWord = this.options[category][randomIndex];
        }

        this.playedWords[this.category].push(secretWord);
        return secretWord;
    }

    validateGuess(letter) {
        if (!letter) {
            return false;
        }
        if (letter.length !== 1) {
            return false;
        }
        return !this.knownLettersList.includes(letter.toLowerCase());
    }

    update(letter) {
        this.knownLettersList.push(letter.toLowerCase());
        if (!this.currentWord.toLowerCase().includes(letter)) {
            this.attempts--;
        }
    }

    renderWord() {
        return this.currentWord
            .split('')
            .map(char => (this.knownLettersList.includes(char.toLowerCase()) || char === ' ' ? char : '_'))
            .join('');
    }

    renderShrugMan() {
        const shrugEmoji = '¯\_(:/)_/¯'.split('');
        return shrugEmoji.slice(0, shrugEmoji.length - this.attempts).join('');
    }

    updateStats(gameResult) {
        this.stats.push({
            word: this.currentWord,
            result: gameResult ? 'win' : 'loss'
        });
    }

    getFormattedStats() {
        return this.stats
            .map((stat, index) => `${index + 1}. ${stat.word} - ${stat.result}`)
            .join('\n');
    }

    isWinning() {
        return this.currentWord === this.renderWord();
    }

    isGameOn() {
        if (this.attempts === 0) {
            return false;
        }
        if (this.isWinning()) {
            return false;
        }
        return true;
    }

    reset() {
        this.knownLettersList = [];
        this.attempts = 7;
        this.currentWord = this.getSecretWord(this.category);
    }
}

export default Shrugman;
