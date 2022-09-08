const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const multer = require("multer");
const upload = multer();
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "company",
});
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  const selectSql = `select * from staff`;
  connection.query(selectSql, (err, data) => {
    if (err) {
      throw new Error(err.message);
    }
    res.render("read", {data: data});
  });
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.post("/create", upload.none(), (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let position = req.body.position;
  const insertSql = `insert into staff(name , age , position) values ('${name}' , ${age} , '${position}')`;
  connection.query(insertSql, (err) => {
    if (err) {
      throw new Error(err.message);
    }
    console.log("insert success");
    res.redirect("/");
  });
});
app.get("/details", (req, res) => {
  let id = Number(req.query.id);
  const selectSql = `select * from staff where id = ${id}`;
  connection.query(selectSql, (err, data) => {
    if (err) {
      throw new Error(err.message);
    }
    res.render("details", {data: data});
  });
});
app.get("/delete", (req, res) => {
  let id = Number(req.query.id);
  const selectSql = `delete from staff where id = ${id}`;
  connection.query(selectSql, (err, data) => {
    if (err) {
      throw new Error(err.message);
    }
    res.redirect("/");
  });
});
app.listen(port, () => {
  console.log("listening " + port);
});
