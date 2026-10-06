// app.js
// This file shows how to REUSE our custom modules (isEven, logger).
// Run with: node app.js

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("App started");

const number = 8;
if (isEven(number)) {
  logger(`${number} is even`);
} else {
  logger(`${number} is odd`);
}

const number2 = 7;
if (isEven(number2)) {
  logger(`${number2} is even`);
} else {
  logger(`${number2} is odd`);
}

logger("App finished");
