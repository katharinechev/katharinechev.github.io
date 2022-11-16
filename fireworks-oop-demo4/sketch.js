// Fireworks
// Katharine
// Nov 15
//
// OOP demo 4

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5,5);
    this.radius = 2;
    // this.colour = color(random(255), random(255), random(255), );
    // this.r = 150;
    // this.g = 75;
    // this.b = 255;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = 255;
    this.colour = color(this.r, this.g, this.b, this.alpha);
  }

  update() {
    // move
    this.x += this.dx;
    this.y += this.dy;

    // make more transparent
    this.alpha--;
    this.colour = color(this.r, this.g, this.b, this.alpha);
  }

  display() {
    fill(this.colour);
    stroke(this.colour);
    circle(this.x, this.y, this.radius*2);
  }

  isDead() {
    return this.alpha <= 0;
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let i = 0; i < theFireworks.length; i++) {
    theFireworks[i].update();
    if (theFireworks[i].isDead()) {
    //remove from array
      theFireworks.splice(i, 1);

    }
    else {
      theFireworks[i].display();
    }
  }
}


function mousePressed() {
  for (let i = 0; i<100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}