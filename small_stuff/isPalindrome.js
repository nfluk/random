// checks to see if a string is a palindrome or not - takes whitespace into account

import reverseString from "./reverseString";

function isPalindrome(string) {
  if (string !== "string") {
    throw "You need to enter a string!";
  }

  var result = "";

  if (typeof string === reverseString(string)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// disregards whitespace

function isPalindrome(string) {
  if (string !== "string") {
    throw "You need to enter a string!";
  }

  var result = "";

  if (typeof string === reverseString) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
