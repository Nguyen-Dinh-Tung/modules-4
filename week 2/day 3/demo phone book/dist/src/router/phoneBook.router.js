"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhoneBook_model_1 = __importDefault(require("../schema/PhoneBook.model"));
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
let upload = (0, multer_1.default)();
const phoneBookRouter = (0, express_1.Router)();
phoneBookRouter.get('/', async (req, res) => {
    let data = await PhoneBook_model_1.default.find();
    res.render('list', { data: data });
});
phoneBookRouter.get('/create', (req, res) => {
    res.render('create');
});
phoneBookRouter.post('/create', upload.none(), async (req, res) => {
    let newPhoneBook = new PhoneBook_model_1.default(req.body);
    let phoneBook = await newPhoneBook.save();
    res.redirect('/');
});
phoneBookRouter.get('/delete', upload.none(), async (req, res) => {
    let _id = req.body._id;
    await PhoneBook_model_1.default.findOneAndRemove(_id);
    res.redirect('/');
});
phoneBookRouter.get('/edit', upload.none(), async (req, res) => {
    let _id = req.query._id;
    let data = await PhoneBook_model_1.default.findById(_id);
    res.render('edit', { data: data });
});
phoneBookRouter.post('/edit', upload.none(), async (req, res) => {
    let _id = req.body._id;
    await PhoneBook_model_1.default.findOneAndUpdate(_id, req.body);
    res.redirect('/');
});
exports.default = phoneBookRouter;
//# sourceMappingURL=phoneBook.router.js.map