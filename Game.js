var Letter = require ("./Letter.js");
var Word = require ("./Word.js");

var Game = function(){

	this.guessesRemaining = 10;

	this.islandList = ["sumatra", "tahiti", "bora bora",
           		       "bali", "maui", "boracay", "aruba",
              		    "palawan", "hawaii", "jamaica", 
                  		"ibiza", "madagascar", "malta"];

    this.answer = undefined;

    this.lettersRemaining = 0;

    this.guessedLetters = [];

    this.guessLetter = function(input){

    	var result = "";

    	// Regular expression to test that the input is a character.
	    var regEx = /^[a-z]$/;
	    if(regEx.test(input)){

	    	// If the letter has not already been guessed.
	    	if(!this.guessedLetters.includes(input)){

	    		// Store it and reduce the remaining tries.
		    	this.guessedLetters.push(input);
		    	this.guessesRemaining--;
		    	result = "INCORRECT!!!"

		    	// Change each matching letter in the answer
		    	// to guessed = true.
		    	for(var i=0; i < this.answer.letters.length; i++){

		    		var ltr = this.answer.letters[i];
		    		if(ltr.value === input){

		    			result = "CORRECT!!!"
		    			ltr.guessed = true;
		    			this.lettersRemaining--;
		    		}
		    	}
		    } else {
		    	result = "Already guessed " + input;
		    }
	    } else {
		    result = "Try again. Invalid input: " + input;
		}

		return result;
	};

	this.chooseGameAnswer = function(){

	    var answer = "";
	    var max = this.islandList.length - 1;

	    // Select a random game answer.
	    var index = Math.floor(Math.random() * (max + 1));
	    answer = this.islandList[index];

	    // Store it as a Word object.
	    var word = new Word(answer);
	    this.answer = word;
	    this.lettersRemaining = word.value.length;
	};

	this.printBoard = function(){

		var str = "";
		for(var i=0; i < this.answer.letters.length; i++){

			// Print the letters of the answer as blanks
			// or the actual value if guessed correctly.
			if(this.answer.letters[i].guessed){
				str += this.answer.letters[i].value;
			} else {
				str += "_";
			}
			str += " ";
		}
		
		return str;
	};

	this.init = function(){

		// Reset the game.
		this.chooseGameAnswer();
		this.guessesRemaining = 10;
		this.guessedLetters = [];
	};


};


module.exports = Game;