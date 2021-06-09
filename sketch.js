var canvas, backgroundImage;
var database;
var spacecraft1, spacecraft2, spacecraft3, spacecraft4, spacecraft, iss_img, iss;

function preload(){
  backgroundImage = loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3 = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4 = loadImage("Docking-undocking/spacecraft4.png");
  iss_img = loadImage("iss.png");
}

function setup() {
  createCanvas(1000,650);

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1,);
  spacecraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(iss_img);
  iss.scale = 0.70;

  

}

function draw() {
  background(backgroundImage);
  
  if (keyIsDown(RIGHT_ARROW) && spacecraft.index !== null){
    spacecraft.distance -= 10
    spacecraft.update();
    spacecraft.addImage(spacecraft4);
    
}
if (keyIsDown(LEFT_ARROW) && spacecraft.index !== null){
    spacecraft.distance += 10
    spacecraft.update();
    spacecraft.addImage(spacecraft3);
}

if (keyIsDown(UP_ARROW) && spacecraft.index !== null){
  spacecraft.distance += 10
  spacecraft.update();
  spacecraft.addImage(spacecraft2);
}

if(spacecraft.collide(iss)){

  text("Mission Successful", 500,550);
  textSize(25);
  fill("green");

}

  drawSprites();
}