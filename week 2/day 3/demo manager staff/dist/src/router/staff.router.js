"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const staff_model_1 = __importDefault(require("../schema/staff.model"));
const upload = (0, multer_1.default)();
const staffRouter = (0, express_1.Router)();
staffRouter.get('/list/staff', async (req, res) => {
    let data = await staff_model_1.default.find();
    res.render('listStaff', { data: data });
});
staffRouter.get('/create/staff', (req, res) => {
    res.render('createStaff');
});
staffRouter.post('/create/staff', upload.none(), async (req, res) => {
    console.log(req.body);
    let newStaff = new staff_model_1.default(req.body);
    const staff = await newStaff.save();
    res.redirect('/list/staff');
});
staffRouter.get('/delete', upload.none(), async (req, res) => {
    let _id = req.query._id;
    await staff_model_1.default.findByIdAndDelete(_id);
    res.redirect('/list/staff');
});
staffRouter.get('/edit', async (req, res) => {
    let _id = req.query._id;
    let staff = await staff_model_1.default.findById(_id);
    res.render('editStaff', { data: staff });
});
staffRouter.post('/edit', upload.none(), async (req, res) => {
    let _id = req.body._id;
    await staff_model_1.default.findByIdAndUpdate(_id, req.body);
    res.redirect('/list/staff');
});
exports.default = staffRouter;
//# sourceMappingURL=staff.router.js.map