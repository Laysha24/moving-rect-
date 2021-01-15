var fixedRect,movingRect;
var anotherRect;

function setup() {
  createCanvas(400,400);
 fixedRect = createSprite(200,200,50,80);
 fixedRect.debug = true;
 fixedRect.shapeColor = "green";

 
 movingRect = createSprite(100,100,80,50);
 movingRect.debug = true;
 movingRect.shapeColor = "green";
 
 anotherRect = createSprite(100,200,60,70);
 anotherRect.shapeColor = "yellow";
  
}

function draw() {
  background(0); 
   movingRect.x = mouseX;
   movingRect.y = mouseY;
   console.log(movingRect.x-fixedRect.x)

   if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
   }
   else if(isTouching(anotherRect,movingRect)){
    movingRect.shapeColor = "pink";
    anotherRect.shapeColor = "pink";
   }
   else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    anotherRect.shapeColor = "yellow";
   }
   
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if(movingRect.x- fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y- fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
   return true;
   }
   else{
    return false;
   }
} 