
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

let colours = ['red', 'green', 'blue']
let x = 0
let y = 0
let size = prompt("please enter how big you want the pixels to be 1-250")

let looper = setInterval(() => {
    var randColor = colours[Math.floor(Math.random() * colours.length)];
    ctx.fillStyle = randColor
    ctx.fillRect(x, y, size, size);
    x=x+size
    if(x === canvas.width){
        x = 0
        y=y+size
        console.log('new line')
    }
    if(y === canvas.height){
        // clearInterval(looper)
    }
}, 0.);
