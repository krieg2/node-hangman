var Letter = require ("./Letter.js");

var Word = function(str){

	this.value = str.trim();

	// This maps the string value into an array of letters.
	this.letters = this.value.split("").map(function(c) {
		var ltr = new Letter(c);
		return ltr;
	});	

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