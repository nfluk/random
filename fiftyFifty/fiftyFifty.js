document.getElementById("flipper").onclick = function () {
  let flip = Math.round(Math.random());
  if (flip === 1) {
    console.log("Heads");
    console.log(flip);
  } else {
    console.log("Tails");
    console.log(flip);
  }

  this.style.color = "red";
};
