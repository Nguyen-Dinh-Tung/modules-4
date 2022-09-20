"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    description: String,
    author: String
});
exports.default = bookSchema;
//# sourceMappingURL=Book.chema.js.map