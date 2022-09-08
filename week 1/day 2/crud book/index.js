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
  database: "ebook",
});
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  const selectSql = `select * from book`;
  connection.query(selectSql, (err, data) => {
    if (err) {
      throw new Error(err.message);
    }
    res.render("read", {data: data});
  });
});
app.get("/details", (req, res) => {
  let id = Number(req.query.id);
  const selectSql = `select * from book where id = ${id}`;
  connection.query(selectSql, (err, data) => {
    if (err) {
      throw new Error(err.message);
    }
    console.log(data);
    res.render("details", {data: data});
  });
});
app.get("/delete", (req, res) => {
  let id = Number(req.query.id);
  const deleteSql = `delete from book where id = ${id}`;
  connection.query(deleteSql, (err) => {
    if (err) {
      throw new Error(err.message);
    }
    res.redirect("/");
  });
});
app.listen(port, () => {
  console.log("listening " + port);
});
