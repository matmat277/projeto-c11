

 var seaImg, shipImg1, shipImg2; 
 var shipImg3, shipImg4;
 var ship;

function preload(){
  seaImg = loadImage("sea.png");
  shipAnimation = loadAnimation('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png');
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,200,10,10);
  ship.addAnimation("shipAnimation", shipAnimation);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
    background(seaImg);
   


    drawSprites();
}
