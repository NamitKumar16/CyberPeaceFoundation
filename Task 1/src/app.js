const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config()
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("Hello All");
});

app.listen(port, () => {
  console.log("Server is running at port number " + port);
});
