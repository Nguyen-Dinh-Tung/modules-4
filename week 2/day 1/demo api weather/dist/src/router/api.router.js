"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/blog', async (req, res) => {
    let data = [{
            id: 1,
            content: 'Blog này là của bố mày'
        },
        {
            id: 2,
            content: 'Blog này là của tao'
        }];
    res.status(200).json(data);
});
exports.default = router;
//# sourceMappingURL=api.router.js.map