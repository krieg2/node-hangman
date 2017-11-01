const Game = require ("./Game.js");
const inquirer = require("inquirer");
const chalk = require("chalk");

var game = new Game();
game.init();

function guess(){

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

		}

		if(game.guessesRemaining > 0){
			guess();
		}
	});

}

guess();

