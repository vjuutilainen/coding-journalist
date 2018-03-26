window.onload = function() {

  var heightElement = document.getElementById('height');
  var weightElement = document.getElementById('weight');
  var buttonElement = document.getElementById('result-button');
  var resultElement = document.getElementById('result');

  buttonElement.onclick = function() {

    var height = parseFloat(heightElement.value);
    var weight = parseFloat(weightElement.value);
    var calculation = weight / (height * height);

    resultElement.innerHTML = isNaN(calculation) ? 'Cannot calculate result' : calculation;

  };

};
