var boy ,pista ;
var boyIMG ,pistaIMG ;

function preload(){
pistaIMG = loadImage("path.png");
boyIMG = loadAnimation("Runner-1.png","Runner-2.png");
}
function setup(){
 //criando a tela
  createCanvas(400,600);

 //criando o chao

  pista=createSprite(200,200);
  pista.addImage(pistaIMG);
  pista.velocityY = 4;
  pista.scale=1;

 //criando o menino

  boy = createSprite(70,570,20,20);
  boy.addAnimation("SahilRunning",boyIMG);
  boy.scale=0.08;
  
}

function draw() {
background(0);

pista.velocityY = 4;

  boy.x = World.mouseX;

  if(pista.y > 550){
   pista.y = pista.height/2;
  }

  drawSprites();
}