"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const user_controller_1 = require("../controller/user.controller");
const upload = (0, multer_1.default)();
const router = express_1.default.Router();
const userController = new user_controller_1.UserController();
const user = 'takpaj';
const password = '123';
router.get('/login', (req, res) => {
    userController.index(req, res);
});
router.post('/login', upload.none(), (req, res) => {
    if (req.body.user == user && req.body.password == password) {
        res.status(200).json({
            message: 'login success'
        });
    }
    else {
        res.status(404).json({
            message: 'login false'
        });
    }
});
exports.default = router;
//# sourceMappingURL=web.router.js.map