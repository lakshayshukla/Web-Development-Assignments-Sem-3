// calculator.js
// A simple calculator you run from the terminal.
// Example: node calculator.js add 10 5

// process.argv is a list of things typed in the terminal.
// process.argv[0] -> path to node
// process.argv[1] -> path to this file
// process.argv[2] -> the operation (add, subtract, multiply, divide)
// process.argv[3] -> first number
// process.argv[4] -> second number

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

function calculate(operation, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Please enter valid numbers.";
  }

  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        return "Error: Cannot divide by zero.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operation. Use add, subtract, multiply, or divide.";
  }
}

const result = calculate(operation, num1, num2);
console.log("Result:", result);
