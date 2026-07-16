const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const port = 3001;

const calculatorRoutes = require("./routes");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(express.static("public"));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger running on http://localhost:${port}/api-docs`);
});