"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_model_1 = require("../schema/products.model");
const multer_1 = __importDefault(require("multer"));
const bookRoutes = (0, express_1.Router)();
const upload = (0, multer_1.default)();
const productsRouter = (0, express_1.Router)();
productsRouter.get('/products/list', async (req, res) => {
    let data = await products_model_1.Products.find();
    console.log(data);
    res.render('listProducts', { data: data });
});
productsRouter.get('/products/create', (req, res) => {
    res.render('create');
});
productsRouter.post('/products/create', upload.none(), async (req, res) => {
    const productsNew = new products_model_1.Products(req.body);
    const products = await productsNew.save();
    res.end();
});
exports.default = productsRouter;
//# sourceMappingURL=products.router.js.map