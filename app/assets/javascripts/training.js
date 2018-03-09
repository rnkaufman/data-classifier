var pressedKey, chosenLabel;
document.onkeydown = function(e) {
  pressedKey = e.key;
  if (pressedKey.match(/\d+/) != null) {
    chosenLabel = pressedKey;
  }
};

function fetchData() {
  var display_data = JSON.parse(localStorage.getItem('datum'));
  var training_data = document.getElementById('display_data');

  training_data.innerHTML='';
  training_data.innerHTML = '<p>' + display_data + '</p>';
}
