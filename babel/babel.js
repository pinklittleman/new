
document.getElementById('hide_id').style.cursor = 'none';

const socket = io.connect('wss://pinky.uk.to:4000');

function setup() {
    createCanvas(innerWidth,innerHeight);
}
  
function draw() {
    background(66);
}



