const app = require("./app");
app.listen(8001, () => {
  console.log("Server is listening on 8001");
});

module.exports = app;
