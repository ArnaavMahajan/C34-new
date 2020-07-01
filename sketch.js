var bullet,bullet2,bullet3,bullet4,wall,wall2,wall3,wall4;


function setup() {
  createCanvas(1600,400);
 bullet =  createSprite(100, 200, 70, 10);
 bullet2 =createSprite(180,200,70,10);
 bullet3 = createSprite(260,200,70,10);
 bullet4 = createSprite(340,200,70,10);
}

function draw() {
  background("black");  
  drawSprites();
}