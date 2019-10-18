

/** Constructor Class */
class Letter {

    
    /**
     * @param {string} letterChar - A string value to store an underlying character
     * @param {boolean} isSearched - A boolean value that stores whether letterChar is true/false
     */
    constructor(letterChar, isSearched) {

        
        this.letterChar = letterChar;
        this.isSearched = false;

        /** @returns {boolean} returns the underlying character if the letter has been guessed, or a placeholder */
        this.returnCharacter = function() {


        }

        this.charCheck = function () {


        }

        this.printData = function () {

            console.log("\n" + this.guessLetter +
                        "\n" + this.isSearched);

        }

    }
}


var myletter = new Letter('p', false);

myletter.returnCharacter()

module.exports = letterConstructor;

