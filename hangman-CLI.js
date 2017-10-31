var Game = require ("./Game.js");
var Inquirer = require("inquirer");

var game = new Game();
game.init();
console.log(game.answer);

function guess(){

	Inquirer.prompt([
	    {
	        type: "input",
	        name: "guess",
	        message: "Guess a letter!",
	    }
	]).then(function(response) {

	    game.guessLetter(response.guess);
	    
		if(game.guessesRemaining > 0){
			guess();
		}
	    console.log(game.guessedLetters);
	    console.log(game.printBoard());
	});

}

guess();

