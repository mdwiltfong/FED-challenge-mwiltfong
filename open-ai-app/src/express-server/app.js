const express = require("express");
const OpenAI = require("./helper_functions/utils");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.sendStatus(200);
});

app.post("/create_completion", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await OpenAI.create_completion(prompt);
    return res.send({
      prompt: prompt,
      response: response,
    });
  } catch (error) {
    console.log(error);
  }
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
