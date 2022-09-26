const socket = io.connect('wss://pinky.uk.to:5000');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight -5
canvas.width = innerWidth -5

let LEFT, UP, RIGHT, DOWN;

//velocity gets multiplied by (1-friction)
let friction = 0.06;
let clientBalls = {}
let balls = []
let blocks = []

class Ball{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vel_x = 0;
        this.move = {left:false,up:false,right:false,down:false}
        this.vel_y = 0;
        this.acc_x = 0;
        this.acc_y = 0;
        this.destruct = false
        this.acceleration = 1;
        this.player = false;
        balls.push(this)
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = '#343434'
        ctx.fill()
        ctx.closePath();
    }
    update(){

    }
}

class Block{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vel_x = 0;
        this.vel_y = 0;
        this.acc_x = 0;
        this.acc_y = 0;
        this.destruct = false
        this.acceleration = 1;
        blocks.push(this)
    }
    draw(){
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fillStyle = '#343434'
        ctx.fill()
        ctx.closePath();
    }
    update(){

    }
}

function intersects(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (w2 !== Infinity && w1 !== Infinity) {
      w2 += x2;
      w1 += x1;
      if (isNaN(w1) || isNaN(w2) || x2 > w1 || x1 > w2) return false;
    }
    if (y2 !== Infinity && h1 !== Infinity) {
      h2 += y2;
      h1 += y1;
      if (isNaN(h1) || isNaN(y2) || y2 > h1 || y1 > h2) return false;
    }
    return true;
  }

function keyControl(b){
    document.addEventListener('keydown', function(e){
        if(e.key === 'a'){
            LEFT = true;
            b.left = false
        }
        if(e.key === 'w'){
            UP = true;
            b.up = false
        }
        if(e.key === 'd'){
            RIGHT = true;
            b.right = false
        }
        if(e.key === 's'){
            DOWN = true;
            b.down = false
        }
    });
    
    document.addEventListener('keyup', function(e){
        if(e.key === 'a'){
            LEFT = false;
            b.left = false
        }
        if(e.key === 'w'){
            UP = false;
            b.up = false
        }
        if(e.key === 'd'){
            RIGHT = false;
            b.right = false
        }
        if(e.key === 's'){
            DOWN = false;
            b.down = false
        }
        if(e.key === 't'){
            square1.destruct = true
        }
    });

    if(b.left === true || b.up === true || b.right === true || b.down === true){
        console.log(move)
    }
    //if true, the accelertion component gets a certain value
    if(LEFT){
        b.acc_x = -b.acceleration;
    }
    if(UP){
        b.acc_y = -b.acceleration;
    }
    if(RIGHT){
        b.acc_x = b.acceleration;
    }
    if(DOWN){
        b.acc_y = b.acceleration;
    }
    if(!UP && !DOWN){
        b.acc_y = 0;
    }
    if(!RIGHT && !LEFT){
        b.acc_x = 0;
    }

    //acceleration values added to the velocity components
    b.vel_x += b.acc_x;
    b.vel_y += b.acc_y;
    //velocity gets multiplied by a number between 0 and 1
    b.vel_x *= 1-friction;
    b.vel_y *= 1-friction;
    //velocity values added to the current x, y position
    b.x += b.vel_x;
    b.y += b.vel_y;

}

function gameloop(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    balls.forEach((b) => {
        b.draw()
        if(b.player === true){
            keyControl(b)
        }
        if(b.destruct === true){
            pos = balls.indexOf(b)
            balls.splice(pos,pos+1)
        }
    });
    blocks.forEach((bl) => {
        bl.draw()
    });

    setTimeout(() => {
        console.log(square1)
    }, 1000);
    

    // console.log(intersects(square1.x,square1.y,square1.w,square1.h,Block1.x,Block1.y,Block1.w,Block1.h))

    if(intersects(square1.x,square1.y,square1.w,square1.h,Block1.x,Block1.y,Block1.w,Block1.h) === true){
        square1.vel_x = 8
    }

    requestAnimationFrame(gameloop);
}


let square1 = new Ball(200,200,30,30);
let Block1 = new Block(0,0,10,1080)
let Block2 = new Block(100,100,1920,10)
let Block3 = new Block(0,0,10,1080)
let Block4 = new Block(0,0,10,1080)
square1.player = true;

requestAnimationFrame(gameloop);