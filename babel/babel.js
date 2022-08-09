let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

let colours = ['red', 'green', 'blue']

ctx.fillStyle = 'red';

function poggers(){
    for (let y = 0; y <= 400; y++){
        for (let x = 0; x <= 800; x++) {
            var randColor = colours[Math.floor(Math.random() * colours.length)];
            ctx.fillStyle = randColor
            ctx.fillRect(i, 50, 1, 1);
            
        }
    }
       
}
