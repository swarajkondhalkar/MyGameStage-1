var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  backgroundImage =loadImage("images/bg.jpg")
  pigImage =loadImage("images/piggy.jpg")
  
}



function setup() {
  createCanvas(1200, 600);
  //ground = createSprite(400,350,900,10);
  //ground.addImage("images",backgroundImage)
  //ground.velocityX=-4;
  //ground.x=ground.width/2;
  //console.log(ground.x)
}


function draw() {
  background(backgroundImage);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}



