
document.getElementById('hide_id').style.cursor = 'none';

const socket = io.connect('wss://pinky.uk.to:4000');

let ball

function setup() {
    createCanvas(innerWidth,innerHeight);
}
  
function draw() {
    background(66);
    ball = ellipse(50,50,80,80);
    
}

function mouseMoved(){
    ball.translate(mouseX,mouseY)
}

