// OOP Pair Programming Starter Code
// Saabir & Katharine
// Nov 25th 2022


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

let bullet;
let bulletArray = [];

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.img = theImage;
    this.dx = 5;
    this.dy = 5;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(87)) { 
      this.y -= this.dy;
    }
    if(keyIsDown(83)){
      this.y += this.dy;
    }
    if(keyIsDown(65)){
      this.x -= this.dx;
    }
    if(keyIsDown(68)){
      this.x += this.dx;
    }

    // if doing extra for experts, show bullet(s)
    if(bulletArray.length > 0) {
      for (let i = bulletArray.length-1; i >= 0; i--) {
        bulletArray[i].update();
        if (bulletArray[i].isOnScreen()) {
          bulletArray[i].display();
        }
        else {
          bulletArray.splice(i, 1);
        }
      }
    }
    console.log(bulletArray);
  }

  display() {
    // show the ship
    image(this.img, this.x, this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if (keyCode === 32) {
      bullet = new Bullet(this.x + this.img.width/2.5, this.y, 10, 10, bulletImage);
      bulletArray.push(bullet);
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.img = theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.y -= this.dy;
  }

  display() {
    // show the bullet
    image(this.img, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if (this.y >= 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
