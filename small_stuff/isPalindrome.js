// checks to see if a string is a palindrome or not - takes whitespace into account

import reverseString from "./reverseString";
import removeNonLetters from "./removeNonLetters";

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
  var newString = removeNonLetters(string);

  if (typeof string === reverseString(newString)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
