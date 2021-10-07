var num = prompt();

function fizzBuzz(num) {
  var start = 1;
  while (start < num) {
    if (start % 3 == 0) {
      console.log("Fizz");
    } else if (start % 5 == 0) {
      console.log("Buzz");
    } else console.log(start);
    start++;
  }
}
