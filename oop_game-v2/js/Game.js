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

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife(){
        let pictureElement = document.getElementsByClassName('tries');
        this.missed += 1;
        console.log(this.missed);
        if(this.missed == 1){
            pictureElement[0].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        }
        if(this.missed == 2){
            pictureElement[1].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        }
        if(this.missed == 3){
            pictureElement[2].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        }
        if(this.missed == 4){
            pictureElement[3].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        }
        if (this.missed == 5){
            pictureElement[4].firstElementChild.setAttribute('src', 'images/lostHeart.png');
            this.gameOver(false);
        }
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon){
        let startOverlay = document.getElementById('overlay');
        startOverlay.style.display = 'block';
        let gameOverMessage = document.getElementById('game-over-message');
        if (!gameWon){
            gameOverMessage.textContent = "Sorry, you\'re out of tries";
            startOverlay.className = 'lose';
        } else {
            gameOverMessage.textContent = "YAY, you win! Great job!";
            startOverlay.className = 'win';
        }
    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button){
        console.log(button);
        if(!this.activePhrase.checkLetter()) {
            button.disabled = true;
            button.className = 'wrong';
            this.removeLife();
        }
        if(this.activePhrase.checkLetter()) {
            button.disabled = true;
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
                this.gameOver(true);
            }
        }
    }
 }


//  If the phrase does not include the guessed letter, add the `wrong` CSS class to the
// selected letter's keyboard button and call the `removeLife()` method.
// ● If the phrase includes the guessed letter, add the `chosen` CSS class to the selected
// letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and then
// call the `checkForWin()` method. If the player has won the game, also call the
// `gameOver()` method.



