var rider, riderImage;
var happyRider;
var road;
var slantingroad;
var restart;


function preload(){
  riderImage = loadImage("Rider.jpg");
  lineImage = loadImage("line.jpg");
}

function setup(){
  var canvas = createCanvas(1500,700);
  rider = createSprite(150,400);
  rider.addImage("rider",riderImage);
  rider.velocityX = 4;
  rider.scale = 0.25;

  road = createSprite(500,490,800,10);
  road.shapeColor = "black";
}


function draw(){

  background("green");

  drawSprites();
}