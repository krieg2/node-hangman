var Letter = require ("./Letter.js");

var Word = function(str){

	this.value = str;

	this.letters = this.value.split("").map(function(c) {
		var ltr = new Letter(c);
		return ltr;
	});	

};

module.exports = Word;