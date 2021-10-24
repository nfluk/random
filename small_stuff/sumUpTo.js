// sums up all the whole integers up to the given integer and outputs the sum

function sumUpTo(num) {
  if (typeof num !== "number") {
    throw "Please enter a number!";
  }

  var result = 0;

  for (i = 0; i <= num; i++) {
    result += i;
  }

  return result;
}
