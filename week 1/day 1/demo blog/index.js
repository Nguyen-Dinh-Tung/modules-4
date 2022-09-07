const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const multer = require("multer");
const upload = multer();

app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("blog");
});
const blogList = [];
app.post("/blog/create", upload.none(), (req, res) => {
  let content = req.body.content;
  if (content) {
    let newBlog = {
      content: content,
    };
    blogList.push(newBlog);
    res.render("success", {newBlog: newBlog});
  } else {
    res.render("error");
  }
});
app.listen(port, () => {
  console.log("listening " + port);
});
