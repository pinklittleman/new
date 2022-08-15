
const socket = io.connect('wss://pinky.uk.to:4000');

let ball

function setup() {
    createCanvas(innerWidth,innerHeight);
}
  
function draw() {
    let x = mouseX
    let y = mouseY
    background(66);
    rect(x,y,80,80)
    fill(50)
    
    
}

