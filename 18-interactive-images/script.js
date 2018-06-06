window.onload = () => {

  const overlayContainers = document.querySelectorAll('.overlay-container');

  const handleClick = (mouseEvent) => {
    mouseEvent.currentTarget.querySelector('.overlay').style.opacity ^= 1; // if it's one, make it zero and vise versa
  };
  
  overlayContainers.forEach(overlayContainer => {
    overlayContainer.addEventListener('click', handleClick);
  });

};