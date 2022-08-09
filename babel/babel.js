let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

let colours = ['red', 'green', 'blue']
let y = 0
let x = 0

function poggers(){
    
    for (;x <= 800;) {
        setTimeout(() => {
            var randColor = colours[Math.floor(Math.random() * colours.length)];
            ctx.fillStyle = randColor
            ctx.fillRect(x, y, 1, 1);
            x++
            if(x === 800){
                x = 0
                y++
                console.log('hollo')
            }
        }, 1000);
        
    }
       
}
