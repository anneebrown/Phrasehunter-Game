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

    };
 }



//  The `startGame()` method hides the start screen overlay (the `div` element with an `id` of
// `overlay`), calls the `getRandomPhrase()` method to select a Phrase object from the Game
// object’s array of phrases, and then adds the phrase to the gameboard by calling the
// `addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase
// object. The selected phrase should be stored in the Game’s `activePhrase` property, so it can be
// easily accessed throughout the game.