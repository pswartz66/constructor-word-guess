
var Letter = require('./letter.js');


class Word {

    /**
    * @param {string} arr - Accepts an array of letters
    */
    constructor(wordOrPhrase) {

        this.wordOrPhrase = wordOrPhrase;

        this.wordToArray = [];

        this.wordToGuess = function () {

            console.log(this.wordToArray.join(' '));

        }

        this.guessLetter = function(char) {

            for (var i = 0; i < this.wordOrPhrase.length; i++) {

                // instantize Letter class
                var letterObj = new Letter(this.wordOrPhrase[i]);

                // must be called before charCheck function 
                // since charCheck function will always return
                // a true or false statement
                if (this.wordOrPhrase[i] == ' ') {

                    this.wordToArray.push(' ');

                } else if (letterObj.charCheck(char)) {

                    letterObj.displayCharacter();

                    this.wordToArray.push(letterObj.displayCharacter());

                } 

            }

            this.wordToGuess();

            this.wordToArray = [];

        }

    }

}


// working code
// let randomWordTwo = new Word(['t', 'e', 's', 't', ' ', 'w', 'o', 'r', 'd']);

// randomWordTwo.guessLetter('t');


 module.exports = Word;