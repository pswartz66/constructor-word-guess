
var Letter = require('./letter.js');


class Word {

    /**
    * @param {string} arr - Accepts an array of letters
    */
    constructor(wordOrPhrase) {

        this.wordOrPhrase = wordOrPhrase;

        this.wordToArray = [];


        for (var i = 0; i < wordOrPhrase.length; i++) {

            var letterObj = new Letter(this.wordOrPhrase[i]);

            this.wordToArray.push(letterObj);

            // console.log(this.wordToArray[i].letterChar);

        };


        this.wordToGuess = function () {

            console.log(this.wordToArray.join(' '));

        }

        this.guessLetter = function(char) {

            for (var i = 0; i < this.wordToArray.length; i++) {

                // instantize Letter class
                

                // must be called before charCheck function 
                // since charCheck function will always return
                // a true or false statement

                this.wordToArray[i].charCheck(char);

                // console.log(this.wordToArray);

            }


            this.wordToGuess();

            // console.log(arr);

            // this.wordToArray = [];

        }

    }

}


// working code
// let randomWordTwo = new Word(['t', 'e', 's', 't', ' ', 'w', 'o', 'r', 'd']);

// randomWordTwo.guessLetter('t');


 module.exports = Word;