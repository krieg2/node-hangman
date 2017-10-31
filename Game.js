var Letter = require ("./Letter.js");
var Word = require ("./Word.js");

var Game = function(){

	this.guessesRemaining = 10;
	this.islandList = ["sumatra", "tahiti", "bora bora",
           		       "bali", "maui", "boracay", "aruba",
              		    "palawan", "hawaii", "jamaica", 
                  		"ibiza", "madagascar", "malta"];
    this.answer = {};
    this.guessedLetters = [];
    this.guessLetter = function(input){

	    var regEx = /^[a-z]$/;
	    if(regEx.test(input)){

	    	var letter = new Letter(input);
	    	this.guessedLetters.push(letter);
	    	this.guessesRemaining--;
	    }
	};
	this.chooseGameAnswer = function(){

	    var answer = "";
	    var max = this.islandList.length - 1;

	    // Random game answer.
	    var index = Math.floor(Math.random() * (max + 1));
	    answer = this.islandList[index];

	    this.answer = new Word(answer);
	};
	this.printBoard = function(){

		var str = "";
		for(var i=0; i < this.answer.letters.length; i++){
			str += this.answer.letters[i].value + " ";
		}
		console.log(str);
	};
	this.init = function(){

		this.chooseGameAnswer();
		this.guessesRemaining = 10;
	};


};


module.exports = Game;