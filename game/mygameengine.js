let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

function animate(){
    requestAnimationFrame(animate)
    console.log('loop')
}

animate()