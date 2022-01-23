
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groundObj

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;	

	//Create the Bodies Here.
var ball_options = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	desnity: 1.2

}
ball = Bodies.circle(100,600,20,ball_options)
World.add(world, ball)
groundObj = new Ground(width/2,670,width,20)
leftSide = new Ground(1200,600,20,120) 
rightSide = new Ground(1400,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,25)

  groundObj.show()
  leftSide.show()
  rightSide.show()

  drawSprites();
 
}
function keyPressed(){
	if(keyCode== UP_ARROW){
		Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.085,y:-0.085})
	}
}