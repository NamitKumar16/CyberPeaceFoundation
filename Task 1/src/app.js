const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("dotenv").config();
require("./db/conn");

const port = process.env.PORT || 3000;

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path)

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("Server is running at port number " + port);
});
