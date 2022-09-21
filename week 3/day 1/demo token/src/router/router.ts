import express from "express";
import multer from "multer";

import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import UserModel from "../model/User.model";
import ProductModel from "../model/Product.model";

import { auth } from "../middleware/auth";
const upload = multer();
const router = express.Router();

router.use("/product", auth);
router.get("/user/register", (req, res) => {
  res.render('register')
});
router.post("/user/register", upload.none(), async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    console.log(user);

    if (!user) {
      const passwordHash = await bcrypt.hash(req.body.password, 10);
      let userData = {
        username: req.body.username,
        password: passwordHash,
      };
      const newUser = await UserModel.create(userData);
      res.json({ user: newUser, code: 200 });
    } else {
      res.json({ err: "User exited" });
    }
  } catch (err) {
    res.json({ err: err });
  }
});
router.get('/user/login', (req, res) => {
  res.render('login')
})
router.post("/user/login", upload.none(), async (req, res) => {
  try {

    const user = await UserModel.findOne({ username: req.body.username });
    if (user) {
      let comparePass = await bcrypt.compare(req.body.password, user.password)
      if (!comparePass) {
        return res.json({
          message: 'Password not valid'
        })
      }
      let payload = {
        user_id: user["id"],
        username: user["username"],
      };
      const token = jwt.sign(payload, "123456789", {
        expiresIn: 36000,
      });
      res.cookie('access_token', token)
      return res.redirect('/product/list');
    } else {
      return res.json({ err: "Email has been used" });
    }
  } catch (err) {
    return res.json({ err: err });
  }
});
router.get('/product/list', async (req, res) => {
  let data = await ProductModel.find()
  res.render('listProducts', { data: data })
})
router.post("/product/create", async (req, res) => {
  try {
    const product = await ProductModel.findOne({ name: req.body.name });

    if (!product) {
      let productData = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
      };
      const productNew = await ProductModel.create(productData);
      res.json({ product: productNew, code: 200 });
    } else {
      res.json({ err: "Product exited" });
    }
  } catch (err) {
    res.json({ err: err });
  }
});
router.get('/out', (req, res) => {
  res.clearCookie('access_token');
  res.redirect('/user/login')
})
export default router;
