// takes a number and checks if that number is prime (output: true) or not (output: false)

function isPrime(num) {
  if (typeof num !== "number") {
    throw "The input needs to be a number!";
  }

  var result;

  if (num <= 1) {
    result = false;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        result = false;
      } else {
        result = true;
      }
    }
  }

  return result;
}
