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



 }

