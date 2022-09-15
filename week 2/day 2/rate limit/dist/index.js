"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const multer_1 = __importDefault(require("multer"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_router_1 = __importDefault(require("./src/router/api.router"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const web_router_1 = __importDefault(require("./src/router/web.router"));
const upload = (0, multer_1.default)();
const port = 3000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use('/api', api_router_1.default);
app.use((0, morgan_1.default)('common'));
app.use((0, helmet_1.default)());
app.use(web_router_1.default);
app.listen(port, () => {
    console.log('Server listening ' + port);
});
//# sourceMappingURL=index.js.map