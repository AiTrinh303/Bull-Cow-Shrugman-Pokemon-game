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
        this.stats = []; // array con
        this.options = options;
        this.category = Object.keys(this.options)[0];
        this.currentWord = this.getSecretWord(this.category);
    }

    setCategory(category) {
        if (!this.options.hasOwnProperty(category)) {
            return false;
        }
        this.category = category;
        return true;
    }

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
