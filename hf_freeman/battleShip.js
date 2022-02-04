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

var location1 = Math.round(Math.random() * 4); // initialize randomly later
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
