let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

ctx.fillStyle = '#F0DB4F';
ctx.strokeStyle = 'red';

ctx.fillRect(50, 50, 150, 100);
ctx.strokeRect(50, 50, 150, 100);