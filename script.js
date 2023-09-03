
let mouseDown = false;

document.body.onmousedown = () => {mouseDown = true};
document.body.onmouseup = () => {mouseDown = false};

const container = document.querySelector(".container");
const promptButton = document.querySelector(".prompt");

function getRandom() {
    return Math.floor(Math.random()*1000) % 255;
}

function changeColor(e) {

    if(e.type === 'mouseover' && !mouseDown) return;
    let currentBrightness = this.style.filter || 100;
    this.setAttribute('style', `background-color: rgb(${getRandom()}, ${getRandom()}, ${getRandom()});`)
    console.log(currentBrightness);
    currentBrightness = parseInt(currentBrightness) - 10;
    currentBrightness = Math.max(currentBrightness, 0);
    this.style.filter = `brightness(${currentBrightness}%)`;

    // this.classList.add("changeColor");
    // this.style.background = rgb(1,2,3);
}

function hoverEndFunction(e) {
}


function makeAGrid(n) {

    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for(let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener('mouseover', changeColor);
            box.addEventListener('mousedown', changeColor);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    
}

makeAGrid(16);

promptButton.addEventListener('click', (e) => {
    let numOfGrid = +(prompt("Enter a value below 100"));

    if (isNaN(numOfGrid) || typeof numOfGrid !== "number" || (numOfGrid < 0 || numOfGrid > 100)) {
        alert("Please type valid number");
        return;
    }
    makeAGrid(numOfGrid);
})
