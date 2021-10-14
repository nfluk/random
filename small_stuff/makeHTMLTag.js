// Takes two arguments and returns a HTML tag from the first argument. And the text inside the tag from the second argument

function makeHTMLText(tag, text) {
  var openingTag = "<" + tag + ">";
  var closingTag = "</" + tag + ">";
  return openingTag + text + closingTag;
}
