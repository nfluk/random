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
