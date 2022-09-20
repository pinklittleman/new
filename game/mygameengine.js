let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;

let LEFT, RIGHT, UP, DOWN;

const balls = [];

class Ball{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.vel_x = 0;
        this.vel_y = 0;
        this.velocity = 1;
        this.player = false;
        balls.push(this);
    }
    drawball(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle = '#c7ffbf';
        ctx.fill();
    }
}

function kontrol(b){
    document.addEventListener('keydown', function(e){
        if(e.key === 'w'){
            UP = true;
        }
        if(e.key === 'a'){
            LEFT = true;
        }
        if(e.key === 's'){
            DOWN = true;
        }
        if(e.key === 'd'){
            RIGHT = true;
        }
    })
    
    document.addEventListener('keyup', function(e){
        if(e.key === 'w'){
            UP = false;
        }
        if(e.key === 'a'){
            LEFT = false;
        }
        if(e.key === 's'){
            DOWN = false;
        }
        if(e.key === 'd'){
            RIGHT = false;
        }
    })
    
    if(UP === true){
        b.vel_y = -b.velocity;
    }
    if(LEFT === true){
        b.vel_x = -b.velocity;
    }
    if(DOWN === true){
        b.vel_y = b.velocity;
    }
    if(RIGHT === true){
        b.vel_x = b.velocity;
    }
    if(!UP && !DOWN){
        b.vel_y = 0;
    }
    if(!RIGHT && !LEFT){
        b.vel_x = 0;
    }
    b.x += b.vel_x;
    b.y += b.vel_y;
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    kontrol(Ball1);
    balls.forEach((b) => {
        b.drawball();
        if(b.player === true){
            kontrol(b);
        }
    })

}

let Ball1 = new Ball(200,200,30);
Ball1.player = true;

animate();