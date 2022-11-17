// Bullet oop practice
// Katharine
// Nov. 16
//

class Bullet {
  constructor(img) {
    this.x = 200;
    this.y = 500;
    this.radius = 5;
    this.dx = 5; //random(5);
    // this.theColor = color(random(255), random(255), random(255));
    this.img = img;
  }
  
  display() {
    // fill(this.theColor);
    // noStroke();
    // circle(this.x, this.y, this.radius*2);
    image(this.img, this.x, this.y, this.img.width /12, this.img.height /10);
  }

  move() {
    this.x += this.dx;
  }

  isDead() {
    return this.x >= width;
  }
}

let bullets = [];
let bulletImg;

function preload() {
  bulletImg = loadImage("bullet.png");
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let someBullet of bullets) {
    someBullet.move();
    someBullet.display();
  }

  // delete dead bullets
  for (let i = bullets.length -1; i >=0; i--) {
    if (bullets[i].isDead()) {
      bullets.splice(i, 1);
    }
  }
}

function keyPressed() {
  let someBullet = new Bullet(bulletImg);
  bullets.push(someBullet);
}