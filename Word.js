var Letter = require ("./Letter.js");

var Word = function(str){

	this.value = str.trim();

	this.letters = this.value.split("").map(function(c) {
		var ltr = new Letter(c);
		console.log("returning " +c);
		return ltr;
	});	

};

module.exports = Word;