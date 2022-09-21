"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = async (req, res, next) => {
    try {
        let accessToken = req.cookies.access_token;
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, "123456789", (err, decoded) => {
                if (err) {
                    return res.redirect('/user/login');
                }
                else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
        else {
            return res.redirect('/user/login');
        }
    }
    catch (err) {
        return res.status(401).json({
            message: err.message,
            status: 401,
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map