"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SecretOrPrivateKey_schema_1 = __importDefault(require("../schema/SecretOrPrivateKey.schema"));
const secretOrPrivateKey = (0, mongoose_1.model)('parseJWT', SecretOrPrivateKey_schema_1.default);
exports.default = secretOrPrivateKey;
//# sourceMappingURL=SecretOrPrivateKey.model.js.map