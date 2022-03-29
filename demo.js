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

var norm = 1.5

function cl(){
    console.log(norm)
    norm = 2
    console.log(norm)

}

Engine.run(engine);
Render.run(render);

let ball= Bodies.circle(600, 0, 20, {frictionAir:0.03, friction: 0.00001, restitution: 3, density: 0.01 })

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
let stack = Composites.stack(30, 10, 10, 10, 0, 0, function(x, y) {
    
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
let stackk = Composites.stack(620,400,10,25,0,0,function(x,y){
    return Bodies.rectangle(x,y,10,10)
})
//adds all defined shapes to the world
World.add(engine.world, [stack, stackk, floor, roof, lwall, rwall, ball]);

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);

World.add(engine.world, [mouseConstraint])