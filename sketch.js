var astronaut;
var createEdgeSprites
var edges

function preload(){

bg= loadImage("images/iss.png","images/iss.png","images/iss.png","images/iss.png","images/iss.png")
sleep= loadAnimation("images/sleep.png","images/sleep.png","images/sleep.png","images/sleep.png")
brush= loadAnimation("images/brush.png","images/brush.png","images/brush.png","images/brush.png")
gym= loadAnimation("images/gym1.png","images/gym2.png", "images/gym1.png","images/gym1.png","images/gym2.png")
eat= loadAnimation("images/eat1.png","images/eat2.png","images/eat1.png","images/eat1.png","images/eat2.png")
bath=loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png")
}


function setup() {
  createCanvas(800,400);
 //bg= createSprite(400, 200, 50, 50);
//bg.addImage("bg",bg)
//bg.scale=0.1

 astronaut= createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep)
 astronaut.scale=0.1

 

}

function draw() {
  background(bg);  

 edges= createEdgeSprites();
  //astronaut.bounceOff(edges[3]);
  astronaut.bounceOff(edges);
  
  drawSprites();
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("sleeping", sleep);
  astronaut.changeAnimation("sleeping");
  astronaut.x = 200;
  astronaut.y = 350;
  astronaut.velocityX = 0.8;
  astronaut.velocityY = 0.5;

}

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.x = 300;
  astronaut.y = 350;
  astronaut.velocityX = 0.8;
  astronaut.velocityY = 0.5;

}


if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming", gym);
  astronaut.changeAnimation("gyming");
  astronaut.x = 400;
  astronaut.y = 350;
  astronaut.velocityX = 0.8;
  astronaut.velocityY = 0.5;

}





















}