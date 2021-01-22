
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// var dustBin, dustBinImg;

function preload(){
	dustBinImg= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	// dustBin = createSprite(805,350,30,30);
	// dustBin.addImage(dustBinImg);
	// dustBin.scale =0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 430, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	paper = new Paper(400,30,30);

	bin = new dustBin(805,350,30,30);

	Box1 = new RedBox(800,groundSprite.y-15,150,20);
	Box2 = new RedBox(880,groundSprite.y-78,20,150);
	Box3 = new RedBox(730,groundSprite.y-78,20,150);

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background(0);
	drawSprites();

	bin.display();
	Box1.display();
	Box2.display();
	Box3.display();
	paper.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-125})
	}
}

