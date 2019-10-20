

/** Constructor Class */
class Letter {

    
    /**
     * @param {string} letterChar - A string value to store an underlying letter
     * @param {boolean} isSearched - A boolean value that stores whether letterChar is true/false
     */
    constructor(letterChar) {

        this.letterChar = letterChar;

        this.isSearched = false;

        this.underscore = '_';
        

        /** @returns {boolean} displays a character or an underscore _ depending if the letter guessed exists or does not exist */
        this.displayCharacter = function() {

            if (this.isSearched) {

                // console.log(this.letterChar);

                return this.letterChar;

            } else {

                // console.log(this.underscore);

                return this.underscore;

            }

        }

        /** 
         * @param {string} char - accepts a letter as a string
         * @returns {boolean} if char being searched for exists (true) or does not exist (false) 
         **/
        this.charCheck = function (char) {

            if (char === this.letterChar) {

                // flip prop isSearched to true if guess is correct
                this.isSearched = true;
                

            } else {
            
                // keep prop isSearched as false if guess is incorrect
                this.isSearched = false;

            
            }

            // console.log(this.isSearched);

            this.displayCharacter();

            return char;

        }

    }
}



// export Letter object
module.exports = Letter;

