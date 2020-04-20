/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0; 
        this.phrases = this.createPhrases();
        this.activePhrase = `null`;
    }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases(){
       this.phrases = [new Phrase('Trubbish is the best pokemon'), 
                       new Phrase('Santa is real'), 
                       new Phrase('Cosmic crisp apples are a new variety'), 
                       new Phrase('Blackened ranch is the best sauce at popeyes'), 
                       new Phrase('Javascript is great')];
       return this.phrases;
    }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    };


/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        let startOverlay = document.getElementById('overlay');
        startOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        //gets an array of all elements that still have a hide class, if the length of that array is 0, the game has been won
        let winCondition = document.getElementsByClassName('hide');
        console.log(winCondition);
        if (winCondition.length > 0){
            return false;
        } else {
            return true;
        }

    };

 }



//  Game class methods
// ○ `checkForWin()`: This method checks to see if the player has revealed all of the
// letters in the active phrase.
// ○ `removeLife()`: This method removes a life from the scoreboard, by replacing one
// of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
// folder) and increments the `missed` property. If the player has five missed
// guesses (i.e they're out of lives), then end the game by calling the `gameOver()`
// method.
// ○ `gameOver()`: This method displays the original start screen overlay, and
// depending on the outcome of the game, updates the overlay `h1` element with a
// friendly win or loss message, and replaces the overlay’s `start` CSS class with
// either the `win` or `lose` CSS class.

//check for win: get elementsbyclassname
//if the array length is over 0, game has not been won