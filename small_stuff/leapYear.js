// returns true if a year is a leap year and false if a year is not a leap year

function isLeapYear(year) {
  var result;

  if (year % 4 !== 0) {
    result = false;
  } else if (year % 100 !== 0) {
    result = true;
  } else if (year % 400 !== 0) {
    result = false;
  } else {
    result = true;
  }

  return result;
}
