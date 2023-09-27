const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,quarto,protagonistaimg,banheiro,po1img,po1,po2img,po2,po3img,po3,protagonista,canvasivisivel;
var gamestate=1;
var score = 0

function preload(){
  quarto = loadImage("assets/meu cuarto.png");
  protagonistaimg = loadImage("assets/protagonista.png");
  banheiro = loadImage("assets/banheiro.png");
  po1img = loadImage("assets/po 1.png");
  po2img = loadImage("assets/po 2.png");
  po3img = loadImage("assets/po 3.png");
}

function setup() {
  var canvas = createCanvas(700, 700);
  canvas.center();
  engine = Engine.create();
  world = engine.world;
  protagonista = createSprite(350,350);
  protagonista.addImage(protagonistaimg);
  protagonista.scale=1.8;
 // canvasivisivel = createSprite(350,350,700,700);
  //canvasivisivel.visible=false
}

function draw() {
  Engine.update(engine)
  
  if (gamestate === 1) {
    background(quarto);
    Vquarto();

    text("score: " + score, 600, 50)
    
  }
  if (keyDown ("w")) {
    protagonista.y = protagonista.y -5
  }
  if (keyDown ("s")) {
    protagonista.y = protagonista.y +5
  }
  if (keyDown ("a")) {
    protagonista.x = protagonista.x -5
  }
  if (keyDown ("d")) {
    protagonista.x = protagonista.x +5
  }
  drawSprites();
}

function Vquarto(){
  po1=createSprite(200,200)
  po1.addImage(po1img);
  po1.scale =3
  po1.setCollider("circle",0,0,6);
  po2=createSprite(500,500)
  po2.addImage(po2img);
  po2.scale =3
  po3=createSprite(300,300)
  po3.addImage(po3img);
  po3.scale =3
  if (protagonista.collide(po1)) {
    score +=1;
    po1.remove();
    
  }
  
}
