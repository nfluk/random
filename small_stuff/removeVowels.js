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
