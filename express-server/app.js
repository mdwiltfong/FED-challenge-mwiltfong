const express = require("express");
const OpenAI = require("./helper_functions/utils");
const path = require("path");
const app = express();
const cors = require("cors");
const publicPath = path.join(__dirname, "..", "build");
const filePath = path.join(publicPath, "index.html");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.get("/*", (req, res) => {
  res.sendFile(filePath);
});
app.post("/create_completion", async (req, res) => {
  try {
    const { prompt } = req.body;
    const { engine } = req.query;
    console.log(engine);
    const response = await OpenAI.create_completion(prompt, engine);
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
