const express = require("express");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
app.get("/", (req, res) => {
  return res.sendStatus(200);
});

app.post("/create_completion", async (req, res) => {
  try {
    const { prompt } = req.body;
    const config = { Authorization: `Bearer ${OPENAI_API_KEY}` };
    const resp = await axios.post(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      prompt,
      config
    );
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
