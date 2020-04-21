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

//event listener for on screen buttons
keyButtons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target);
    }
    //console.log(event.target);
});

//event listener for keyboard buttons
// document.addEventListener('keydown', (event) => {
//    game.handleInteraction(event.key);
//    console.log(event.key);
// });