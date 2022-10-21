// Terrain generation demo using perlin noise
// Katharine
// Oct 21, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theHeights = [];
let startingLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateHeights(20000);
}

function draw() {
  background(220);
  for (let  i = startingLocation; i < startingLocation + width; i++) {
    displayRect(i-startingLocation, theHeights[i], 1);
  }

  // move when key is pressed, gives background look of movement
  if (keyIsPressed) {
    startingLocation += 10; // += amount to make move faster
  }
}

function displayRect(x, rectHeight, rectWidth) {
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}

function generateHeights(howMany) {
  let tempArray = [];  //need so if making multiple terrains if do something then dont need to get to end of heights array before see new array
  let time = random(10000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time) *height);
    time += 0.0015; // to make time less jagged make time += smaller value ie 0.001 vs jagged 0.01
  }
  return tempArray;
}
