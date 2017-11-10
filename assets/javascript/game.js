
// Variables
var hangmanArray = ["afraid", "blood", "cadaver", "coffin", "monster", "murder", "spooky", "tombstone", "wicked"]; 
var word; // Winning word
var guessesLeft = 12; // Number of guesses remaining
var miss = 0; // All wrong guessed letters
var hit = 0;  //All the correct guessed letters
var wins=0; //score of # of wins
var guessesArray = [];
var missedArray = [];
var userGuess; // the user's guess
var hangmanWord = [];

newGame();
document.getElementById("alert-text").textContent = "Press any key to get started...if you dare!";

// New game setup & reset
function newGame() {
	word = hangmanArray[Math.floor(Math.random() * hangmanArray.length)]; // Winning word
	guessesLeft = 12; // Number of guesses remaining
	miss = 0; // All wrong guessed letters
	hit = 0;  //All the correct guessed letters
	guessesArray = [];
	missedArray = [];
	userGuess; // the user's guess
	hangmanWord = [];

	document.onkeyup = function(event) {
		firstPrint();
		game();
	};
}

function firstPrint() {
	//Hangman Word
	for (i =0; i < word.length; i++) {
		hangmanWord.push("-");
		document.getElementById("hangmanWord").textContent = hangmanWord.join(""); //.join takes out array separators
	}
	//Score
	document.getElementById("guesses-left-text").textContent = guessesLeft;
	//Missed letters
	document.getElementById("missed-letters-text").textContent = missedArray;
	//alert messaging
	document.getElementById("alert-text").textContent = "";
}


function game() {

	//Listen for the user pressing any key & store it as lowercase
	document.onkeyup = function(event) {
		userGuess = event.key;
		userGuess = userGuess.toLowerCase();
		document.getElementById("alert-text").textContent = "";
		verifyValid();
		}
}

function verifyValid() {
	//Check if it is a valid letter
	if (userGuess >= String.fromCharCode(97) && userGuess <= String.fromCharCode(123)) { // <-- FIX THIS - its accepting other keys
		verifyUnique();
	} else {
		document.getElementById("alert-text").textContent = "Guess a letter!";
		}
	}

//userGuess is unique
function verifyUnique() {
if (guessesArray.indexOf(userGuess) === -1) {
		guessesArray.push(userGuess);
		// If there are guessesLeft, then run compare
		if (guessesLeft > 0) {
			compare();
		} else {
			console.log("game Over");
			document.getElementById("guesses-left-text").textContent = 0;
			document.getElementById("alert-text").textContent = "Game Over! Press any key to play again.";
			newGame();
		}
	} else {
		guessesArray.push(userGuess);
		document.getElementById("alert-text").textContent = "You've already guessed that letter!";
	}
}


//is userGuess in the word?
function compare() {
	//change the winning word & the user guess to lowercase
	word = word.toLowerCase();
	// If the letter is in the word, display the letter	
	if (word.indexOf(userGuess) !== -1) {
			correct();
			print();
		} else { // If the letter is not in the word, add the word to the missed array & decrease gussesLeft.
			guessesLeft--;
			missedArray.push(userGuess);
			print();
		}
	}

//Does userGuess match any letter in the word?
function correct() {
	//look for where the user guess matches letters in the word
	for (k = 0; k < word.length; k++) {
		if (word[k] === userGuess) {
			hangmanWord[k] = userGuess;
			//display the correctly guessed letter in the Hangman spaces
			document.getElementById("hangmanWord").textContent = hangmanWord.join(""); //.join takes out array separators
		} 	
	};
	//If winner, game over...
	if (hangmanWord.join("") == word) {
		document.getElementById("hangmanWord").textContent = hangmanWord.join("");
		document.getElementById("alert-text").textContent = "YOU WIN!!! Press any key to play again.";
		wins++;
		document.getElementById("wins-text").textContent = wins;
		newGame();
	}
	
}

// print all changes to the screen 
function print() {
	document.getElementById("guesses-left-text").textContent = guessesLeft;
	document.getElementById("missed-letters-text").textContent = missedArray;
}






//REQUIREMENTS MISSING
	//do not decrease points if users guess 'enter' or 'tab' type keys, etc.
	//reset game w/ new word after game is over
	//stop keeping score if the user won the game
	




