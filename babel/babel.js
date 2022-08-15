
document.getElementById('hide_id').style.cursor = 'none';

const socket = io.connect('wss://pinky.uk.to:4000');

function setup() {
    createCanvas(innerHeight, innerWidth);
}
  
function draw() {
    background(220);
}



