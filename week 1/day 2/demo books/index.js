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
  res.render("create");
});
app.post("/book/create", upload.none(), (req, res) => {
  const {name, price, quantity, author} = req.body;
  const insertSql = `insert into book (name , price , quantity , author) values
  ('${name}' , ${Number(price)} , ${Number(quantity)} , '${author}')`;
  connection.query(insertSql, (err) => {
    if (err) {
      throw new Error(err.message);
    }
    console.log("insert success");
  });
  res.redirect("/");
});
app.listen(port, () => {
  console.log("listening " + port);
});
