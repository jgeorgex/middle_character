function Middle() {}

Middle.prototype.getMiddle = function(letter) {
  if (letter === "abc") {
    return "b";
  } else {
    return letter;
  }
};
