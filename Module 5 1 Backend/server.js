//first server
const express = require("express");

const app1 = express();
const port1 = 3000;

app1.get("/", (req, res) => {
    res.send("hello from server 1")
});

app1.listen(port1, () => {
    console.log(`Server 1 running on http://localhost:${port1}`);
});

//second server;

const app2 = express();
const port2 = 4000;

app2.get("/", (req, res) => {
    res.send("hello from server 2")
});

app2.listen(port2, () => {
    console.log(`Server 2 running on http://localhost:${port2}`);
});