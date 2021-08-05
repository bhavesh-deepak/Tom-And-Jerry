var backGroundImg,tom,jerry,tomImg1,jerryImg1;
var tomImg2,tomImg3;
var jerryImg2,jerryImg3;

function preload() {
    //load the images 
  backGroundImg = loadImage("garden.png");
  tomImg1 = loadAnimation("cat1.png");
  tomImg2 = loadAnimation("cat2.png","cat3.png");
  tomImg3 = loadAnimation("cat4.png");
  
  jerryImg1 = loadAnimation("mouse1.png");
  jerryImg2 = loadAnimation("mouse2.png","mouse3.png");
  jerryImg3 = loadAnimation("mouse4.png");
  
}

function setup(){
    createCanvas(1000,800);
  
 // background(backGroundImg)
 jerry = createSprite(200,600,50,50);
  jerry.addAnimation("jerry",jerryImg1);
  jerry.scale=0.15; 
  
 tom = createSprite(870,600); 
  tom.addAnimation("tom",tomImg1); 
  tom.scale = 0.2;
  
  
  
}

function draw() {
 // jerry.setCollider("rectangle",600,0,jerry.width,jerry.height);  
  //tom.debug = true;
 // jerry.debug = true;
  
      //Write condition here to evalute if tom and jerry collide
    background( backGroundImg); 
  
   if(tom.x - jerry.x < (tom.width - jerry.width)/2){
  //     jerry.X = 400;
     jerry.addAnimation("jerry checking ",jerryImg3);   
   jerry.changeAnimation("jerry checking ");
     jerry.scale=0.15
     
     
  tom.velocityX=0;
     tom.addAnimation("tomLastImage",tomImg3)
     tom.changeAnimation("tomLastImage");
     tom.x = 400; 
     tom.scale = 0.15
   
  }
  
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay = 25; 
    jerry.changeAnimation("jerryTeasing"); 
       
    
  tom.velocityX = -5;
  tom.addAnimation("catrunning",tomImg2)  
 tom.changeAnimation("catrunning");

    }
  
 
  
}
