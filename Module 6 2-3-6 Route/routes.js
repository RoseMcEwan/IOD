
const express = require("express");
const router = express.Router();

//add
router.get("/add", (req, res) => {

  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let sum = number1 + number2;

  res.status(200);
  res.json({ result: sum });
});

//subtract
router.get("/subtract", (req, res) => {

  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let subtract = number1 - number2;

  res.status(200);
  res.json({ result: subtract });
});

router.get("/multiply", (req, res) => {

  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let multiply = number1 * number2;

  res.status(200);
  res.json({ result: multiply });
});

router.get("/divide", (req, res) => {

  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let divide = number1 / number2;

  res.status(200);
  res.json({ result: divide });
});

module.exports = router;