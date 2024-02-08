/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

const express = require("express");
const app = express();

function positiveIntegerHandler(err, req, res, next) {
  // Your implementation here
  const statusCode = err.status || 500;
  res.status(statusCode).send({
    error: {
      message: err.message,
      status: statusCode,
    },});
}


app.get("/positive/:number", (req, res, next) => {
    const value = req.params.number;
    if (value >= 0) {
        res.send("<H1>Good Number</h1>");
    } else {
        let error = new Error("Number must be postive");
        error.status = 400;
        next(error);
    }
});
app.use(positiveIntegerHandler);

app.listen(3000, () => {
  console.log("I'm Listining");
});
