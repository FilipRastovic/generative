function hexagon (posX, posY, radius) {                     
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) {         
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function randomSelectTwo () {
  const rando = random(1)
  if (rando > 0.5) {
    return true
  } else {
    return false
  }
}

function getRandomFromPalette () {
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}

function randomSelectTwo () {
  const rando = random(2)
  return rando > 1 ? true : false
}

function getRandomFromPalette () {
  const rando = floor(random(0, PALETTE.length))
  return PALETTE[rando]
}

function testLines () {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPalette()

  noFill()
  stroke(PALETTE[0])
  strokeWeight(1)
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for (let i = 0; i < numShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE / 2)  
      rotate(angle)
    }
  pop()
}