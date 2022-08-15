
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 800

let x = 0
let y = 0

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    art()
}, 1500);

function art(){
    for (let i = 1; i <= canvas.width; i++) {
        ctx.fillStyle = 'black'
        ctx.fillRect(x, y, 1, 1);
        x=x+1
        if(x >= canvas.width){
            i = 0
            x = 0
            y=y+1
            console.log('new line')
        }
        if(y >= canvas.height){
            y = 0
            console.log('finished')
            break
        }      
    }
}

addEventListener('mousemove', (event) => {
    console.log(event.clientX)
})
