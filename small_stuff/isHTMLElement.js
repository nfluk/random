// checks if an argument is a valid HTML element

function isHTMLElement(string) {
  var last = string.length - 1;

  if (string[0] === "<" && string[1] === "/" && string[last] === ">") {
    return true;
  } else if (string[0] === "<" && string[last] === ">") {
    return true;
  } else {
    return false;
  }
}
