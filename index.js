

var Word = require('./word.js');

var inquirer = require('./node_modules/inquirer');

var randomWord = require('./node_modules/random-words');

// store a random word in the Word class
var wordObj = new Word(randomWord());

console.log(wordObj.wordOrPhrase);


// Game Logic Code here //

function playGame() {

    inquirer.prompt([
        {
            name: 'actionStatement',
            message: 'Guess a letter'

        }
    ])

}

playGame();


