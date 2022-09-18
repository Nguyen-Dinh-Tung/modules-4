"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginLimiter = void 0;
const express_rate_limit_1 = require("express-rate-limit");
exports.loginLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 60 * 60 * 1000,
    max: 3,
    standardHeaders: true,
    legacyHeaders: false
});
//# sourceMappingURL=ratelimit.js.map