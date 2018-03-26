window.onload = () => {

  const input = document.querySelector('input');
  const response = document.querySelector('p');
  input.oninput = (e) => {
    let answer = e.target.value;
    response.textContent = answer.length > 3 ? 'Hello ' + answer + '!' : 'I have no idea who you are.';
  };

};