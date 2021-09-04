/*
* Name : Basic node aplication.
* outhor : Harun Biswas Rubel.
* Date : 04/09/2021
*/

// Dependencies

const mathLibrary = require('./lib/math')
const quotesLibarary = require('./lib/quotes');

const app = {};

app.config = {
    timeBetweenQuotes: 1000,
}

app.printAQuote = function printAQuote() {
    const allQuotes = quotesLibarary.allQuotes();
    const numberOfQuotes = allQuotes.length;
    const rendomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);
    const selectedQuote = allQuotes[rendomNumber -1];
    console.log(selectedQuote);

}

app.indefiniteLoop = function indefiniteLoop () {
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
}

app.indefiniteLoop();