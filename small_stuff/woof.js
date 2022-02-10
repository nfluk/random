function woof(dogName, dogWeight) {
  var dogName = prompt("Type a dog name:", "Dog name");
  var dogWeight = prompt("Type the dogs weight in lbs:", "Dog weight (lbs)");
  if (dogWeight > 20) {
    console.log(dogName + " goes WOOF WOOF");
  } else {
    console.log(dogName + " goes woof woof");
  }
}

woof();
