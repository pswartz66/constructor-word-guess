

// Game Logic Code here //


// randomWord =>    'h e l l o'    =>     '_ _ _ _ _'


// use some api to generate a random word //



/**
 * 1. use an api call to generate a random word or use cheerio to webscrape a word
 * 2. store the random word inside of the Word contructor
 */




var wordOrPhrase = 'word searched word';
wordOrPhraseArr = wordOrPhrase.split('');

//console.log(wordOrPhrase.split(' '));

for (var i = 0; i < wordOrPhraseArr.length; i++) {

    wordOrPhraseArr.push();
}

console.log(wordOrPhraseArr);

for (var j = 0; j < wordOrPhraseArr.length; j++) {

    if (wordOrPhraseArr[j].includes('w')) {
        wordOrPhraseArr[j].replace(j, '_');
    }

}

console.log(wordOrPhraseArr);
