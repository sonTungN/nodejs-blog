const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");

  let a = 1,
    b = 2;
  let c = a + b;
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
