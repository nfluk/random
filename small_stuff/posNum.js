// make array with positive even numbers less than 10 and console.log them on separate line

var posNum = [];

// add positive even numbers to posNum array
for (i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    posNum.push(i);
  }
}

// console log each value in posNum array on separate line

for (i = 0; i < posNum.length; i++) {
  console.log(posNum[i]);
}
