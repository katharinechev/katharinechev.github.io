// Sliding puzzle - 2D Array Project
// Katharine
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 4;
let cols = 4;
// let numSquares = rows*cols;
let imgScaler = 0.5;
let tiles = []; 
let board = []; // order of tiles 
let cellWidth, cellHeight, grid, num, koalas;

class Tile {
  constructor(index, img) {
    this.index = index;
    this.img = img;
  }
}

function preload() {
  koalas = loadImage("koalas.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = width/3/rows;
  cellWidth = height/3/cols;
  if (cellHeight > cellWidth) {
    cellWidth = cellHeight;
  }
  makeTiles();
  // grid = create2dArray(cols, rows);
}

function draw() {
  background(220);
  displayTiles();
  
}

// // create grid w numbers in order (1-15), blank space = -1
// function create2dArray(cols, rows) {
//   let emptyArray = [];
//   for (let y = 0; y < rows; y++) {
//     emptyArray.push([]);
//     for (let x = 0; x < cols; x++) {
//       emptyArray[y].push(x + y * cols);
//     }
//   }
//   emptyArray[3].pop();
//   emptyArray[3].push(-1);
//   return emptyArray;
// }

function mousePressed() {
  let xPosition = Math.floor(mouseX/cellWidth);
  let yPosition = Math.floor(mouseY/cellHeight);

  // if (grid[yPosition][xPosition] === 0) {
  //   grid[yPosition][xPosition] = 1;
  // }
  // else if (grid[yPosition][xPosition] === 1) {
  //   grid[yPosition][xPosition] = 0;
  // }
  
  
}


// attempt make it into 2d array ^
function makeTiles() {
  for (let y = 0; y < rows; y++) {
    board.push([]);
    for (let x = 0; x < cols; x++) {
      loadPixels();
      let img = createImage(Math.floor(cellWidth), Math.floor(cellHeight));
      img.copy(koalas, x*cellWidth*cols, y*cellHeight*rows, cellWidth*cols, cellHeight*rows, x, y, cellWidth, cellHeight);
      let index = x + y*cols;
      let tile = new Tile(index, img);
      board[y].push(index);
      tiles.push(tile);
    }
  }

  tiles.pop();
  // tiles[3].push(-1);
  board[3].pop();
  board[3].push(-1);

}

function displayTiles() {
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      let tileIndex = board[y][x];
      let tileImage;
      console.log(board[y][x]);
      if (tileIndex !== -1) {
        tileImage = tiles[tileIndex].img;
        image(tileImage, x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*cols*cellWidth), cellWidth, cellHeight);
        // console.log(tileImage);
      }
      // console.log(tileIndex);
      noFill();
      rect(x*cellWidth + (width/2-0.5*cols*cellWidth), y*cellHeight + (height/5*3-0.5*cols*cellWidth), cellWidth, cellHeight);
    } 
  }
}

// function isNeighbour() {
//   let blank;
//   for (let y = 0; y < cols; y++) {
//     for (let x = 0; x < rows; x++) {
//       if (board[y][x] === -1) {
//         blank = board[y][x];
//         return blank;
//       }
//     } 
//   }

  
// }
