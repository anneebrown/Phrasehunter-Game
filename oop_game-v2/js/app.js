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
//keyButtonsSliced = keyButtons.slice(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25);
//console.log(keyButtons);

// let aButton = keyButtons.filter(keyButton => keyButton.innerText = 'a');
// console.log(aButton);

//for (let i= 0; i < keyButtons.length; i+= 1){
keyButtons.addEventListener('click', (event) => {
    //console.log(event.target.textContent);
    if (event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target);
    }
});
//};

