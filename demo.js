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
		hasBounds: true,
        width:700,
        height:300,
	}
});


Engine.run(engine);
Render.run(render);

let ball= Bodies.circle(65, 50, 20, 10)

//                          x    y   width  height
let floor=Bodies.rectangle(0, 300, 3500, 50,{
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
let rwall=Bodies.rectangle(700, 600, 50, 3500,{
	isStatic: true
});
//creates a realy coool stack that has pysics and cool stuff
let stackk=Composites.stack(65, 50, 10, 20, 20, 0, function(x, y){
    //                       radius
	return Bodies.circle(x, y, 5, 10, 1,{
        isStatic:true
    });
});
//adds all defined shapes to the world
World.add(engine.world, [stackk, floor, roof, lwall, rwall, ball]);

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);

World.add(engine.world, [mouseConstraint])