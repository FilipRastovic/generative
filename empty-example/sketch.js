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
  const circles = new Circles()
  circles.render()

  const simpleLines = new SimpleLines()
  simpleLines.render()

  const outlineShape = new OutlineShape()
  outlineShape.render()

  testLines()
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

