const mongoose = require("mongoose");
require("dotenv").config()

// const DB = process.env.DB_URL
const DB_URL="mongodb+srv://namit:namit@cluster0.oy6wg15.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Error - " + err);
  });
