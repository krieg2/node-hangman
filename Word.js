var Letter = require ("./Letter.js");

var Word = function(str){

	this.value = str;

	this.letters = this.value.split("").map(function(c) {
		new Letter(c);
	});	

};

module.exports = Word;