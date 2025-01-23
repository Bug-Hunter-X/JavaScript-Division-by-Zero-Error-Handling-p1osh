function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  //Improved error handling
  if (b === 0) {
    return "Infinity"; //or return a specific error message
  }
  return a / b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(7, 2)); // Output: 14
console.log(divide(15, 3)); // Output: 5
console.log(divide(10, 0)); //Output: Infinity