const express = require("express");
const app = express();
/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    // Your implementation here
    req.timestamp = new Date(Date.now()).toLocaleTimeString();
    req.method = req.method;
    next();
  }

  app.use(requestLoggerMiddleware);


app.get("/*", (req, res) => {
    let msg = `${req.timestamp} - ${req.method} request received`;
    console.log(msg);
    res.send(msg);
});


app.listen(3000, () => {
    console.log("I'm Listing..");
})