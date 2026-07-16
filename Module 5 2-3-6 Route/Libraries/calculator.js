// Creates a random number to identify each calculation
const generateId = () => {
  return Math.floor(Math.random() * 1000000000);
};

// Addition
const add = (number1, number2) => {
  return {
    id: generateId(),
    result: number1 + number2,
  };
};

// Subtraction
const subtract = (number1, number2) => {
  return {
    id: generateId(),
    result: number1 - number2,
  };
};

// Multiplication
const multiply = (number1, number2) => {
  return {
    id: generateId(),
    result: number1 * number2,
  };
};

// Division
const divide = (number1, number2) => {
  return {
    id: generateId(),
    result: number1 / number2,
  };
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};