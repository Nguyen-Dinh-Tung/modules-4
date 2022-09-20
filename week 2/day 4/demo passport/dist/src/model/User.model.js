"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User_schema_1 = __importDefault(require("../schema/User.schema"));
const UserModel = (0, mongoose_1.model)('User', User_schema_1.default);
exports.default = UserModel;
//# sourceMappingURL=User.model.js.map