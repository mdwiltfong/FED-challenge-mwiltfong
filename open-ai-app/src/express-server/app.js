const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res.sendStatus(200);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
