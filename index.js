const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/Shapes");
const { generateSVG } = require("./lib/svgGenerator");

async function main() {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text:",
      validate: (input) =>
        input.length > 0 && input.length <= 3
          ? true
          : "Please enter up to three characters.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal):",
    },
  ]);

  let shape;
  switch (userInput.shape) {
    case "Circle":
      shape = new Circle(userInput.shapeColor, 50); // You can set the default radius here
      break;
    case "Triangle":
      shape = new Triangle(userInput.shapeColor, 100); // You can set the default side length here
      break;
    case "Square":
      shape = new Square(userInput.shapeColor, 80); // You can set the default side length here
      break;
  }

  const svgString = generateSVG(shape, userInput.shapeColor);

  fs.writeFileSync("logo.svg", svgString);
  console.log("Generated logo.svg");
}

main();
