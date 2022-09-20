let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.arc(100,100,20,0,2*Math.PI)
ctx.fillStyle = '#424242'
ctx.stroke()
ctx.fill()
