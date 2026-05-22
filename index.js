const express = require("express");
const app = express();

app.get("/sum/:a/:b", (req, res) => {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`Sum = ${a + b}`);
});

app.get("/sub/:a/:b", (req, res) => {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`Subtraction = ${a - b}`);
});

app.get("/mul/:a/:b", (req, res) => {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`Multiplication = ${a * b}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});