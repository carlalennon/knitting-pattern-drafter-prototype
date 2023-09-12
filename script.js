
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



let iconKnit = new Image();
iconKnit.src = "./assets/images/icon-k.png";

function createGrid() {
    
}

function draw() {
    ctx.drawImage(iconKnit, 0, 0);
}

function intervalLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw();
}

setInterval(intervalLoop,200);

console.log("hi");