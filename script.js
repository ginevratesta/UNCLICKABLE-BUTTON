const yes = document.querySelector("#yesButton");
const setPlay = document.querySelector("#button0");
const newButton = document.createElement("button");
const title = document.querySelector("h1");
const container = document.querySelector("#container");
let counter = 0;

function setRandomPosition(ev) {
  const maxX =
    container.clientWidth - (newButton.clientWidth + setPlay.clientWidth);
  const maxY =
    container.clientHeight - (newButton.clientHeight + setPlay.clientHeight);
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  console.log(ev.target);

  if (ev.target === setPlay) {
    setPlay.style.top = `${randomY}px`;
    setPlay.style.left = `${randomX}px`;
  } else if (ev.target === newButton) {
    const newButtonX =
      container.clientWidth - (newButton.clientWidth + setPlay.clientWidth);
    const newButtonY =
      container.clientHeight - (newButton.clientHeight + setPlay.clientHeight);
    const newButtonRandomX = Math.floor(Math.random() * newButtonX);
    const newButtonRandomY = Math.floor(Math.random() * newButtonY);

    newButton.style.top = `${newButtonRandomY}px`;
    newButton.style.left = `${newButtonRandomX}px`;
  }

  counter++;

  if (counter === 3) {
    container.appendChild(newButton);
    newButton.innerText = "U SURE?";
    newButton.id = "button1";
    newButton.classList.add("crazyButton", "modify");
    newButton.addEventListener("mouseover", setRandomPosition);
  }


  if (ev.target === yes) {
    counter--;
    title.innerText = "I Love You Too!";
  }
}

setPlay.addEventListener("mouseover", setRandomPosition);
yes.addEventListener("click", setRandomPosition);
