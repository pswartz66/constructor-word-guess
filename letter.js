

class letterConstructor {
    constructor(guessLetter, isSearched) {

        this.guessLetter = guessLetter;
        this.isSearched = false;

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


var myletter = new letterConstructor('p', false);

module.exports = letterConstructor;

