/* 

General flow of game:

1. user starts game
2. game places a ship at a random location on grid
3. game play begins. Repeat the following until ship sunk:
    3.1. prompt user to guess a number
    3.2. check if hit, miss, or sink
4. game finished & user gets rating based on number of guesses

*/

// declare and initialize ship location variables

var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location1 + 2;

// declare user's current guess

var guess;

// declare and initialize number of hits

var hits = 0;

// declare and initialize number of guesses

var guesses = 0;

// declare and initialize if ship is sunk or not

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Enter a number in the range 0-6.", "Number in range 0-6.");

  if (guess == null) {
    break;
  }

  guess = parseInt(guess, 10);

  // step 1: check if input is a number in range 0-6
  if (isNaN(guess) || guess > 6 || guess < 0) {
    alert(
      "That is not a number in the range 0-6. Please enter a number in the range 0-6.",
      "Number in range 0-6."
    );
  } else {
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT! Well done!");
      guesses += 1;
      hits += 1;
    } else {
      alert("Miss. Try again.");
      guesses += 1;
    }

    // step 3: check if ship is sunk
    if (hits == 3) {
      isSunk = true;
      // step 4: tell player the score
      alert("Good job. You sank my ship!");
      alert("It took you " + guesses + " guesses to sink the ship.");
      alert("Your shooting accuracy was: " + 3 / guesses);
    }
  }
}

alert("Thanks for playing and hope to see you again.");
