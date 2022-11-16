// Bullet oop practice
// Katharine
// Nov. 16
//

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.theColor = color(random(255), random(255), random(255));
  }
  
  display() {
    fill(this.theColor);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  isDead() {
    return this.x >= width;
  }

}

let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].move();
    bullets[i].display();
    
  }
}

function mousePressed() {
  let someBullet = new Bullet(mouseX, mouseY);
  bullets.push(someBullet);
}