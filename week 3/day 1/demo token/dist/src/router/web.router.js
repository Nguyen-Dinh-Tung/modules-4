"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
let upload = (0, multer_1.default)();
const phoneBookRouter = (0, express_1.Router)();
exports.default = phoneBookRouter;
//# sourceMappingURL=web.router.js.map