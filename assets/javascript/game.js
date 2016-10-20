var halloweenWords = ["pumpkin", "ghost", "skeleton", "candy"];
var ranNum = Math.floor(Math.random() * (3 - 0) + 0);
var letterDiv = document.getElementById('hidden-letters');
var guessRemainDiv = document.getElementById('guesses-remaining');
var guessedLetterDiv = document.getElementById('guessed-letters');
var winsDiv = document.getElementById('wins');
var guessesRemaining = 7;
var guessedLetters = [];
var permGuessedLetters = [];
var letterBlank = [];
var correctGuess = false;
var winCheck = false;
var wins = 0;
var isLetterGuessed = false;

	




//creates then correct number of hidden letter spaces for the randomly 
//selected word in the array and writes it to the HTML
guessRemainDiv.innerHTML = 'Number of guesses remaining: ' + guessesRemaining;
winsDiv.innerHTML = 'Wins: ' + wins;

for (var i=0; i < halloweenWords[ranNum].length; i++) {
	letterBlank.push('_ ');
}

letterDiv.innerHTML = letterBlank.join(' ');







//gets the key pressed, converts it to lower case, and stores it as a string
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	alreadyGuessCheck();
	
	if (isLetterGuessed === false) {
		showGuessedLetters();
		guessChecker();
		winChecker();
		wrongGuessChecker();
		loseChecker();	
	}




	//pushs the current guessed letter to an array then checks to see if it matchs any 
	//of the previously guessed letters
	function alreadyGuessCheck() {
		isLetterGuessed = false;
		guessedLetters.push(userGuess);
		
		for (var i=0; i < guessedLetters.length - 1; i++) {
			if (userGuess === guessedLetters[i]) {
			isLetterGuessed = true;
			alert('Please choose a letter you have not already guessed.');
			} 
		}
	}


	//displays guessed letters then a comma to seperate them if the 
	//guesses remaining is greaterthan or equal to 0
	function showGuessedLetters() {
		permGuessedLetters.push(' ' + userGuess);
		
		if (guessesRemaining >= 0) {
			guessedLetterDiv.innerHTML = ('Guessed letters:' + permGuessedLetters);
		}
	}


	//checks if the specific index of the array is a underscore (not guessed yet)
	//if it is, winCheck is set to false and it breaks out of the loop
	//
	//then it check if winCheck is true, if it is it alerts the user that
	//theve won, incriments the win counter, and resets the game
	function winChecker() {
		for (var i=0; i < letterBlank.length; i++) {
			if (letterBlank[i] === '_ ') {
				winCheck = false;
				break;
			} else {
				winCheck = true;
			}
		}
			
		if (winCheck === true) {
			alert('You Win!');
			wins++;
			reset();
		}
	}

	//looks at each letter in the word to guess and
	//checks the users guess against it
	//
	//if the user's guess matches the letter in the current array index
	//then it will replace that index's vaule with the letter
	//
	//once it checks all the possible indexs, the letterBlank array
	//is written to the html
	function guessChecker() {
		correctGuess = false;
		for (var i=0; i < halloweenWords[ranNum].length; i++) {
			if (userGuess === halloweenWords[ranNum][i]) {
				letterBlank[i] = userGuess;
				correctGuess = true;
			} 
		}	
		letterDiv.innerHTML = letterBlank.join(' ');
	}


	//checks if the users guess is not in the word and if not decriments 
	//their remaining guesses by 1 and updates the HTML		
	function wrongGuessChecker() {
		if (correctGuess != true) {
			guessesRemaining--;
			guessRemainDiv.innerHTML = 'Number of guesses remaining: ' + guessesRemaining;
		}
	}


	//alerts you lose if you have no remaining guess and choose
	//another wrong letter then resets the game
	function loseChecker() {
		if (guessesRemaining === 0) {
			alert('You lose! The word was ' + halloweenWords[ranNum] + '.');
			reset();
		}
	}

	//resets the game so you can play again
	function reset() {
		ranNum = Math.floor(Math.random() * (3 - 0) + 0);
		guessesRemaining = 7;
		guessedLetters = [];
		permGuessedLetters = [];
		letterBlank = [];
		winCheck = false;
		guessRemainDiv.innerHTML = 'Number of guesses remaining: ' + guessesRemaining;
		winsDiv.innerHTML = 'Wins: ' + wins;
		guessedLetterDiv.innerHTML = ('Guessed letters:' + permGuessedLetters);

		//creates then correct number of hidden letter spaces for the randomly 
		//selected word in the array and writes it to the HTML
		for (var i=0; i < halloweenWords[ranNum].length; i++) {
			letterBlank.push('_ ');
		}
		letterDiv.innerHTML = letterBlank.join(' ');
	}
};

