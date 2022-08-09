let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

let colours = ['red', 'green', 'blue']

ctx.fillStyle = 'red';

function poggers(){
    for (let i = 0; i <= 800; i++) {
        var randColor = colours[Math.floor(Math.random() * colours.length)];
        ctx.fillStyle = randColor
        ctx.fillRect(i, 50, 1, 1);
        
    }   
}
