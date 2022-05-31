const mongoose = require("mongoose");

const DB =
  "mongodb+srv://namit:namit@cluster0.oy6wg15.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Error - " + err);
  });
