"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_chema_1 = __importDefault(require("./../schema/Book.chema"));
const mongoose_1 = require("mongoose");
const Book = (0, mongoose_1.model)('book', Book_chema_1.default);
exports.default = Book;
//# sourceMappingURL=Book.model.js.map