//ensures the HTML is loaded fully before the script runs so the javascript 
//isnt trying to access elements that havent been created yet
window.onload = function() {

	var halloweenWords = ["pumpkin", "ghost", "skeleton", "candy"];
	var ranNum = Math.floor(Math.random() * (3 - 0) + 0);
	var letterDiv = document.getElementById('hidden-letters');
	var guessRemainDiv = document.getElementById('guesses-remaining');
	var guessedLetterDiv = document.getElementById('guessed-letters');
	var guessesRemaining = 7;
	var guessedLetters = [];
	var permGuessedLetters = [];
	var correctGuess = false;
	

	guessRemainDiv.innerHTML = 'Number of guesses remaining: ' + guessesRemaining;

	//creates then correct number of hidden letter spaces for the randomly 
	//selected word in the array and writes it to the HTML
	for (var i=0; i < halloweenWords[ranNum].length; i++) {
		var newLetterSpan = document.createElement('span');
		newLetterSpan.innerHTML = ' _';
		letterDiv.appendChild(newLetterSpan);
	}



	//gets the key pressed, converts it to lower case, and stores it as a string
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		var isLetterGuessed = false;

		//pushs the current guessed letter to an array then checks to see if it matchs any 
		//of the previously guessed letters
		guessedLetters.push(userGuess);
		for (var i=0; i < guessedLetters.length - 1; i++) {
			if (userGuess === guessedLetters[i]) {
				isLetterGuessed = true;
				alert('Please choose a letter you have not already guessed.');
			} 
		}





		
		if (isLetterGuessed === false) {
			permGuessedLetters.push(' ' + userGuess);
			//displays guessed letters then a comma to seperate them if the 
			//guesses remaining is greaterthan or equal to 0
			if (guessesRemaining >= 0) {
				guessedLetterDiv.innerHTML = ('Guessed letters:' + permGuessedLetters);
			}



			correctGuess = false;
			//this line looks at each letter in the word to guess and
			//checks the users guess against it
			for (var i=0; i < halloweenWords[ranNum].length; i++) {
				if (userGuess === halloweenWords[ranNum][i]) {
					console.log('letter is in this index');
					//var newLetterSpan = document.createElement('span');
					newLetterSpan.innerHTML = ' ' + halloweenWords[ranNum][i];
					//letterDiv.appendChild(newLetterSpan);
					correctGuess = true;
				} else {
					console.log('letter not in this index');
					//var newLetterSpan = document.createElement('span');
					newLetterSpan.innerHTML = ' _';
					//letterDiv.appendChild(newLetterSpan);
				}
			}
			//checks if the users guess is not in the word and
			//if not decriments their remaining guesses by 1
			if (correctGuess != true) {
				guessesRemaining--;
				guessRemainDiv.innerHTML = 'Number of guesses remaining: ' + guessesRemaining;
			}


			//alerts you lose if you have no remaining guess and choose
			//another wrong letter
			if (guessesRemaining === 0) {
				alert('You lose!');
			}




		}


	};


}