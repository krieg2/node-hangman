var Letter = require ("./Letter.js");

var Word = function(str){

	// Must include str parameter to create a word.
	this.value = str.trim().replace(" ", "");

	// This maps the string value into an array of letters.
	this.letters = this.value.split("").map(c => new Letter(c));

};

Word.prototype.guessALetter = function(input){

	var count = 0;
	for(var i=0; i < this.letters.length; i++){

		var ltr = this.letters[i];
		if(ltr.value === input){

			count++;
			ltr.guessed = true;
		}
	}

	return count;
};

module.exports = Word;