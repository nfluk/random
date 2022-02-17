var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
];

function baby(month) {
  var input = prompt("Enter the month number when you got pregnant:");
  var pregnant = input - 1; // to correct for the 0 start of the array.
  var due = pregnant + 9;

  console.log("input is " + input);
  console.log("pregnant is " + pregnant);
  console.log("due is " + due);

  document.getElementById("result").innerHTML =
    "9 months from " +
    months[pregnant] +
    " is " +
    "<strong>" +
    months[due] +
    "</strong>";
}
