
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
 }

ball=Bodies.circle(400,200,15,ball_options)
World.add(world,ball)
ground1=new Ground(800,670,1600,20)
ground2=new Ground(1100,600,20,120)
ground3=new Ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15,15)
  ground1.display()
  ground2.display()
	ground3.display()
 

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:45,y:-45})
	}
}