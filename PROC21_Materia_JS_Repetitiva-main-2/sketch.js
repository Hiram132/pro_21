
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var floor;
var engine;
var world;
var p1, p2;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

var ball_ops = {
restitution: 0.1,
frictionAir: 0.01
}

var op_f = {
isStatic: true
}

ball = Bodies.circle(70,670,10,ball_ops);
World.add(world,ball);

floor = Bodies.rectangle(400,680,800,20,op_f);
World.add(world, floor);

p1 = new Pared (450,620,20,100);
p2 = new Pared (650,620,20,100);

fill("yellow");
rectMode(CENTER);
ellipseMode(RADIUS);


	//crear los cuerpos aquí.


	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10);
  rect(floor.position.x,floor.position.y,800,20);

  p1.show();
  p2.show();

if(keyDown("w")){
    forze()
}

  drawSprites();
}

function forze(){
Matter.Body.applyForce(ball,{x:0 ,y:0},{x:0.001,y:-0.001})

}

