function hexagon (posX, posY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i =0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

// Drawing a polygon at x,y, with radius r
function polygon(x,y,r,noOfSides1){
  push();
   // translate(width/2,height/2);
   // ellipse(x,y,2*r,2*r); // (for reference)
   // noFill();
   let theta = 360/noOfSides1;
    beginShape()
     for(let i = 0; i<noOfSides1; i++){
      vertex(x + r*cos(theta*i),y + r*sin(theta*i));
     }
    endShape(CLOSE);
  pop();
 }



function pointOnCircle (posX, posY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
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