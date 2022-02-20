const express = require("express");
const port = 5000;
// using express
const app = express();

// importing mongoose
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://umashankar:145069@codetube.s7bi4.mongodb.net/codeTube?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("not connected"));

// app is listening on assigned port number

app.listen(port, (err) => {
  if (err) {
    console.log("Server is experincing an error");
  }
  console.log("Server is running on port 5000");
});
