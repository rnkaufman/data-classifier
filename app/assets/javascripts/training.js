var pressedKey, chosenLabel;
var result = [];
var position = JSON.parse(localStorage.getItem('results'));
var display_data = JSON.parse(localStorage.getItem('datum'))[0];
var labels = JSON.parse(localStorage.getItem('labels'));

document.onkeydown = function(e) {
  pressedKey = e.key;
  if (pressedKey.match(/\d+/) != null && pressedKey <= labels.length) {
    chosenLabel = labels[pressedKey-1];
  }

  if (position == null) {
    var results = []
    result_json = {}
  } else {
    var results = JSON.parse(localStorage.getItem('results'));
    display_data = display_data[position-1];
  }
  result.push([chosenLabel])
  results.push(result);
  localStorage.setItem('results', JSON.stringify(results));

  // result = [{"label1" => {"data1", "data2"}}, {"label2" => {"data3", "data4"}}]

  localStorage.setItem('results', result);
};

function fetchData() {
  var display_data = JSON.parse(localStorage.getItem('datum'))[0];
  var training_data = document.getElementById('display_data');

  training_data.innerHTML='';
  training_data.innerHTML = '<p>' + display_data + '</p>';
}
