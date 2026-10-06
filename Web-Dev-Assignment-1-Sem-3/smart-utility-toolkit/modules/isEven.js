// modules/isEven.js
// A custom module: a separate file we can reuse elsewhere.

function isEven(number) {
  return number % 2 === 0;
}

// module.exports lets OTHER files "borrow" this function
module.exports = isEven;
