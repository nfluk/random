// checks if a number is a prime number and returns true, or if it is not a prime number (returns false)
function isPrime(num) {
  if (typeof num !== "number") {
    throw "The input needs to be a number!";
  }

  var result = true;

  if (num <= 1) {
    result = false;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
  }

  return result;
}
