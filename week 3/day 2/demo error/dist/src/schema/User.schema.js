"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
});
exports.default = userSchema;
//# sourceMappingURL=User.schema.js.map