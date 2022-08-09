let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

let colours = ['red', 'green', 'blue']


function poggers(){
    
    for (let x = 0; x <= 800; x++) {
        var randColor = colours[Math.floor(Math.random() * colours.length)];
        ctx.fillStyle = randColor
        ctx.fillRect(x, y, 1, 1);
        if(x === 800){
            x = 0
            y++
        }
        
    }
       
}
