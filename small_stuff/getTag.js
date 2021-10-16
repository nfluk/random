// returns the current HTML tag name without the brackets and and/or a slash if a closing tag

function getTagName(tag) {
  var result;

  if (tag[1] === "/") {
    result = tag.slice(2, tag.length - 1);
  } else {
    result = tag.slice(1, tag.length - 1);
  }

  return result;
}
