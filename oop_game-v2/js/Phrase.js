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
}



