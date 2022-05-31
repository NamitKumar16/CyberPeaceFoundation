const mongoose = require("mongoose");
require("dotenv").config()

const DB = process.env.DB_URL
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Error - " + err);
  });
