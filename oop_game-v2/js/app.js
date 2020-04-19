/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//I used the project guide to help me with my code
//the commented out portion is the test code to verify at each step that the added code works

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game; 
document.getElementById('btn__reset').addEventListener('click', (event) => {
    game = new Game(); 
    game.startGame();
});


// Now that you’ve built the basics, head over to the app.js file. This is where you’ll create an
// event listener for the "Start Game" button that the user sees when they load your Phrase
// Hunter game.
// ● Inside the app.js file, declare a new variable called `game` that’s not set to anything.
// ● Then, add a "click" event listener to the HTML `<button>` element with an `id` of
// `btn__reset`. Inside the callback function for this click event listener, use your `game`
// variable to instantiate a new Game object. Call the `startGame()` method on this new
// Game object.