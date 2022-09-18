"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_model_1 = require("../schema/book.model");
const multer_1 = __importDefault(require("multer"));
const bookRoutes = (0, express_1.Router)();
const upload = (0, multer_1.default)();
bookRoutes.get('/createBook', (req, res) => {
    res.render('createBook');
});
bookRoutes.post('/createBook', upload.none(), async (req, res) => {
    const bookNew = new book_model_1.Book(req.body);
    const book = await bookNew.save();
    if (book) {
        res.status(200).json({
            book
        });
    }
    else {
        res.status(404).json({
            message: 'Create fail'
        });
    }
});
bookRoutes.get('/book/list', async (req, res) => {
    let data = await book_model_1.Book.find();
    res.render('bookList', { data: data });
});
bookRoutes.get('/book/edit', async (req, res) => {
    let id = req.query.id;
    res.render('edit', { id: id });
});
bookRoutes.post('/book/edit', upload.none(), async (req, res) => {
    let id = req.body.id;
    let data = await book_model_1.Book.findByIdAndUpdate(id, req.body);
    res.redirect('/book/list');
});
bookRoutes.get('/book/delete', async (req, res) => {
    let id = req.query.id;
    await book_model_1.Book.findByIdAndRemove(id);
    res.redirect('/book/list');
});
exports.default = bookRoutes;
//# sourceMappingURL=book.router.js.map