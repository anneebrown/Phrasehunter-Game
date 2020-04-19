/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase){
        this.phrase = phrase.toLowerCase();
    }

/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        //gets the div the list items will be stored in
        let div = document.getElementById('phrase');
        //log statement to make sure I selected the correct element
        //console.log(div);
        let ul = div.firstElementChild;
        //stores the used phrase
        let usedPhrase = this.phrase;
        //returns an array of letters in the used phrase
        let splitPhrase = usedPhrase.split("");
        for (let i = 0; i < splitPhrase.length; i++){
            //gets the current letter from the splitPhrase array
            let letter = splitPhrase[i];
             //creates an li element and appends it to the DOM
            let li = document.createElement('LI');
            ul.appendChild(li);
            //sets the content of each list item
            li.innerHTML = letter;
            //if the letter variable is equal to a space, make the className a space, else make it the current letter
            if (letter == ' '){
                li.className = 'space';
            } else {
                li.className = `hide letter ${letter}`;
            }
        }
    };

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
//I got the basic idea for the regex here: https://stackoverflow.com/questions/7053506/how-to-put-variable-in-regular-expression-match
    checkLetter(letter) {
        let tested = letter; 
        let regex = new RegExp(tested, 'g');
        if (this.phrase.match(regex)){
            return true; 
        }  else {
            return false;
        }
    };

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        let match = document.getElementsByClassName(`hide letter ${letter}`);
        match.className = `show`;
    };

}


// var string = 'asdgghjjkhkh'; = this.phrase
// var string2 = letter;
// var regex = new RegExp( string2, 'g' );
// string.match(regex);




