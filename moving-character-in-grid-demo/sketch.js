// Moving character in grid
// Katharine
// Nov 1
//

const ROWS = 10;
const COLS = 10;
let playerX = 0;
let playerY = 0;
let cellWidth, cellHeight, grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  // place player in grid
  grid[playerY][playerX] = 9;

}

function draw() {
  background(220);
  displayGrid(grid);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      // reset old location to white
      grid[playerY][playerX] = 0;

      // move
      playerX++;
      
      // set new player location
      grid[playerY][playerX] = 9;
    } 
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      // reset old location to white
      grid[playerY][playerX] = 0;

      // move
      playerX--;
      
      // set new player location
      grid[playerY][playerX] = 9;
    } 
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0) {
      // reset old location to white
      grid[playerY][playerX] = 0;

      // move
      playerY--;
      
      // set new player location
      grid[playerY][playerX] = 9;
    } 
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0) {
      // reset old location to white
      grid[playerY][playerX] = 0;

      // move
      playerY++;
      
      // set new player location
      grid[playerY][playerX] = 9;
    } 
  }
}

function mousePressed() {
  let xPosition = Math.floor(mouseX/cellWidth);
  let yPosition = Math.floor(mouseY/cellHeight);

  if (grid[yPosition][xPosition] === 0) {
    grid[yPosition][xPosition] = 1;
  }
  else if (grid[yPosition][xPosition] === 1) {
    grid[yPosition][xPosition] = 0;
  }
  
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 9) {
        fill("red");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}
