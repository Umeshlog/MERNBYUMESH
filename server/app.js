const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });
//database connection
require(`./db/conn`);
//userschema
// const User=require("./model/userschima")

//cookieparser
app.use(cookieParser());

//middelware
app.use(express.json());
//link the router file
app.use(require("./router/oth"));

//port number
const PORT = process.env.PORT;

//middle ware

// const middleware = (req, res, next) => {
//   console.log("hello middle ");
//   next();
// };

// app.get("/", (req, res) => {
//   res.send("hello home page from server app.js");
// });

// app.get("/about", middleware, (req, res) => {
//   res.send("hello about page from server");
// });

// app.get("/contact", (req, res) => {
//    res.cookie("test","ume");
//   res.send("hello contact page from server");
// });

app.get("/signin", (req, res) => {
  res.send("hello singin page from server");
});

app.get("/signup", (req, res) => {
  res.send("hello ragistrasion  page from server");
});
// app.get("/twitter", (req, res) => {
//   res.send("Hello twitter hu");
// });

console.log("hiiiii");

app.listen(PORT, () => {
  console.log(`server is running at port number IS ${PORT}`);
  1;
});
