// the scores
var scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

function summary(scoresArray) {
  var highestScore = Math.max(...scores);
  var highScoreArray = [];
  var listBody = document.getElementById("list");

  for (var i = 0; i < scoresArray.length; i++) {
    // go through the array and display test# and score.
    listBody.innerHTML =
      listBody.innerHTML +
      "Bubble solution #" +
      i +
      " score: " +
      scoresArray[i] +
      "<br>";
  }

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] === highestScore) {
      highScoreArray.push(i);
    }
  }

  document.getElementById("number-of-tests").innerHTML =
    "Bubbles tests: " + scoresArray.length;
  document.getElementById("highest").innerHTML =
    "Highest bubble score: " + highestScore;
  document.getElementById("top-scores").innerHTML =
    "Solutions with highest score: " + highScoreArray;
}

summary(scores);
