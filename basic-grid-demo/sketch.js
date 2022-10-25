// Basic grid demo
// Katharine
// Oct 25, 2022
//
// 2D array demo 1

let grid = [[0, 0, 1], 
            [1, 0, 1],
            [0, 1, 0]];
            
let rows = grid.length;
let columns = grid[0].length;
let cellHeight, cellWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/columns;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid(grid);
}

function mousePressed() {
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  else if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
}

function displayGrid(grid) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) { //looks through sub arrays
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

