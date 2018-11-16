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
    color(120, 120, 120)
  ]
}

function draw() {
  //testLines()
  outlineShape()
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

function randomSelectTwo() {
  const rando = random(1)
  if (rando > 0.5) {
    return true
  } else {
    return false
  }
}

function getRandomFromPalette () {
  const rando2 = floor(random(0, PALETE.length))
  return PALETE[rando2]
}