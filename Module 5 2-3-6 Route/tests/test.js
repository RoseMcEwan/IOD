const express = require("express");
const request = require("supertest");
const calculatorRoutes = require("../routes");

const app = express();

app.use("/calculator", calculatorRoutes);

test("add is correct", async () => {
  const response = await request(app).get(
    "/calculator/add?num1=5&num2=3"
  );

  expect(response.statusCode).toBe(200);
  expect(response.body.result).toBe(8);
});

test("subtract is correct", async () => {
  const response = await request(app).get(
    "/calculator/subtract?num1=10&num2=4"
  );

  expect(response.statusCode).toBe(200);
  expect(response.body.result).toBe(6);
});

test("multiply is correct", async () => {
  const response = await request(app).get(
    "/calculator/multiply?num1=5&num2=4"
  );

  expect(response.statusCode).toBe(200);
  expect(response.body.result).toBe(20);
});

test("divide is correct", async () => {
  const response = await request(app).get(
    "/calculator/divide?num1=20&num2=4"
  );

  expect(response.statusCode).toBe(200);
  expect(response.body.result).toBe(5);
});