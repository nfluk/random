// the scores
var scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

function summary(scoresArray) {
  var i = 0;
  for (i = 0; i < scoresArray.length; i++) {
    document.getElementById("score").innerHTML =
      "Bubble solution #" + i + " score: " + scoresArray[i];
    console.log(scoresArray[i]);
  }

  document.getElementById("number-of-tests").innerHTML =
    "Bubbles tests: " + scoresArray.length;
  console.log(scoresArray.length);
  document.getElementById("highest").innerHTML =
    "Highest bubble score: " + Math.max(scoresArray);
  console.log(Math.max(scoresArray));
  document.getElementById("top-scores").innerHTML =
    "Solutions with highest score: ... to be added soon ...";
}

summary(scores);
