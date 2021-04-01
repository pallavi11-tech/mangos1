
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage
var stone,ground
var slingShot
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9
var tree;

function preload()
{
 boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(200,450,40)
	ground = new Ground(400,550,800,10)
	slingshot = new SlingShot(stone.body,{x:225,y:480})
	tree = new Tree(680,400,300,400);
	mango1 = new Mango(580,380,30,30)
	mango2 = new Mango(690,360,40,30)
	mango3 = new Mango(730,280,30,30)
	mango4 = new Mango(750,330,30,30)
	mango5 = new Mango(720,350,30,30)
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	Engine.update(engine)
	background(255)
//	text("x: "+mouseX+","+mouseY,mouseX,mouseY);
  image(boyImage,200,440,150,150)
  ground.display();
  slingshot.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
 

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:225,y:450})
		slingshot.attach(stone.body)
	}
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}



