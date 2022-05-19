const app = require("./app");
const port = process.env.PORT || 3000;
/* Listener for server */
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
