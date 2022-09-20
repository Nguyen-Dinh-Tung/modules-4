"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const Book_model_1 = __importDefault(require("../model/Book.model"));
const bookRouter = express_1.default.Router();
bookRouter.get('/list/book', async (req, res) => {
    let data = await Book_model_1.default.find();
    if (req.isAuthenticated()) {
        res.render('listBook', { data: data });
    }
    else {
        res.redirect('/auth/login/lib');
    }
});
const upload = (0, multer_1.default)();
exports.default = bookRouter;
//# sourceMappingURL=book.router.js.map