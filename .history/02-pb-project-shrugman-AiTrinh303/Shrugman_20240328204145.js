class Shrugman {
    constructor() {
        this.gameOn = true;
        this.knownLettersList = [];
        this.playedWords = {
            movies: [],
            books: []
        };
        this.shugmanEmoji = '¯\\_(:/)_/¯'
        this.attempts = this.shugmanEmoji.length;
        this.stats = [];
        this.options = {
            movies: [
                'The Godfather',
                'Forrest Gump',
                'Titanic',
                'Saving Private Ryan',
                'Braveheart',
                'The Blind Side',
                'Enola Holmes',
                'Love Actually',
                'Onward',
                'The Invisible Man',
                'The Night Clerk',
                'Vanguard'
            ],
            books: [
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
                'The Neverending Story',
                'Eleven Minutes',
                'A Strangeness in My Mind',
                'The Catcher in the Rye',
                'Harry Potter and the Goblet of Fire'
            ]
        }
module.exports = Shrugman;