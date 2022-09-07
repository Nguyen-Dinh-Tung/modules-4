const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const multer = require("multer");
const upload = multer();
const qs = require("qs");

app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("create");
});
const arrStaff = [];
app.post("/create", upload.none(), (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (age && name) {
    let employee = {
      name: name,
      age: age,
    };
    arrStaff.push(employee);
    res.render("success", {arrStaff: arrStaff});
  } else {
    res.render("error");
  }
});
app.get("/*", (req, res) => {
  let id = Number(qs.parse(req.params[0]).id);
  arrStaff.splice(id, 1);
  res.render("success", {arrStaff: arrStaff});
});
app.listen(port, () => {
  console.log("listening " + port);
});
arrStaff.forEach((element, index) => {});
