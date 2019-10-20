

var Word = require('./word.js');

var inquirer = require('./node_modules/inquirer');

var randomWord = require('./node_modules/random-words');

// store a random word in the Word class
var wordObj = new Word(randomWord());

console.log(wordObj.wordOrPhrase);

var wordLength = wordObj.wordOrPhrase.length;
var count = 0;
console.log(wordLength);

// Game Logic Code here //

var playGame = function () {

    if (count < wordLength) {


        inquirer.prompt([
            {
                name: 'actionStatement',
                message: 'Guess a letter! '

            }
        ]).then(function (response) {


            count++;
            playGame();

        }).then(function (err) {

            if (err) {

                throw err;

            }
        })

    } else {

        console.log('GAME OVER!!!');
        
        // console.log(display correct / incorrect)

    }

}

playGame();


