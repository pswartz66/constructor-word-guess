

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
                type: 'input',
                name: 'actionStatement',
                message: 'Guess a letter! '

            }
        ]).then(function (inquirerResponse, err) {

            if (err) {
                throw err;
            }


            var inquirerLetter = inquirerResponse.actionStatement;

            console.log(wordObj.guessLetter(inquirerLetter));


            // increment count by +1
            count++;

            // call playGame function recursively
            playGame();

        })

    } else {

        console.log('GAME OVER!!!');
        
        // console.log(display correct / incorrect)

    }

}

playGame();


