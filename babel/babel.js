
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let colours = ['red', 'green', 'blue']
let x = 0
let y = 0

for (let i = 1; i <= canvas.width; i++) {
    var randColor = colours[Math.floor(Math.random() * colours.length)];
    ctx.fillStyle = randColor
    ctx.fillRect(x, y, 1, 1);
    x++
    if(x >= canvas.width){
        i = 0
        x = 0
        y++
    }
    if(y >= canvas.height){
        break
    }      
}


