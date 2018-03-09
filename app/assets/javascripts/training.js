var pressedKey, chosenLabel;
document.onkeydown = function(e) {
  pressedKey = e.key;
  if (pressedKey.match(/\d+/) != null) {
    chosenLabel = pressedKey;
  }
};
