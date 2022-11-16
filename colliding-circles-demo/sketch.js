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

    // collision check
    for (let j = 0; j < balls.length; j++) {
      if (i !== j) { //don't check if hitting self
        if (isColliding(balls[i], balls[j])) {
          // swap the speeds
          let tempdx = balls[i].dx;
          let tempdy = balls[i].dy;
          balls[i].dx = balls[j].dx;
          balls[i].dy = balls[j].dy;
          balls[j].dx = tempdx;
          balls[j].dy = tempdy;
        }
      }
    }

    // sides
    if (balls[i].x + balls[i].radius > width || balls[i].x - balls[i].radius < 0) {
      balls[i].dx *= -1;
    }
    // top/bottom
    if (balls[i].y + balls[i].radius > height || balls[i].y - balls[i].radius< 0) {
      balls[i].dy *= -1;
    }
  }
  
  // display
  for (let thisCircle of balls) {
    fill(thisCircle.colour);
    noStroke();
    circle(thisCircle.x, thisCircle.y, 2*thisCircle.radius);
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
  balls.push(createBall(mouseX, mouseY));
}

function isColliding(ball1, ball2) {
  let distanceBetween = dist(ball1.x, ball1.y, ball2.x, ball2.y);
  let radiSum = ball1.radius + ball2.radius;
  if (distanceBetween > radiSum) {
    return false;
  }
  else {
    return true;
  }
}