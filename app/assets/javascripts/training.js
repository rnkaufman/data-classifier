var pressedKey, chosenLabel, previous_results;
var result = [];
var position = JSON.parse(localStorage.getItem('results'));
var display_data = JSON.parse(localStorage.getItem('datum'));
var labels = JSON.parse(localStorage.getItem('labels'));

document.onkeydown = function(e) {
  pressedKey = e.key;
  if (pressedKey.match(/\d+/) != null && pressedKey <= labels.length) {
    chosenLabel = labels[pressedKey-1];
  }

  if (position == null) {
    result_json = {}
    position = 0
  } else {
    previous_results = JSON.parse(localStorage.getItem('results'));
    position = Object.keys(previous_results).length;
  }

  var results = JSON.parse('{"' + display_data[position] + '":' + '"' + chosenLabel + '"}')
  localStorage.setItem('results', JSON.stringify(results));

  updateData(display_data[position+1]);
};

function fetchAndUpdateData() {
  var display_data = JSON.parse(localStorage.getItem('datum'))[0];
  updateData(display_data);
}

function updateData(display_data) {
  var training_data = document.getElementById('display_data');
  training_data.innerHTML='';
  training_data.innerHTML = '<p>' + display_data + '</p>';
}
