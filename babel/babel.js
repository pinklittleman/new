
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let colours = ['red', 'green', 'blue','black','white','grey','yellow','orange','pink','#e31010','#5be310','#9810e3','#1089e3']
let x = 0
let y = 0

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    art()
}, 2000);

function art(){
    for (let i = 1; i <= canvas.width; i++) {
        var randColor = colours[Math.floor(Math.random() * colours.length)];
        ctx.fillStyle = randColor
        ctx.fillRect(x, y, 1, 1);
        x++
        if(x >= canvas.width){
            i = 0
            x = 0
            y++
            console.log('new line')
        }
        if(y >= canvas.height){
            y = 0
            console.log('finished')
            break
        }      
    }
}


