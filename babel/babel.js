
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


addEventListener('mousemove', (event) => {
    console.log(event.cl)
})
