function looper() {
  var loopCount = 5;

  while (loopCount > 0) {
    console.log("LoopCount: " + loopCount);
    loopCount = loopCount - 1;
  }
}

document.getElementById("button").onclick = function () {
  looper();
  this.style.color = "red";
};
