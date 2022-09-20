"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
const passport_1 = __importDefault(require("passport"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
authRouter.get('/login/lib', (req, res) => {
    res.render('login');
});
authRouter.post('/login/lib', upload.none(), passport_1.default.authenticate('local', {
    successRedirect: '/auth',
    failureRedirect: '/auth/login/lib'
}));
authRouter.get('/google', passport_1.default.authenticate('google', { scope: ['profile'] }));
authRouter.get('/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/auth/google/success' }), (req, res) => {
    res.end('login with google');
});
authRouter.get('/google/success', (req, res) => {
    res.end('login with google');
});
authRouter.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/list/book');
    }
    else {
        res.redirect('/auth/login');
    }
});
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map