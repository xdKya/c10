var foxy,foxyimg;
var bordas;

function preload(){
  // pre carrega os arquivos do jogo

  foxyimg = loadAnimation("trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200);

  //configurações do foxy
  foxy = createSprite(50,100,20,20);
  foxy.addAnimation("running",foxyimg);
  foxy.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw(){
  background('white');


  // pulo do foxy
  if(keyDown("space")){
    foxy.velocityY = -10;
  }

  // gravidade
  foxy.velocityY = foxy.velocityY + 1;

  // colisao com o chao
  foxy.collide(bordas);


  // text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}


