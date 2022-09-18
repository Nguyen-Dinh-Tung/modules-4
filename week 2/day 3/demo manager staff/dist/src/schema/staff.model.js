"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const staffsSchemal = new mongoose_1.Schema({
    name: String,
    age: Number,
    address: String,
});
const Staff = (0, mongoose_1.model)('staff', staffsSchemal);
exports.default = Staff;
//# sourceMappingURL=staff.model.js.map