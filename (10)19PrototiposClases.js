// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

class Size {
  constructor(width = 80, height = 60) {
    this.width = width
    this.height = height
  }
  resize(newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
  }
}
const size = new Size(1080, 764);
console.log(size);
size.resize(1920, 1080);
console.log(size);

class Position {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  move(newX, newY) {
    this.x = newX
    this.y = newY
  }
}
const point = new Position();
point.move(100, 200);

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }
  resize(newSize) {
    if (newSize.width < 1) newSize.width = 1
    if (newSize.height < 1) newSize.height = 1
    // Si newPositionY excede la altura de la pantalla (600), lo ajustamos al valor máximo permitido (600 - position.y).
newSize

    this.size = newSize
  }
}

const programWindow = new ProgramWindow();
const newSize = new Size(10, 0);
programWindow.resize(newSize);
console.log(programWindow.size.width);  // Output: 600
console.log(programWindow.size.height); //
