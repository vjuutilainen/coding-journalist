window.onload = () => {

  const select = document.querySelector('select');
  const info = document.querySelector('p');

  select.onchange = (e) => {
    let selectedOptionValue = e.target.value; 
    info.textContent = 'You have chosen ' + selectedOptionValue;
  };

};