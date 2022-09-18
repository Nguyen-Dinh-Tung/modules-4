"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DB_URL = 'mongodb://username:password@localhost:27017/admin';
mongoose_1.default.connect(DB_URL).then(() => console.log('db connected'))
    .catch(err => console.log(err.message));
//# sourceMappingURL=MongoDb.js.map