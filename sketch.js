var blueCar, blueCar2, blueCar3, blueCar4;
var car, car2, car3, car4;
var aliceblueCar,  aliceblueCar2,  aliceblueCar3,  aliceblueCar4,

var whiteCar, whiteCar2, whiteCar3, whiteCar4;

var wall
var boundary, boundary2, boundary3,  boundary4; //boundary5;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);

  blueCar = createSprite(25, 25, 10,3);
  blueCar2 = createSprite(13, 35, 20, 10);
  blueCar3 = createSprite(18,50,15,15);
  blueCar4 = createSprite(28,50,15,15);
  blueCar.shapeColor="blue";
  blueCar2.shapeColor="blue";
  blueCar3.shapeColor="black";
  blueCar4.shapeColor="black";

  car = createSprite(25,45,10,3);
  car2 = createSprite(13,55,20,10);
  car3 = createSprite(18,65,15,15);
  car4 = createSprite(28,65,15,15);
  car.shapeColor="white";
  car2.shapeColor="white";
  car3.shapeColor="white";
  car4.shapeColor="white";

  aliceblueCar = createSprite(25, 80, 10, 3);
  aliceblueCar2 = createSprite(13, 90, 20, 10);
  aliceblueCar3 = createSprite(18, 100,15,15);
  aliceblueCar4 = createSprite(28, 100,15,15);
  aliceblueCar.shapeColor="aliceblue";
  aliceblueCar2.shapeColor="aliceblue";
  aliceblueCar3.shapeColor="aliceblue";
  aliceblueCar4.shapeColor="aliceblue";

 whiteCar = createSprite(25, 115, 10, 3);
 whiteCar2 = createSprite(13, 125, 20, 20);
 whiteCar3 = createSprite(18, 135, 15,15);
 whiteCar4 = createSprite(28, 135, 15, 15);
 whiteCar.shapeColor="white";
 whiteCar2.shapeColor="white";
 whiteCar3.shapeColor="white";
 whiteCar4.shapeColor="white";

 wall = createSprite(1500, 15, 60, 200);

 boundary = createSprite(0, 55, 1600, 5);
 boundary2 = createSprite(0, 70, 1600, 5);
 boundary3 = createSprite(0, 105, 1600, 5);
 boundary4 = createSprite(0, 140, 1600, 5);
 //boundary5 = createSprite
}

 
function draw() {
  background(0);  
  
  blueCar.velocityX = speed;
  blueCar2.velocityX = speed;
  blueCar3.velocityX = speed;
  blueCar4.velocityX = speed;

  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;

  aliceblueCar.velocityX = speed;
  aliceblueCar2.velocityX = speed;
  aliceblueCar3.velocityX = speed;
  aliceblueCar4.velocityX = speed;

  whiteCar.velocityX = speeed;
  whiteCar2.velocityX = speed;
  whiteCar3.velocityX = speed;
  whiteCar4.velocityX = speed;

 
  blueCar.display();
  blueCar2.display();
  blueCar3.display();
  blueCar4.display();

  car.display();
  car2.display();
  car3.display();
  car4.display();

  aliceblueCar.display();
  aliceblueCar2.display();
  aliceblueCar3.display();
  aliceblueCar4.display();

  whiteCar.display();
  whiteCar2.display();
  whiteCar3.display();
  whiteCar4.display();
  

  drawSprites(); 
}



