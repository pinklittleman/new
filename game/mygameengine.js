let canvas = document.getElementById('canvas')
let ctx = canvas.getContex('2d')

canvas.width = innerWidth
canvas.height = innerHeight

function animate(){
    requestAnimationFrame(animate)
    console.log('loop')
}

animate()