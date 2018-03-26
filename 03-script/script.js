window.onload = function() {

  var pets = document.querySelector('.pets');
  var button = document.querySelector('button');

  button.onclick = function() {
    var pet = document.createElement('img');
    var randomNumber = Math.random();
    console.log('Random number is ' + randomNumber);
    pet.src = randomNumber > 0.5 ? 'cat.jpg' : 'dog.jpg';
    pets.appendChild(pet);
  };

};
