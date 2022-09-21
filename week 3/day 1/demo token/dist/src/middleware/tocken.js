"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
let idToken = '22ziso@3332';
const token = async (req, res, next) => {
    let tokenId = req.query.id;
    if (tokenId == idToken) {
        next();
    }
    else {
        res.status(404).json({
            mesage: 'Token not found'
        });
    }
};
exports.token = token;
//# sourceMappingURL=tocken.js.map