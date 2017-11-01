var Letter = function(letter){

	this.value = letter;

    this.guessed = false;
};

Letter.prototype.convertToLowerCase = function(){
	this.value = this.value.toLowerCase();
};

Letter.prototype.convertToUpperCase = function(){
	this.value = this.value.toUpperCase();
};

Letter.prototype.isLowerCase = function(){
	return this.value.match(/^[a-z]$/);
};

Letter.prototype.isUpperCase = function(){
	return this.value.match(/^[A-Z]$/);
};

Letter.prototype.validate = function(){

	var result = false;

	// Length should be 1 character.
	if(this.value.length === 1){

		// Automatically convert upper to lower case.
		if(this.isUpperCase()){
			this.convertToLowerCase();
		}
		if(this.isLowerCase()){
			result = true;
		}
	}

	return result;
};

module.exports = Letter;