var bg,backgroundImg;
var cat,mouse;
var catImg1,catImg2,catImg4,mouseImg4,mouseImg1,mouseImg2;


function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg4=loadImage("images/cat4.png");
    mouseImg1=loadImage("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    bg =createSprite(500,200);
    bg.addAnimation("bb",backgroundImg);
    

    cat =createSprite(750,450);
    cat.addAnimation("bbc",catImg1);
    cat.scale=0.1;

   mouse=createSprite(200,450);
   mouse.addAnimation("aaa",mouseImg1);
   mouse.scale=0.1;

  


}

function draw() {

    background(0);
   if (cat.x-mouse.x<(cat.width-mouse.width)){
cat.velocityX=0;
cat.x=300;
cat. addAnimation("win",catImg4);
cat. changeAnimation("win");
mouse. addAnimation("ddd",mouseImg4);
mouse. changeAnimation("ddd");
   }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
  cat.addAnimation("catRunning",catImg2);
  cat.changeAnimation("catRunning");
  cat.velocityX=-2;
  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.changeAnimation("mouseTeasing");
  }

}
