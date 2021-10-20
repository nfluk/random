// function that finds the largest divisor of a number

function largestDivisor(num) {
  var result = 1; // the smallest possible divisor - if the largest then the num is a prime number

  var i;

  for (i = 2; i < num; i++) {
    // make sure to have less than the actual num since every num is divisible by itself as the largest num otherwise
    if (num % i === 0) {
      result = i;
    }
  }

  return result;
}
