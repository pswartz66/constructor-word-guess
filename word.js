
var Letter = require('./letter.js');


class Word {

    /**
    * @param {array} arr - Accepts an array of letters
    */
    constructor(wordOrPhrase) {

        this.wordOrPhrase = wordOrPhrase;

        this.wordToArray = [];

        // this.str = str;

        this.wordToGuess = function (char) {

            for (var j = 0; j < this.wordOrPhrase.length; j++) {

                var letterObj = new Letter(this.wordOrPhrase[j]);
                
                if (letterObj.charCheck(this.wordOrPhrase[j])) {

                    letterObj.displayCharacter();

                }


                // this.wordOrPhrase[i] === letterObj.underscore;

            
            }

            // return something;

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

            console.log(this.wordToArray.join(' '));

        }

    }

}

// in progress code
// let randomWordOne = new Word(['t', 'h', 'i', 's', ' ', 'w', 'o', 'r', 'd']);
// console.log(randomWordOne.wordToGuess('h'));



// working code
 let randomWordTwo = new Word(['t', 'h', 'i', 's', ' ', 'w', 'o', 'r', 'd']);

 console.log(randomWordTwo.guessLetter('i'));