const express = require("express");

const app = express();
const port = 3001;

const calculatorRoutes = require("./routes");

app.use(express.static("public"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});