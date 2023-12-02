// requires
var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
// instantiate the app
var app = express();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(logger("hello"));
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/users", (req, res) => {
  res.send("Users  page");
});

// error handler middlewares

// 404 error handler
app.use((req, res, next) => {
  res.send("Page not found");
});

// custom error handler
app.use((err, req, res, next) => {
  res.send(err);
});
// listener
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
