function flip(number) {
  var countHeads = 0;

  for (let i = 0; i < number; i++) {
    var coinFlip = Math.round(Math.random());

    if (coinFlip === 1) {
      console.log(i + 1 + ". heads");
      countHeads = countHeads + 1;
    } else {
      console.log(i + 1 + ". tails");
    }
  }

  return countHeads / number;
}

flip(12);
