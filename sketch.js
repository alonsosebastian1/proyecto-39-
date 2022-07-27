var player,playerImg;
var carro1,carro2,carro3,carro4;
var background,background1,backgroundImg;
var carroimg,carroimg1,carroimg2,carroimg3;
var PLAY = 1;
var END =0;
var gameState = PLAY;
var restart;
var score;
var gameOverImg,gameOver;
var choque;
var motor;
function preload(){
  backgroundImg = loadImage("carretera.png");
  playerImg = loadImage("player.png");
  carroImg = loadImage("carro1.png");
  carroImg1 = loadImage("carro2.png");
  carroImg2 = loadImage("carro3.png");
  carroImg3 = loadImage("carro4.png");
  gameOverImg = loadImage("game.jpg");
  choque = loadSound("choque de carro  Efecto de sonido.mp3");
  motor = loadSound("Auto_Acelerando_Carrera_-_Efectos_de_Sonido_-_Auto_Accelerating_Race_-_Sound_Effects.mp3");
}

function setup() {
 createCanvas(500,400);
 obstaclesGroup = new Group();
 background(backgroundImg);
 score = 0;
 background1 = createSprite(250,200,20,20);
 background1.addImage(backgroundImg);
 background1.scale = 2.4;
 background1.velocityY = +10;
 background = createSprite(250,280,20,20);
 background.addImage(backgroundImg);
 background.scale = 2.4;
 background.velocityY = +11;
 background2 = createSprite(250,320,20,20);
 background2.addImage(backgroundImg);
 background2.scale = 2.4;
 background2.velocityY = +11;

  player = createSprite(250,320,20,20);
  player.addImage(playerImg);
  player.scale = 0.9
  player.setCollider("circle",0,0,40);
  
  
}

function draw() {
 
  if(gameState === PLAY){

  
  if(background1.y > 350 ){
    background1.y = 100;
  }if(background.y > 300 ){
    background.y = 100;
  }
if(background2.y > 200 ){
  background2.y = 100;
}

if(frameCount% 100 === 0){
  score = score + 1
  
}
if(frameCount% 100 === 0){
  motor.play();
}

 player.x = mouseX;
 player.y = mouseY;


spawnObstacles1();
spawnObstacles3();
spawnObstacles();
spawnObstacles2();
textSize(14)
fill("blue");
text("puntuacion:" + score ,410,380);


if(player.isTouching(obstaclesGroup)){
  gameState = END
  choque.play();
  motor.stop();
}
if(gameState == END){
  obstaclesGroup.destroyEach();
  player.visible = false;
  gameOver = createSprite(250,200,20,20);
  gameOver.addImage(gameOverImg);
  gameOver.scale= 1;
  textSize(14)
  
}

}

    // console.log(player.x);

 drawSprites();
   }
    
   function spawnObstacles(){
    if(frameCount % 100 === 0){
      carro1 = createSprite(random(90,433),1,20,20);
      carro1.velocityY = +4;
      carro1.addImage(carroImg)
      carro1.setLifetime = 300;
      carro1.scale =0.9
      carro1.setCollider("circle",0,0,20);
         obstaclesGroup.add(carro1);


      }
  
    }
    function spawnObstacles1(){
      if(frameCount % 150 === 0){
        carro2 = createSprite(random(90,433),1,20,20);
        carro2.velocityY = +6;
        carro2.addImage(carroImg1)
        carro2.setLifetime = 300;
        carro2.scale =0.9
        carro2.setCollider("circle",0,0,20);
           obstaclesGroup.add(carro2);
        }
    
      }
      function spawnObstacles2(){
        if(frameCount % 200 === 0){
          carro3 = createSprite(random(90,433),1,20,20);
          carro3.velocityY = +4;
          carro3.addImage(carroImg2)
          carro3.setLifetime = 300;
          carro3.scale =0.9
          carro3.setCollider("circle",0,0,20);
             obstaclesGroup.add(carro3);
          }
      
        }
        function spawnObstacles3(){
          if(frameCount % 250 === 0){
            carro4 = createSprite(random(90,433),1,20,20);
            carro4.velocityY = +5;
            carro4.addImage(carroImg3)
            carro4.setLifetime = 300;
            carro4.scale =0.9
            carro4.setCollider("circle",0,0,20);
               obstaclesGroup.add(carro4);
            }
        
          }