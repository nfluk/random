// returns the highest number of three

function maxOfThree(a, b, c) {
  var result;

  if (a > b && a > c) {
    result = a;
  } else if (b > c) {
    result = b;
  } else {
    result = c;
  }

  return result;
}
