// Bouncing + colliding balls demo
// Katharine
// Oct 24
//
// Arrays demo

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls.push(createBall(100, 100));
}

function draw() {
  background(220);

  // move
  for (let i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;

    // sides
    if (balls[i].x + 0.5*balls[i].radius > width || balls[i].x - balls[i].radius < 0) {
      balls[i].dx *= -1;
    }
    // top/bottom
    if (balls[i].y + 0.5*balls.radius[i] > height || balls[i].y - balls[i].radius< 0) {
      balls[i].dy *= -1;
    }
  }
  
  // display
  for (let thisCircle of balls) {
    fill(thisCircle.colour);
    noStroke();
    circle(thisCircle.x, thisCircle.y, thisCircle.radius);
  }
}

function createBall(tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    radius: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    colour: color(random(255), random(255), random(255), random(255))
  };
  return newBall;
}

function mousePressed() {

}