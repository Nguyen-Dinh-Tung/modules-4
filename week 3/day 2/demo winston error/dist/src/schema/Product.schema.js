"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    category: String,
});
exports.default = productsSchema;
//# sourceMappingURL=Product.schema.js.map