
// Variables
var word = "Hello world"; // Winning word
var guessesLeft = 14; // Number of guesses remaining
var wrongLetters; // All wrong guessed letters
var usedLetters;  //All the correct guessed letters
var gameOn = true; // Is the game still on / ie: did the user guess all of the letters, yet?
var guessedArray = [];
var space = "_____ _____";


// Setup Document & Console

	// Display the empty word.
	console.log(space);

	// Display how many guesses are left.
	console.log("You have 15 guesses.");


// Get the space ready for filling in
	// Turn the space into an array
	var spaceArray = space.split("");



// Get the winning word ready for comparison
	// First, the word needs to be changed to uppercase
	var word = word.toUpperCase();
	// // Next, Remove spaces from the string
	// var word = word.split(' ').join('');
	// Third, the word needs to be broken into an array
	var wordArray = word.split("");


// Ask a user to guess a letter & store it as a variable.
function guess() {
	var guess = prompt("Guess a letter.");
	//Control the input, requiring a single letter
	// control the input, forcing upper-case
	var guess = guess.toUpperCase();
		// Now that the guess is ready for comparison, store it in the guessedArray
		guessedArray.push(guess);

		// Check if user already guessed the letter. 
			// Check if the guessed letter is in the word.
			if (word.indexOf(guess) === -1) {
				console.log ("You got it wrong :(");
				
				// Display how many guesses are left.
				// Add new guess to list of wrong-guessed letters  -- NEEDED --
				console.log("You have " + guessesLeft + " guesses left.");
			} else {
				console.log ("You got a letter!!!");
				// Display the letter in the winning hangman space -- NEEDED --
					// Winning hangman spaces can be indexes of an array
					// These spaces match the index of the wordArray, so it can be identified where the winning letter should go!
				
				// Display how many guesses are left.
				console.log("You have " + guessesLeft + " guesses left.");
			}
}

// Repeat the prompt until the user has run out of guesses or has guessed the word.
	// Has the user guessed the word, yet? If yes, change gameOn = false; If no, keep gameOn: true;


	// Prompt repeat statement
	for (guessesLeft; guessesLeft >= 0 && gameOn; guessesLeft--) {
		guess();
	}

