// returns the first lower case letter in a string

function firstLowerCase(tweet) {
  if (typeof tweet !== "string") {
    throw "the input to firstLowerCase needs to be a string!";
  }

  for (i = 0; i < tweet.length; i++) {
    if (
      tweet.charAt(i) === tweet.charAt(i).toLowerCase() &&
      tweet.charAt(i) !== " "
    ) {
      return tweet.charAt(i);
    }
  }
}

// another way to do the same thing

function firstLowerCase(tweet) {
  if (typeof tweet !== "string") {
    throw "the input to firstLowerCase needs to be a string!";
  }

  var result = "";

  for (i = 0; i < tweet.length; i++) {
    if ("a" <= tweet.charAt(i) && tweet.charAt(i) <= "z") {
      result = tweet.charAt(i);
      break; // breaks the loop if this condition is met - since I want the first time this happens 'break' is what I need
    }
  }
  return result;
}

// a third way to do the same thing (that I just learned of)

function firstLowerCase(tweet) {
  if (typeof tweet !== "string") {
    throw "the input to firstLowerCase needs to be a string!";
  }

  var result = "";

  for (i = 0; i < tweet.length && result === ""; i++) {
    // added a second condition to the loop
    if ("a" <= tweet.charAt(i) && tweet.charAt(i) <= "z") {
      result = tweet.charAt(i);
    }
  }
  return result;
}
