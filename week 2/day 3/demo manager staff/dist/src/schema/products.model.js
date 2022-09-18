"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    author: String,
});
const Products = (0, mongoose_1.model)('product', productsSchema);
exports.Products = Products;
//# sourceMappingURL=products.model.js.map