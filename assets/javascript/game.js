window.onload = function() {

	var halloweenWords = ["pumpkin", "ghost", "skeleton", "candy"];
	var ranNum = Math.floor(Math.random() * (3 - 0) + 0);
	var letterDiv = document.getElementById('hidden-letters');
	var guessedLetterDiv = document.getElementById('guessed-letters');
	var attemptedUserLetters = [];



	for (var i=0; i < halloweenWords[ranNum].length; i++) {
		var newLetterSpan = document.createElement('span');
		newLetterSpan.innerHTML = ' _';
		letterDiv.appendChild(newLetterSpan);
	}

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(ranNum); //not needed

		// displays guessed letters as the user inputs them
		var newGuessedLetterSpan = document.createElement('span');
		newGuessedLetterSpan.innerHTML = userGuess;
		guessedLetterDiv.appendChild(newGuessedLetterSpan);





		checker:
		for (var i=0; i < halloweenWords[ranNum].length; i++) {
			if (userGuess === halloweenWords[i]) {
				console.log(userGuess);
				break checker;
			} else {

			}
		}

	};


}