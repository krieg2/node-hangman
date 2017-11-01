const Game = require ("./Game.js");
const inquirer = require("inquirer");
const chalk = require("chalk");

var game = new Game();
game.init();

guess();

function guess(){

	console.log("\n" + game.printBoard() + "\n");

	inquirer.prompt([
	    {
	        type: "input",
	        name: "letterInput",
	        message: "Guess a letter!"
	    }
	]).then(function(response) {

	    var result = game.guessLetter(response.letterInput.trim());
	    console.log("\n" + game.printBoard() + "\n");

	    if(result === "CORRECT!!!"){

	    	console.log(chalk.green(result) + "\n");

		} else if(result === "INCORRECT!!!"){

			console.log(chalk.redBright(result) + "\n");

			console.log(game.guessesRemaining + " guesses remaining.\n");

		} else {

			console.log(chalk.redBright(result) + "\n");

		}

		if(game.guessesRemaining === 0 && !game.bypassNoMoreGuesses){

				continuePrompt();

		} else if(game.lettersRemaining === 0){

			console.log("You got it right! Next word!" + "\n");
			game.init();
			guess();

		} else {

			guess();

		}
	});

}


function continuePrompt(){

	inquirer.prompt([
	    {
	        type: "confirm",
	        name: "continueGame",
	        message: "Would you like to continue this game?"
	    }
	]).then(function(response) {

		if(response.continueGame){

			// Continue guessing with current game.
			game.bypassNoMoreGuesses = true;
			guess();

		} else {

			// Start a new game.
			game.init();
			guess();

		}
	});

}

