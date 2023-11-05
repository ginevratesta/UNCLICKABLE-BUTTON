const setPlay = document.querySelector(".crazyButton");
const container = document.querySelector("#container");
const newButton = document.createElement('button');
let counter = 0;

function setRandomPosition(event) {
  const maxX = container.clientWidth - (newButton.clientWidth + setPlay.clientWidth);
  const maxY = container.clientHeight - (newButton.clientHeight + setPlay.clientHeight);
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  if (event.target === setPlay) {
    setPlay.style.top = `${randomY}px`;
    setPlay.style.left = `${randomX}px`;
  } else if (event.target === newButton) {
    const newButtonX = container.clientWidth - (newButton.clientWidth + setPlay.clientWidth);
    const newButtonY = container.clientHeight - (newButton.clientHeight + setPlay.clientHeight);
    const newButtonRandomX = Math.random() * newButtonX;
    const newButtonRandomY = Math.random() * newButtonY;
    
    newButton.style.top = `${newButtonRandomY}px`;
    newButton.style.left = `${newButtonRandomX}px`;
  }
  
  counter++;

  if (counter === 3) {
    container.appendChild(newButton);
    newButton.innerText = setPlay.innerText;
    newButton.classList.add('crazyButton');
    newButton.addEventListener("mouseover", setRandomPosition);
  }
}

setPlay.addEventListener("mouseover", setRandomPosition);
