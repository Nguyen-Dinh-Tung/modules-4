const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const multer = require("multer");
const upload = multer();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("register");
});
const arrUser = [];
app.post("/user/register", upload.none(), (req, res) => {
  if (req.body.username && req.body.password) {
    const user = {
      username: req.body.username,
      password: req.body.password,
    };
    arrUser.push(user);
    console.log(arrUser);
    res.render("success", {user: user});
  } else {
    res.render("error");
  }
});
app.listen(port, () => {
  console.log("listening " + port);
});
