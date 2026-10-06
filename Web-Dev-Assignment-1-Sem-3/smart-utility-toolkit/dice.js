// dice.js
// Random dice generator using Node's crypto module.
// Run with: node dice.js

const crypto = require("crypto");

function rollDice() {
  // crypto.randomInt(min, max) picks a secure random whole number
  // between min (included) and max (excluded). So randomInt(1, 7)
  // gives a number from 1 to 6, just like a real dice.
  return crypto.randomInt(1, 7);
}

console.log("Rolling dice 5 times:");
for (let i = 1; i <= 5; i++) {
  console.log(`Roll ${i}: Dice Rolled: ${rollDice()}`);
}
