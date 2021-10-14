// checking if a string is a question by checking if the last character in the string is a question mark ("?")

var question = "Is this a question?";

if (question.length - 1 === question.indexOf("?")) {
  console.log("yes");
} else {
  console.log("that's not a question!");
}
