const setPlay = document.querySelector(".crazyButton");
const container = document.querySelector("#container");
const newButton = document.createElement('button');
let counter = 0

function setRandomPosition() {
        const maxX = container.clientWidth - setPlay.clientWidth;
        const maxY = container.clientHeight - setPlay.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        setPlay.style.margin = `${randomY}px ${randomX}px`;
        
        counter++

       if(counter === 3){
        container.appendChild(newButton);
        newButton.innerText = setPlay.innerText;
        newButton.classList.add('crazyButton');
        newButton.addEventListener("mouseover", setRandomPosition);
    }
    const newButtonX = container.clientWidth - newButton.clientWidth;
    const newButtonY = container.clientHeight - newButton.clientHeight;
    const newButtonRandomX = Math.floor(Math.random() * newButtonX);
    const newButtonRandomY = Math.floor(Math.random() * newButtonY);
    
    newButton.style.margin = `${newButtonRandomY}px ${newButtonRandomX}px`;

}

setPlay.addEventListener("mouseover", setRandomPosition);
