// checks if input is a lower case letter or not

function isLowerCaseLetter(letter) {
  if (typeof letter !== "string" || letter > 1) {
    throw "You need to input a single letter!!!";
  }

  var result;

  if (letter === letter.toLowerCase()) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
