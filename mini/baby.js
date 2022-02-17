var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];

function baby(month) {
  var input = prompt("Enter the month number when you got pregnant:");
  var pregnant = input - 1; // to correct for the 0 start of the array.
  var due = pregnant + 9;

  console.log(input);
  console.log(pregnant);
  console.log(due);

  document.getElementById("result").innerHTML =
    "9 months from " + months[input] + " is " + months[due];
}
