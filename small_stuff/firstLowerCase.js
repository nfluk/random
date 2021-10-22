// returns the first lower case letter in a string

function firstLowerCase(tweet) {
  for (i = 0; i < tweet.length; i++) {
    if (
      tweet.charAt(i) === tweet.charAt(i).toLowerCase() &&
      tweet.charAt(i) !== " "
    ) {
      return tweet.charAt(i);
    }
  }
}
