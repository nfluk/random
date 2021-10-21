// function that replaces vowels in a string with a star (*)

function removeVowel(message) {
  if (typeof message !== "string") {
    throw "the input to removeVowel must be a string!";
  }

  for (i = 0; i < message.length; i++) {
    if (
      message.charAt(i) === "a" ||
      message.charAt(i) === "e" ||
      message.charAt(i) === "o" ||
      message.charAt(i) === "u" ||
      message.charAt(i) === "i"
    ) {
      console.log("*");
    } else {
      console.log(message.charAt(i));
    }
  }
}

// function that skips the vowels and returns the rest of the letters from the string

function skipVowels(string) {
  if (typeof string !== "string") {
    throw "the input of skipVewels must be a string!!!";
  }

  var result = "";

  for (i = 0; i < string.length; i++)
    if (
      string.charAt(i) !== "a" &&
      string.charAt(i) !== "o" &&
      string.charAt(i) !== "u" &&
      string.charAt(i) !== "e" &&
      string.charAt(i) !== "i"
    ) {
      result = result + string.charAt(i);
    }
  return result;
}
