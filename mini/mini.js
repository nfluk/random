function myFunction() {
  prompt("Enter your name here:");
}

function loadFunc() {
  alert("The pages has loaded." + new Date());
}

function spy(message) {
  console.log("You just " + message);
}

document.getElementById("button").onclick = function () {
  spy("clicked the button!");
};

document.getElementById("pOne").onclick = function () {
  spy("clicked the first paragraph!");
};

document.getElementById("pTwo").onclick = function () {
  spy("clicked the second paragraph!");
};
