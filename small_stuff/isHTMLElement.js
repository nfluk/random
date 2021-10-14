// checks if an argument is a valid HTML element

// not a good solution b/c non valid tags are possible and it still passes
function isHTMLElement(string) {
  return (
    string.includes("<") &&
    string.includes("</") &&
    string.includes(">") &&
    string.includes(">")
  );
}
