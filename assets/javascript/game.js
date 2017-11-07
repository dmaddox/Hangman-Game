
// Variables
var word = "Hello world"; // Winning word
var guessesLeft = 15; // Number of guesses remaining
var wrongLetters; // All wrong guessed letters
var usedLetters;  //All the correct guessed letters
var gameOn = true; // Is the game still on?


// Setup Document & Console

	// Display the empty word.
	document.write("_ _ _ _ _ &nbsp;_ _ _ _ _!</br>");

	// Display how many guesses are left.
	console.log("You have " + guessesLeft + " guesses left.");


// Get the winning word ready for comparison
	// First, the word needs to be changed to uppercase
	var word = word.toUpperCase();
	// Next, Remove spaces from the string
	var word = word.split(' ').join('');
	// Third, the word needs to be broken into an array
	var wordArray = word.split("");


// Ask a user to guess a letter & store it as a variable.
var guess = prompt("Guess a letter.");
	//Control the input, requiring a single letter
	// control the input, forcing upper-case
	var guess = guess.toUpperCase();


// Check if the guessed letter is in the word.
if (word.indexOf(guess) === -1) {
	console.log ("You got it wrong :(");
	// Incriment guesses left by -1
	guessesLeft--;
	// Display how many guesses are left.
	// Add new guess to list of guessed letters  -- NEEDED --
	console.log("You have " + guessesLeft + " guesses left.");
} else {
	console.log ("You got a letter!!!");
	// Display the letter in the document -- NEEDED --
	guessesLeft--;
	// Display how many guesses are left.
	console.log("You have " + guessesLeft + " guesses left.");
}

// If you still have guesses left, and the word isn't won, yet, then repeat the prompt.
	// Are there guesses left?
	if (guessesLeft > 0) {
		gameOn = true;
	} else {
		gameOn = false;
	}
	// Has the user guessed the word, yet?
	// repeat prompt

