const express = require("express");
const morgan = require("morgan");
import { engine } from "express-handlebars";

const app = express();

//  TEMPLATE ENGINE
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// MORGAN
app.use(morgan("combined"));

// NODE
app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
