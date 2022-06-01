const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const res = require("express/lib/response");
require("dotenv").config();

require("./db/conn");
const userController = require("../src/services/user");

const User = require("./models/user");

const port = process.env.PORT || 3000;

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  console.log("In if");
  const registerUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };

  // res.status(201).render("index")
  var promise = userController.saveData(registerUser);
  promise
    .then(res.status(201).render("index"))
    .catch((error) => {
      res.status(404);
    });
});

app.listen(port, () => {
  console.log("Server is running at port number " + port);
});
