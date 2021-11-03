// takes a string and returns the string in reverse as output

function reverseString(message) {
  if (typeof message !== "string") {
    throw "You need to enter a string!!!";
  }

  var result = "";

  for (i = message.length - 1; i >= 0; i--) {
    result = result + message.charAt(i);
  }

  return result;
}

export default reverseString;
