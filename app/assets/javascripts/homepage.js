window.onload=function(){
  document.getElementById('initial_data').addEventListener('submit', saveData);
}

function saveData(e) {
  var data = document.getElementById('training_data').value;
  var labels = document.getElementById('training_labels').value;

  if (localStorage.getItem('datum') == null || localStorage.getItem('labels') == null) {
    var datum = [];
    datum.push(data)
    localStorage.setItem('datum', datum);
    localStorage.setItem('labels', labels);
  }
}
