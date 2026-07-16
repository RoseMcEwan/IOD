const express = require("express");

const app = express();
const port = 3003;

app.use(express.static("public"));

app.get("/products", async (req, res) => {

try {
const response = await fetch("https://fakestoreapi.com/products/");

const json = await response.json();

res.json(json); 
}
catch (error) {                         //Catch error 
    console.log(error);
    res.status(500).json({ error: "Unable to retrieve products" });
}
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});