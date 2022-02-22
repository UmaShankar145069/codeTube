const express = require("express");
const port = 5000;
// using express
const app = express();
// importing body parser
const bodyParser = require("body-parser");
// importing cookie parser
const cookieParser = require("cookie-parser");
// importing mongoose
const mongoose = require("mongoose");

// importing config file key.js
const config = require("./config/key");

// importing user models
const { User } = require("./models/user");

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("not connected"));

// using body parser middleware
// to parse the query string
app.use(bodyParser.urlencoded({ extended: true }));
// to parse the json data
app.use(bodyParser.json());

// using cookie parser middleware
app.use(cookieParser());

// handaling request/response cycle through routing
app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

// app is listening on assigned port number
app.listen(port, (err) => {
  if (err) {
    console.log("Server is experincing an error");
  }
  console.log("Server is running on port 5000");
});
