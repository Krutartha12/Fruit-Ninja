var sword;
var gameState;
var monster;
var alien;
var score;
function preload(){
  
  swordImage = loadImage("sword.png");
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
   alien1 = loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
  
  gameoverImage = loadImage("gameover.png");
  
  knifeSound = loadSound("knifeSwooshSound.mp3");
   gameoverSound = loadSound("gameover.mp3");
  
}
function setup(){
   createCanvas(400,400);
  
   sword = createSprite(40,200,20,20);
  sword.addImage("sword",swordImage);
  sword.scale=0.7;
  
   textSize (20);
  
  gameState = "play";
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  score = 0;
}
function draw(){
 background("lightBlue");
 if (gameState === "play"){
  sword.x = mouseX;
  sword.y = mouseY;
   
   if(World.frameCount%25===0){
    y=Math.round(random(1,3));
  if(y===1) {
     enemy ();
  }else if(y===2){
    fruits ();
  }else if(y===3){
    fruits();    
  }
   }
  
   
 for(var i=0;i<fruitGroup.length;i++){
    if(sword.isTouching(fruitGroup.get(i))){
     fruitGroup.get(i).destroy();
      score=score+1;
       knifeSound.play();
    }
  } 
  

  
   if(enemyGroup.isTouching(sword)){
    gameState = "end";
     gameoverSound.play();
   }
 }else{
   sword.addImage("sword",gameoverImage);
   sword.scale = 1.5;
   sword.x = 200;
   sword.y = 200;
   fruitGroup.destroyEach();
   enemyGroup.destroyEach();
 }
 text ("Score: " + score,300,30);

 drawSprites();
 
}
function fruits (){
   fruit=createSprite(400,200,20,20);
   fruit.scale=0.2;
   r=Math.round(random(1,4));
  if (r == 1){
    fruit.addImage(fruit1);
      fruit.y=Math.round(random(50,340));
    fruit.x = 410;
    fruit.velocityX=-(7+(score/5));
  }else if (r==2){
   fruit.addImage(fruit2);
    fruit.y=Math.round(random(50,340));
      fruit.x=-10;
     fruit.velocityX=(7+(score/5));
  }else if (r==3){
   fruit.addImage(fruit3);   
    fruit.x=Math.round(random(50,340));
      fruit.y=-10;
     fruit.velocityY=(7+(score/5));
  }else {
    fruit.addImage(fruit4);
    fruit.x=Math.round(random(50,340));
      fruit.y=410;
     fruit.velocityY=-(7+(score/5));
  }
  
   x=Math.round(random(1,4));
  if (x == 1){
    fruit.addImage(fruit1);
     
  }else if (x==2){
   fruit.addImage(fruit2);
   
  }else if (x==3){
   fruit.addImage(fruit3);   
  
  }else {
    fruit.addImage(fruit4);
   
  }
  

  
  
  fruit.setLifetime=100;
  
  fruitGroup.add(fruit);
 
}  

function enemy (){
 
    alien = createSprite(400,200,20,20);
    alien.addAnimation("moving", alien1,alien2);
    
    i=Math.round(random(1,4));
    
  if (i == 1){
      alien.y=Math.round(random(50,340));
    alien.x = 410;
   alien.velocityX=-(7+(score/5));
  }else if (i==2){
    alien.y=Math.round(random(50,340));
      alien.x=-10;
    alien.velocityX=(7+(score/5));
  }else if (i==3){ 
    alien.x=Math.round(random(50,340));
     alien.y=-10;
     alien.velocityY=(7+(score/5));
  }else {
   alien.x=Math.round(random(50,340));
      alien.y=410;
    alien.velocityY=-(7+(score/5));
  }
    
    
   
    alien.setLifetime=50;
    enemyGroup.add(alien);

}
  