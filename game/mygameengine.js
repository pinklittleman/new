const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = innerHeight -5
canvas.width = innerWidth -5

const BALLZ = [];

let LEFT, UP, RIGHT, DOWN;

//velocity gets multiplied by (1-friction)
let friction = 0.06;

var img = document.getElementById("helpme");

class Projectile{
    constructor(x,y,r,v){
        this.x = 200
        this.y = 100
        this.r = r
        this.v = v
        this.l = 1
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false)
       // ctx.drawImage(img, this.x - 25, this.y - 25);
        ctx.fillStyle = '#343434'
        ctx.fill()
    }
    update(){
        this.draw()
        this.x += this.v.x
        this.y += this.v.y
        this.l++
    }
}

class Ball{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        // this.name = socket.id
        this.vel_x = 0;
        this.vel_y = 0;
        this.acc_x = 0;
        this.acc_y = 0;
        this.acceleration = 1;
        this.player = false;
        BALLZ.push(this);
    }

    drawVel(){
        ctx.fillStyle = "#000000";
        ctx.drawImage(img, this.x - 25, this.y - 25);
        // ctx.fillText('x: '+this.x+' y: '+this.y, this.x - 5, this.y);
    }

    drawBall(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = "#97d4ff";
        ctx.fill();
        ctx.closePath();
    }

    //displaying the current acceleration and the velocity of the ball
    display(){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.acc_x*100, this.y + this.acc_y*100);
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.vel_x*10, this.y + this.vel_y*10);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.closePath();
    }
}

function keyControl(b){
    document.addEventListener('keydown', function(e){
        if(e.key === 'a'){
            LEFT = true;
        }
        if(e.key === 'w'){
            UP = true;
        }
        if(e.key === 'd'){
            RIGHT = true;
        }
        if(e.key === 's'){
            DOWN = true;
        }
    });
    
    document.addEventListener('keyup', function(e){
        if(e.key === 'a'){
            LEFT = false;
        }
        if(e.key === 'w'){
            UP = false;
        }
        if(e.key === 'd'){
            RIGHT = false;
        }
        if(e.key === 's'){
            DOWN = false;
        }
        if(e.key === 't'){
            // works just like matterjs set values 
            // Ball1.x = 200
            // Ball1.y = 200
            // Ball1.vel_x = 8
            
        }
    });
    
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

let Projectiles = []

function mainLoop() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    BALLZ.forEach((b) => {
        b.drawBall();
        if (b.player){
            keyControl(b);
        }
        b.drawVel();
        // b.display(); shows the velocity and direction
    });
    Projectiles.forEach((projectile, index)=>{
        projectile.update()
        if(projectile.l >= 400){
            Projectiles.splice(projectile, 1)
        }
    })
    let angle = Math.atan2(Ball1.y - 100, Ball1.x - 200)
    let velocity2 = {
        x:Math.cos(angle)*2,
        y:Math.sin(angle)*2
    }
    Projectiles.push(
        new Projectile(null,null,10,velocity2)
    )
    requestAnimationFrame(mainLoop);
}

let Ball1 = new Ball(200, 200, 30);
Ball1.player = true;

requestAnimationFrame(mainLoop);
