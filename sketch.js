var path,Runner;
var RunnerImg,pathImg;


function preload() {
  //imagens pré-carregadas
pathImg=loadImage("path.png");
RunnerImg=loadAnimation("Runner-1.png","Runner-2.png");


}
function setup() {
  createCanvas(400, 400);
  //crie sprite aqui
  path=createSprite(200,200)
  path.addImage("rua",pathImg)
  path.scale=1.2
  path.velocityY=4
  Runner=createSprite(200,300)
  Runner.addAnimation("Jason",RunnerImg)
  Runner.scale=0.1
}
function draw() {
  background(0);
  drawSprites();
  if(path.y >400){
   path.y = 200
  }
  Runner.x = mouseX
  }
