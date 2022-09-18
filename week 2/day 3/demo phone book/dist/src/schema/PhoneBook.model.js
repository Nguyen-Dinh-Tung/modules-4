"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const phoneBookSchema = new mongoose_1.Schema({
    name: String,
    phone: String
});
const pBook = (0, mongoose_1.model)('phoneBook', phoneBookSchema);
exports.default = pBook;
//# sourceMappingURL=PhoneBook.model.js.map