"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_model_1 = __importDefault(require("../model/User.model"));
const Product_model_1 = __importDefault(require("../model/Product.model"));
const auth_1 = require("../middleware/auth");
const upload = (0, multer_1.default)();
const router = express_1.default.Router();
router.use("/product", auth_1.auth);
router.get("/user/register", (req, res) => {
    res.render('register');
});
router.post("/user/register", upload.none(), async (req, res) => {
    try {
        const user = await User_model_1.default.findOne({ username: req.body.username });
        console.log(user);
        if (!user) {
            const passwordHash = await bcrypt_1.default.hash(req.body.password, 10);
            let userData = {
                username: req.body.username,
                password: passwordHash,
            };
            const newUser = await User_model_1.default.create(userData);
            res.json({ user: newUser, code: 200 });
        }
        else {
            res.json({ err: "User exited" });
        }
    }
    catch (err) {
        res.json({ err: err });
    }
});
router.get('/user/login', (req, res) => {
    res.render('login');
});
router.post("/user/login", upload.none(), async (req, res) => {
    try {
        const user = await User_model_1.default.findOne({ username: req.body.username });
        if (user) {
            let comparePass = await bcrypt_1.default.compare(req.body.password, user.password);
            if (!comparePass) {
                return res.json({
                    message: 'Password not valid'
                });
            }
            let payload = {
                user_id: user["id"],
                username: user["username"],
            };
            const token = jsonwebtoken_1.default.sign(payload, "123456789", {
                expiresIn: 36000,
            });
            res.cookie('access_token', token);
            return res.redirect('/product/list');
        }
        else {
            return res.json({ err: "Email has been used" });
        }
    }
    catch (err) {
        return res.json({ err: err });
    }
});
router.get('/product/list', async (req, res) => {
    let data = await Product_model_1.default.find();
    res.render('listProducts', { data: data });
});
router.post("/product/create", async (req, res) => {
    try {
        const product = await Product_model_1.default.findOne({ name: req.body.name });
        if (!product) {
            let productData = {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
            };
            const productNew = await Product_model_1.default.create(productData);
            res.json({ product: productNew, code: 200 });
        }
        else {
            res.json({ err: "Product exited" });
        }
    }
    catch (err) {
        res.json({ err: err });
    }
});
router.get('/out', (req, res) => {
    res.clearCookie('access_token');
    res.redirect('/user/login');
});
exports.default = router;
//# sourceMappingURL=router.js.map