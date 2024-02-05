const { Circle, Triangle, Square } = require("./Shapes");

describe("Circle", () => {
  test("render() method should return SVG string for circle with given color and radius", () => {
    const circle = new Circle("red", 50);
    const svgString = circle.render();
    expect(svgString).toContain("<circle");
    expect(svgString).toContain('cx="150" cy="100" r="50" fill="red"');
  });
});

describe("Triangle", () => {
  test("render() method should return SVG string for equilateral triangle with given color and side length", () => {
    const triangle = new Triangle("blue", 100);
    const svgString = triangle.render();
    expect(svgString).toContain("<polygon");
    expect(svgString).toContain('fill="blue"');
    expect(svgString).toMatch(
      /points="(\d+\.?\d*),(\d+\.?\d*) (\d+\.?\d*),(\d+\.?\d*) (\d+\.?\d*),(\d+\.?\d*)"/
    );
  });
});

describe("Square", () => {
  test("render() method should return SVG string for square with given color and side length", () => {
    const square = new Square("green", 80);
    const svgString = square.render();
    expect(svgString).toContain("<rect");
    expect(svgString).toContain(
      'x="110" y="60" width="80" height="80" fill="green"'
    );
  });
});
