// modules/logger.js
// Another custom module. Prints a message with a timestamp.

function logger(message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}

module.exports = logger;
