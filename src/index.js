const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const app = express();

//2
app.use(express.static(path.join(__dirname, "public")));

// MORGAN
app.use(morgan("combined"));

//  TEMPLATE ENGINE
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// NODE
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("news");
});

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
