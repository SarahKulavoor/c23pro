var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var object1,object2,object3;
var object1sprite,object2sprite,object3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	var options ={
		isStatic : true
	}
	 

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 object1 = Bodies.rectangle(400,645,200,20,options);
	 World.add(world, object1);
	 
	  object2 = Bodies.rectangle(325,605,20,100,options);
	  World.add(world, object2);
	 
	  object3 = Bodies.rectangle(475,605,20,100,options);
	  World.add(world, object3);
	  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
fill ("red")
  rect(object1.position.x,object1.position.y,200,20);
  rect(object2.position.x,object2.position.y,20,100);
  rect(object3.position.x,object3.position.y,20,100);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		 Matter.Body.setStatic(packageBody, false); 
	}


}
