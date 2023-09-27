const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, quarto, protagonistaimg, banheiroimg,banheiro, po1img, po1, po2img, po2, po3img, po3, protagonista, canvasivisivel;
var gamestate = 1;
var score = 0;

function preload() {
  quarto = loadImage("assets/meu cuarto.png");
  protagonistaimg = loadImage("assets/protagonista.png");
  banheiroimg = loadImage("assets/banheiro.png");
  po1img = loadImage("assets/po 1.png");
  po2img = loadImage("assets/po 2.png");
  po3img = loadImage("assets/po 3.png");
}

function setup() {
  var canvas = createCanvas(800,800 );
  canvas.center();
  engine = Engine.create();
  world = engine.world;
  protagonista = createSprite(350, 350);
  protagonista.addImage(protagonistaimg);
  protagonista.scale = 1.8;
  // canvasivisivel = createSprite(350,350,700,700);
  //canvasivisivel.visible=false
  po1 = createSprite(200, 200)
  po1.addImage(po1img);
  po1.scale = 3
  po1.setCollider("circle", 0, 0, 0.1);
  po2 = createSprite(500, 500)
  po2.addImage(po2img);
  po2.scale = 3
  po2.setCollider("circle", 0, 0, 0.1);
  po3 = createSprite(700, 300)
  po3.addImage(po3img);
  po3.scale = 3
  po3.setCollider("circle", 0, 0, 0.1);
}

function draw() {
  Engine.update(engine)

  text(mouseX + "," + mouseY, mouseX, mouseY);
  if (gamestate === 1) {
    background(quarto);
    Vquarto();

    textSize(32);
    text("Dindin🪙: " + score, 20, 50);
    if (score === 3) {
      gamestate = 2
    } 
  }
  if (gamestate === 2 ) {
    background(banheiro);
    Vbanheiro();

    textSize(32);
    text("Dindin🪙: " + score, 20, 50);
    if (score === 3) {
      gamestate = 2
    } 
  }
  if (keyDown("w")) {
    protagonista.y = protagonista.y - 5
  }
  if (keyDown("s")) {
    protagonista.y = protagonista.y + 5
  }
  if (keyDown("a")) {
    protagonista.x = protagonista.x - 5
  }
  if (keyDown("d")) {
    protagonista.x = protagonista.x + 5
  }

  
  drawSprites();


}

function Vquarto() {

  //protagonista.rotateTowards(World.mouse,0.1,0);
  if (protagonista.collide(po1)) {
    score += 1;
    po1.remove();

  }
  if (protagonista.collide(po2)) {
    score += 1;
    po2.remove();

  }
  if (protagonista.collide(po3)) {
    score += 1;
    po3.remove();

  }
  
 porcentagem();
}

function Vbanheiro(){
  if (protagonista.collide(po1)) {
    score += 1;
    po1.remove();

  }
  if (protagonista.collide(po2)) {
    score += 1;
    po2.remove();

  }
  if (protagonista.collide(po3)) {
    score += 1;
    po3.remove();

  }
}
function porcentagem(){
  fill("green")
  rect(350,50,score=score+2,10)
  fill("white")
  rect(350,50,100,10)
}
