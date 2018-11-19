const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETE = []

function setup() {
  createCanvas(530, 530, SVG)
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)

  PALETE = [
    color(190, 190, 190), //pink
    color(220, 220, 220)
  ]
}

function draw() {
  const layer = new Circles()
  console.log(layer)
  layer.render()
  // testLines()
  // outlineShape()
  // simpleLines()
  // circle()

  // let picker = random(1)
  // if (picker > 0.3) {
  //   outlineShape()
  // }

  // picker = random(1)
  // if(picker > 0.3) {
  //   simpleLines()
  // }

  // picker = random(1)
  // if (picker > 0.3) {
  //   circles()
  // }
}

function simpleLines () {
  const stepsOut = 8
  const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25)
  const step = (CRYSTAL_SIZE / 2) / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start, numSteps + 1))

  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette();
  const angle = 360 / numShapes
  const weight = randomSelectTwo() ? 1 : 3
  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2, height/2)
    for (let i = 0; i < numShapes; i ++) {
      line(start * step, 0, stop * step, 0)
      rotate(angle)
    }
  pop()
}

function outlineShape () {
  const strokeColor = getRandomFromPalette()
  const weight = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width/2, height/2)
  if (hexagonTrue) {
    hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  }
  pop()
}

function testLines () {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette();
  console.log(strokeColor)

  noFill()
  stroke(PALETE[0])
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for (let i = 0; i < numShapes; i ++) {
      line(0, 0, CRYSTAL_SIZE/2, 0)
      rotate(angle)
    }
  pop()
}