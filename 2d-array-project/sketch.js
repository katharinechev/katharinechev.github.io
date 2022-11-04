// Sliding puzzle - 2D Array Project
// Katharine
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 4;
const COLS = 4;
let numSquares = ROWS*COLS;
let num4x4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let cellWidth, cellHeight, grid, num;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellHeight = width/3/ROWS;
  cellWidth = height/3/COLS;
  if (cellHeight > cellWidth) {
    cellWidth = cellHeight;
  }
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  let numHere = false;
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLS; x++) {
      emptyArray.push
      // num = Math.floor(random(1, numSquares-2));
      // if () {
      //   numHere = true;
      // }
      // while (numHere) {
      //   num = Math.floor(random(1, numSquares-2));
      // }

      // if (emptyArray[y].includes(num)) {
      //   while (emptyArray[y].includes(num)) {
      //     num = Math.floor(random(1, numSquares-2));
      //   }
      // }
      // emptyArray[y].push(num);
      // emptyArray[y].push(0);
    }
    
  }
  return emptyArray;
}

// function numIntoArray(grid) {
//   grid.array.forEach(element => {
//     grid.array.push(shuffle(num4x4));
//   });
// }

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      fill("white");
      rect(x*cellWidth + (width/2-0.5*COLS*cellWidth), y*cellHeight + (height/5*3-0.5*COLS*cellWidth), cellWidth, cellHeight);
    }
  }
}