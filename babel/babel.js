let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

ctx.fillStyle = '#F0DB4F';
ctx.strokeStyle = 'red';

ctx.fillRect(50, 50, 1, 1);

for(i = 0; i > 10;){
    console.log(i)
    i++
}
