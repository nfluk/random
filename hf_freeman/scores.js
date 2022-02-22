// the scores
var scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

function summary(scoresArray) {
  var listBody = document.getElementById("list");

  for (var i = 0; i < scoresArray.length; i++) {
    listBody.innerHTML =
      listBody.innerHTML +
      "Bubble solution #" +
      i +
      " score: " +
      scoresArray[i] +
      "<br>";
  }

  document.getElementById("number-of-tests").innerHTML =
    "Bubbles tests: " + scoresArray.length;
  document.getElementById("highest").innerHTML =
    "Highest bubble score: " + Math.max(...scores);
  document.getElementById("top-scores").innerHTML =
    "Solutions with highest score: ... to be added soon ...";
}

summary(scores);
