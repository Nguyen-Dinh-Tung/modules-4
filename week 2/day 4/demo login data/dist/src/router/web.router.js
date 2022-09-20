"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const User_model_1 = __importDefault(require("../model/User.model"));
let upload = (0, multer_1.default)();
const userRouter = (0, express_1.Router)();
userRouter.get('/create/user', (req, res) => {
    res.render('createUser');
});
userRouter.post('/create/user', upload.none(), async (req, res) => {
    let newUser = await new User_model_1.default(req.body);
    const user = newUser.save();
    res.redirect('/login');
});
userRouter.get('/api/user', async (req, res) => {
    let data = await User_model_1.default.find();
    res.status(200).json({
        data: data
    });
});
exports.default = userRouter;
//# sourceMappingURL=web.router.js.map