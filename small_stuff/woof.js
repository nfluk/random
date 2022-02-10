function woof(dogName, dogWeight) {
  // get the parameters from user
  var dogName = prompt("Type a dog name:", "Dog name");
  var dogWeight = prompt("Type the dogs weight in lbs:", "Dog weight (lbs)");

  // capitalize the first letter in the name parameter
  dogName = dogName.charAt(0).toUpperCase() + dogName.slice(1);

  // run the logic to see result
  if (dogWeight > 20) {
    alert(dogName + " goes WOOF WOOF");
  } else {
    alert(dogName + " goes woof woof");
  }
}
