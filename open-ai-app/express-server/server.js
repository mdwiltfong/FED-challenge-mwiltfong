const app = require("./app");
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});

module.exports = app;
