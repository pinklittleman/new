let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
	
let engine = Engine.create();
let render = Render.create({
    element: document.body,
    engine: engine,
	options: {
        width: 800,
        height: 600,
        showAngleIndicator: false,
        wireframes: false
    }
});

var norm = 1.2

function cl(){
    console.log(norm)
    norm = 2
    console.log(norm)

}

Engine.run(engine);
Render.run(render);

let ball= Bodies.circle(500, 0, 20,{
    render: {
        strokeStyle: '#ffffff',
        sprite: {
            texture: 'hole.png'
        }
    }
})

//                          x    y   width  height
let floor=Bodies.rectangle(0, 600, 3500, 50,{
	isStatic: true
});
//creates a rectangle to act as a roof border
let roof=Bodies.rectangle(100, 0, 3500, 50,{
	isStatic: true
});
//creates a rectangle to act as a left wall border
let lwall=Bodies.rectangle(0, 600, 50, 3500,{
	isStatic: true
});
//creates a rectangle to act as a right wall border
let rwall=Bodies.rectangle(800, 100, 50, 3500,{
    isStatic: true
});
//creates a realy coool stack that has pysics and cool stuff
let stack = Composites.stack(50, 220, 7, 7, 0, 0, function(x, y) {
    
    return Bodies.rectangle(x, y, 50, 50, {
        restitution:norm,
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'smollbeans.png'
            }
        }
    });
});

let scales = 0.25
let scales2 = 1.5

let stackk = Composites.stack(600,60,10,10,0,0,function(x,y){
    return Bodies.rectangle(x,y,15,15,{restitution:norm})
})
//adds all defined shapes to the world
World.add(engine.world, [stack, stackk, floor, roof, lwall, rwall, ball]);

$('.scale').on('click', function () {
    ball.render.sprite.xScale = ball.render.sprite.xScale * scales2;
    ball.render.sprite.yScale = ball.render.sprite.yScale * scales2;
    Matter.Body.scale( ball, scales2, scales2);
});

// $('.stat').on('click', function freeze() {
//     Matter.Body.setStatic(ball,true);
// });

// $('.unstat').on('click', function unfreeze() {
//     Matter.Body.setStatic(ball,false);
// });

$('.descale').on('click', function () {
    ball.render.sprite.xScale = ball.render.sprite.xScale * scales;
    ball.render.sprite.yScale = ball.render.sprite.yScale * scales;
    Matter.Body.scale( ball, scales, scales);
});

window.onload = function(){
    var demo = document.getElementById('canvas');
    var value = 0;
    var space_bar = 32;
    var right_arrow = 101;
    var up1 = 38;
    var down = 40;
  
    window.onkeypress= function(event){
        if(event.which === space_bar){
            Matter.Body.setStatic(ball,true);
        };
        if(event.which === right_arrow)
       {
        Matter.Body.setStatic(ball,false);
       };
       if(event.which === up1){
        ball.render.sprite.xScale = ball.render.sprite.xScale * scales2;
        ball.render.sprite.yScale = ball.render.sprite.yScale * scales2;
        Matter.Body.scale( ball, scales2, scales2);
       }
       if(event.which === down){
        ball.render.sprite.xScale = ball.render.sprite.xScale * scales;
        ball.render.sprite.yScale = ball.render.sprite.yScale * scales;
        Matter.Body.scale( ball, scales, scales);
       }
    };
};    

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);

World.add(engine.world, [mouseConstraint])