const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const app = express();

const route = require("./routes/index");
const db = require("./config/db");

const methodOverride = require("method-override");
// CONNECT TO DB
db.connect().then(() => {});

// STATIC FILE WITH SCSS
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MORGAN
app.use(morgan("combined"));

//  TEMPLATE ENGINE
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// ROUTES INIT
route(app);

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
