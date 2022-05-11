const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.sendStatus(200);
});

app.post("/create_completion", async (req, res) => {
  try {
    const { prompt } = req.body;

    /* TODO: continue setting up API  */
  } catch (error) {}
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
