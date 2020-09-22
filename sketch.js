
var fixedRect ,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX=5;
  movingRect=createSprite(500, 200, 50, 80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=-5;
//1 2   1fr   40   2   25   1+2 =65 
}

function draw() {

  background(255,5,255);
  //movingRect.x=mouseX;
  //movingRect.y=mouseY; 
  
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x <  movingRect.width/2+fixedRect.width/2){
      //too bounce off 
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    movingRect.velocityX=movingRect.velocityX*(-1);
    }

    if( fixedRect.y-movingRect.y <  movingRect.height/2+fixedRect.height/2
    && movingRect.y-fixedRect.y <  movingRect.height/2+fixedRect.height/2){

      fixedRect.velocityY=fixedRect.velocityY*(-1);
    movingRect.velocityY=movingRect.velocityY*(-1);
    }   
  drawSprites();
}