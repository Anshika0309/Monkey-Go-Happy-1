var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, ground;

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400)
  
  monkey = createSprite(50,280,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(0,315,900,10);
  ground.velocityX = 4;
  ground.x = ground.width /2;
  console.log(ground.x)
  
 
  bananaGroup = new Group();
  obstacleGroup = new Group();

  score = 0;
  
}



function draw() {
  background(220)
  
  stroke("black");
  textSize(20);
  score = Math.round(frameCount/frameRate());
  text("servivalTime : "+score,200,50)
  
    if (ground.x > 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y >=100){
  monkey.velocityY = -11;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  food();
  
  obstacles();
  
 monkey.collide(ground);
  
  drawSprites();
  
}

function food(){
  if(frameCount%80 === 0 ){
  banana = createSprite(400,150,20,20)
  banana.y = Math.round(random(120,200))  
  banana.addAnimation("banana",bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;  
  banana.lifetime = 100;
  bananaGroup.add(banana);
}
}

function obstacles() {
   if(frameCount%300 === 0 ){
   obstacle = createSprite(400,295,20,20);
  obstacle.addAnimation("moving",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  obstacle.lifetime = 100;
  obstacleGroup.add(obstacle);

  
   }
}


