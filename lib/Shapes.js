class Shape {
  constructor(color) {
    this.color = color;
  }
  render() {
    throw new Error("render() method must be implemented by subclasses");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  render() {
    return `<svg width="300" height="200">
                  <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
              </svg>`;
  }
}

class Triangle extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }
  render() {
    const height = (Math.sqrt(3) / 2) * this.sideLength;
    const halfSide = this.sideLength / 2;
    const points = `150,${100 + height / 3} ${150 - halfSide},${
      100 - height / 3
    } ${150 + halfSide},${100 - height / 3}`;
    return `<svg width="300" height="200">
                  <polygon points="${points}" fill="${this.color}" />
              </svg>`;
  }
}

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }
  render() {
    return `<svg width="300" height="200">
                  <rect x="${150 - this.sideLength / 2}" y="${
      100 - this.sideLength / 2
    }" width="${this.sideLength}" height="${this.sideLength}" fill="${
      this.color
    }" />
              </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
