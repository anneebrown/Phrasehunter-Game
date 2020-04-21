/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//I used the project guide to help me with my code
let game; 
document.getElementById('btn__reset').addEventListener('click', (event) => {
    game = new Game(); 
    game.startGame();
});

//gets an array of buttons 
let keyButtons = document.getElementById('qwerty');

keyButtons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target);
    }
});


// document.addEventListener('keyup', keyButtons, (event) => {
//     game.handleInteraction(event.target);
// });