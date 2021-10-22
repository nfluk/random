// pigLatin using a while loop and no arrays - I couldn't do it. Revisit when learned more js!!

function pigLatin(word) {
  if (typeof word !== "string") {
    throw "The input for pigLatin needs to be a string!!!";
  }

  function vowel(letter) {
    if (
      letter !== "a" ||
      letter !== "e" ||
      letter !== "i" ||
      letter !== "o" ||
      letter !== "u"
    ) {
      return true;
    } else {
      return false;
    }
  }

  var result;
  var secondPart = "";
  var i = 0;

  while (word.charAt(i) !== vowel && i < word.length) {
    secondPart = secondPart + word.charAt(i);
    i++;
  }

  var start = word.length - secondPart.length;

  var firstPart = word.substr(start, word.length);

  result = firstPart + secondPart + "ay";

  return result;
}
