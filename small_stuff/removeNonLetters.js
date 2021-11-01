// removes non letters from a string

function removeNonLetters(str) {
  if (typeof str !== "string") {
    throw "You need to enter a string!";
  }

  if (typeof str !== "string") {
    throw "You need to enter a string!";
  }

  var result = "";

  for (i = 0; i <= str.length; i++) {
    if (
      (str.charAt(i) >= "a" && str.charAt(i) <= "z") ||
      (str.charAt(i) >= "A" && str.charAt(i) <= "Z")
    ) {
      result = result + str.charAt(i);
    }
  }

  return result;
}
