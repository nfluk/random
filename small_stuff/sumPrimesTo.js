// sums all primes up to input number

// isPrime function added here since it is used in the sumPrimesUpTo function
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

// sums all primes up to input number

function sumPrimesUpTo(number) {
  if (typeof number !== "number") {
    throw "You need to enter a number!!";
  }

  var sum = 0;
  var i = 0;

  while (i < number) {
    if (isPrime(i) === true) {
      sum = sum + i;
      i++;
    } else {
      i++;
    }
  }

  return sum;
}
