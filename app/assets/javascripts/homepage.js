window.onload=function(){
  document.getElementById('initial_data').addEventListener('submit', saveData);
}

function saveData(e) {
  var labels = document.getElementById('training_labels').value;
  var data = document.getElementById('training_data').value;

  if (localStorage.getItem('datum') == null) {
    var datum = [];
    datum.push(data)
    localStorage.setItem('datum', datum);
  }
}
