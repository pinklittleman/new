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

let ball= Bodies.circle(500, 0, 20, {frictionAir:0.03, friction: 0.00001, restitution: 3, density: 0.01 })

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
let stackk = Composites.stack(600,60,10,10,0,0,function(x,y){
    return Bodies.rectangle(x,y,15,15,{restitution:norm})
})
//adds all defined shapes to the world
World.add(engine.world, [stack, stackk, floor, roof, lwall, rwall, ball]);

$('.scale').on('click', function () {
    ball.render.sprite.xScale = ball.render.sprite.xScale * 1.5;
    ball.render.sprite.yScale = ball.render.sprite.yScale * 1.5;
    Matter.Body.scale( ball, 1.5, 1.5);
});

$('.descale').on('click', function () {
    ball.render.sprite.xScale = ball.render.sprite.xScale * 0.25;
    ball.render.sprite.yScale = ball.render.sprite.yScale * 0.25;
    Matter.Body.scale( ball, 0.25, 0.25);
});

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);

World.add(engine.world, [mouseConstraint])