var pressedKey, chosenLabel;
var results = {};
var position = JSON.parse(localStorage.getItem('results'));
var display_data = JSON.parse(localStorage.getItem('datum'));
var labels = JSON.parse(localStorage.getItem('labels'));

document.onkeydown = function(e) {
  pressedKey = e.key;
  if (pressedKey.match(/\d+/) != null && pressedKey <= labels.length) {
    chosenLabel = labels[pressedKey-1];
    if (position == null) {
      position = 0
    } else {
      results = JSON.parse(localStorage.getItem('results'));
      position = Object.keys(results).length;
    }

    results[`${display_data[position]}`] = chosenLabel;
    localStorage.setItem('results', JSON.stringify(results));
    next_data = display_data[position+1];

    if (next_data != undefined) {
      updateData(next_data);
    } else {
      showResults(results);
    }
  }
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

function showResults(results) {
  var page_results = document.getElementById('training_page');
  page_results.innerHTML='';
  page_results.innerHTML = '<p class="title">Training Results:</p>';
  page_results.innerHTML += '<p>' + JSON.stringify(results) + '</p>';
}
