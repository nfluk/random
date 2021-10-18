// a function that says how strong a password is based on the passwords length

function passwordStrength(password) {
  var result;

  if (password.length >= 15) {
    result = "Good password";
  } else if (password.length > 10) {
    result = "OK password";
  } else if (password.length > 8) {
    result = "Not a good password";
  } else {
    result = "Very poor password";
  }

  return result;
}
