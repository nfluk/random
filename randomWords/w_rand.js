function makePhrase() {
  //array of some words
  var word1 = ["all-time", "multi-tier", "head-2-head"];
  var word2 = ["powerup", "value-added", "focused"];
  var word3 = ["solutions", "win", "strategy", "conquest"];

  //generate random word from each of the above arrays
  var rand1 = Math.floor(Math.random() * word1.length);
  var rand2 = Math.floor(Math.random() * word2.length);
  var rand3 = Math.floor(Math.random() * word3.length);

  //chose a random word from each array and concatenate the words into a string
  var string = word1[rand1] + " " + word2[rand2] + " " + word3[rand3];

  //display the string
  alert(string);
}

//call the function so that it runs
makePhrase();
