const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hellooo")
});

app.get("/greet/:name?", (req, res) => {
    const name = req.params.name ?? "Guest";
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log("I'm Listing");
})