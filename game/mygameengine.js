const { arch } = require("os")

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.arc(100,100,20,0,2*Math.PI)
ctx.stroke()

function animate(){
    requestAnimationFrame(animate)
    console.log('loop')
    canvas.width = innerWidth
    canvas.height = innerHeight
}

animate()