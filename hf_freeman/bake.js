function bake(degrees) {
  var message;

  if (degrees > 500) {
    message = "I am not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I am not a fridge!";
  } else {
    message = "That is a good temperature for baking.";
  }

  return message;
}

var ok = bake(350);
var hot = bake(550);
var cold = bake(22);

console.log(cold);
