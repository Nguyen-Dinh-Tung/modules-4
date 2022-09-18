"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tocken_1 = require("../middleware/tocken");
const router = express_1.default.Router();
let data = [{
        id: 1,
        content: 'Blog này là của bố mày'
    },
    {
        id: 2,
        content: 'Blog này là của tao'
    }];
router.get('/blog', tocken_1.token, async (req, res) => {
    res.status(200).json(data);
});
router.post('/blog', (req, res) => {
    let id = Number(req.query.id);
    let content = String(req.query.content);
    let newBlog = {
        id: id,
        content: content
    };
    data.push(newBlog);
    res.status(200).json({
        data
    });
});
router.delete('/blog', (req, res) => {
    let id = Number(req.query.id);
    data.forEach((element, index) => {
        if (element.id == id) {
            data.slice(index, 1);
        }
    });
    res.status(200).json({
        data
    });
});
router.put('/blog', (req, res) => {
    let id = Number(req.query.id);
    let newContent = String(req.query.newContent);
    data.forEach((element) => {
        if (element.id == id) {
            element.content = newContent;
        }
    });
    res.status(200).json({
        data
    });
});
exports.default = router;
//# sourceMappingURL=api.router.js.map