
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ball,ground

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(200,200,30,{restitution:1})
	World.add(world,ball)

	ground=Bodies.rectangle(200,300,400,30,{isStatic:true})
    World.add(world,ground)
}


function draw() {
  
  background(0);
  

  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)



  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,30)
}

