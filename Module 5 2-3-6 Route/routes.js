const express = require("express");
const router = express.Router();

const calculator = require("./libraries/calculator");
const logger = require("./libraries/logger");

// Add
router.get("/add", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const calculation = calculator.add(number1, number2);

  logger.log(
    `ID: ${calculation.id}, operation: add, result: ${calculation.result}`,
  );

  res.status(200).json(calculation);
});

// Subtract
router.get("/subtract", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const calculation = calculator.subtract(number1, number2);

  logger.log(
    `ID: ${calculation.id}, operation: subtract, result: ${calculation.result}`,
  );

  res.status(200).json(calculation);
});

// Multiply
router.get("/multiply", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const calculation = calculator.multiply(number1, number2);

  logger.log(
    `ID: ${calculation.id}, operation: multiply, result: ${calculation.result}`,
  );

  res.status(200).json(calculation);
});

// Divide
router.get("/divide", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const calculation = calculator.divide(number1, number2);

  logger.log(
    `ID: ${calculation.id}, operation: divide, result: ${calculation.result}`,
  );

  res.status(200).json(calculation);
});

module.exports = router;