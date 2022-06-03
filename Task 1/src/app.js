const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const res = require("express/lib/response");
const cors = require("cors");

app.use(cors());
require("dotenv").config();

require("./db/conn");
const userController = require("./services/user");
const User = require("./models/user");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")));

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await User.findOne({ email: email });
    if (useremail.password === password) {
      res.status(200).json({
        firstname: useremail.firstname,
      });
    } else {
      res.status(404).send("Invalid Details");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.post("/register", (req, res) => {
  console.log("In if");
  const registerUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };

  var promise = userController.saveData(registerUser);
  promise
    .then(
      res.status(200).json({
        firstname: registerUser.firstname,
      })
    )
    .catch((error) => {
      res.status(500).send("Server error");
    });
});

app.listen(port, () => {
  console.log("Server is running at port number " + port);
});
