// checking if a string is a question by checking if the last character in the string is a question mark ("?")

var question = "Is this a question?";

if (question.length - 1 === question.indexOf("?")) {
  console.log("yes");
} else {
  console.log("that's not a question!");
}

// another way using less code

var question = "Is this a question?";

if (question.endsWith("?")) {
  console.log("yes");
} else {
  console.log("that's not a question!");
}

// turning the second version into a function

var question = "Is this a question?";

function isQuestion(potentialQuestion) {
  if (potentialQuestion.endsWith("?")) {
    return "yes";
  } else {
    return "that's not a question!";
  }
}
