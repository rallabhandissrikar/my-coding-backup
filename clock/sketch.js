function setup() {
  createCanvas(400,400);
}

function draw() {

  background("black");
  translate(200,200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();


  


  strokeWeight(10);
  stroke(255,100,150);
  noFill();

  let secondAngle = map(sc , 0, 59, 0, 360);
  arc(0,0,300,300,0,secondAngle);

  stroke(150,100,255);
  let minuteAnle = map(mn % 59 , 0, 59, 0, 360);
  arc(0,0,280,280,0,minuteAnle);

  stroke(150,255,100);
  let hourAngle = map(hr % 12 , 0, 12, 0, 360);
  arc(0,0,260,260,0,hourAngle);
  
  push();
  rotate(secondAngle);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  push();
  rotate(minuteAnle);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();


}