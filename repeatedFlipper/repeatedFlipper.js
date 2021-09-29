for (let i = 0; i < 5; i++) {
  coinFlip = Math.round(Math.random());
  if (coinFlip === 1) {
    console.log("#" + (i + 1) + " Heads");
  } else {
    console.log("#" + (i + 1) + " Tails");
  }
}
