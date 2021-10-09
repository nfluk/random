function fizzBuzz(num) {
  if (num <= 100 && num >= 0) {
    var start = 1;
    while (start < num) {
      if (start % 3 == 0) {
        console.log("Fizz");
      } else if (start % 5 == 0) {
        console.log("Buzz");
      } else console.log(start);
      start++;
    }
  } else alert("Your number is not within the range 1-100.");
}

document.getElementById("StartButton").onclick = function () {
  var num = prompt("Enter a number within the range 1-100:");
  fizzBuzz(num);
};
