// takes a one char long string as input and returns true if it is a vowel and false if it is not a vowel

function isVowel(letter) {
  if (typeof letter !== "string" || letter.length > 1) {
    throw "You need to input a single letter!!!";
  }

  var result;

  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
