
var girl, girl_walk, girl_dead,girl_idle;

var back, backgroundImg;
var ground;

function preload(){
  girl_walk = loadAnimation("/assets/CutterGirl/Walk/Walk (1).png",
  "/assets/CutterGirl/Walk/Walk (2).png","/assets/CutterGirl/Walk/Walk (3).png",
  "/assets/CutterGirl/Walk/Walk (4).png","/assets/CutterGirl/Walk/Walk (5).png", 
  "/assets/CutterGirl/Walk/Walk (6).png","/assets/CutterGirl/Walk/Walk (7).png",
  "/assets/CutterGirl/Walk/Walk (8).png", "/assets/CutterGirl/Walk/Walk (9).png", 
  "/assets/CutterGirl/Walk/Walk (10).png","/assets/CutterGirl/Walk/Walk (11).png",
  "/assets/CutterGirl/Walk/Walk (12).png","/assets/CutterGirl/Walk/Walk (13).png",
  "/assets/CutterGirl/Walk/Walk (14).png","/assets/CutterGirl/Walk/Walk (15).png", 
  "/assets/CutterGirl/Walk/Walk (16).png", "/assets/CutterGirl/Walk/Walk (17).png",
  "/assets/CutterGirl/Walk/Walk (18).png", "/assets/CutterGirl/Walk/Walk (19).png", 
  "/assets/CutterGirl/Walk/Walk (20).png");

  girl_dead = loadAnimation("/assets/CutterGirl/Morta/Dead (1).png",
  "/assets/CutterGirl/Morta/Dead (2).png", "/assets/CutterGirl/Morta/Dead (3).png",
  "/assets/CutterGirl/Morta/Dead (4).png", "/assets/CutterGirl/Morta/Dead (5).png",
  "/assets/CutterGirl/Morta/Dead (6).png", "/assets/CutterGirl/Morta/Dead (7).png", 
  "/assets/CutterGirl/Morta/Dead (8).png", "/assets/CutterGirl/Morta/Dead (9).png",
  "/assets/CutterGirl/Morta/Dead (10).png","/assets/CutterGirl/Morta/Dead (11).png",
  "/assets/CutterGirl/Morta/Dead (12).png", "/assets/CutterGirl/Morta/Dead (13).png",
  "/assets/CutterGirl/Morta/Dead (14).png", "/assets/CutterGirl/Morta/Dead (15).png",
  "/assets/CutterGirl/Morta/Dead (16).png", "/assets/CutterGirl/Morta/Dead (17).png", 
  "/assets/CutterGirl/Morta/Dead (18).png", "/assets/CutterGirl/Morta/Dead (19).png",
  "/assets/CutterGirl/Morta/Dead (20).png" );

  backgroundImg = loadImage("/assets/Backgroundelements/backgroundColorGrassInfinito.png")
  
}

function setup(){

  createCanvas(windowWidth,windowHeight);

  girl = createSprite(50,height-100);
  girl.addAnimation("walk",girl_walk);
  girl.scale = 0.2;

  back = createSprite(width/2,height/2);
  back.addImage(backgroundImg);
  back.depth = girl.depth-1;

  ground = createSprite(width/2,height-80,width,30);
  ground.visible = false;

}

function draw(){
  
  background("lightpink");

  back.velocityX =-8;

  if (back.x <-700){
    back.x = width/4;
  }

  if (keyDown("space") && girl.y>=height-300){
    girl.velocityY = -10;
  }

  girl.velocityY = girl.velocityY +0.8;

  girl.collide(ground);

  drawSprites();
}