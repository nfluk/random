// return number of vowels present in a string

function countVowels(str) {
  if (typeof str !== "string") {
    throw "The input has to be a string!";
  }

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

  var sum = 0;

  for (i = 0; i <= str.length && isVowel(str.charAt(i)); i++) {
    sum = sum + 1;
  }

  return sum;
}
