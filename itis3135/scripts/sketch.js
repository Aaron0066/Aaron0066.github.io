let circleColor;

function setup() {
  createCanvas(600, 400);
  circleColor = color(100, 150, 200);
  background(255);
}

function draw() {
  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed() {
  circleColor = color(random(255), random(255), random(255));
}

function keyPressed() {
  background(255);
}

