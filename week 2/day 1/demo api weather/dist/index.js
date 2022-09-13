"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const multer_1 = __importDefault(require("multer"));
const axios_1 = __importDefault(require("axios"));
const upload = (0, multer_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
const api_router_1 = __importDefault(require("./src/router/api.router"));
const port = 3000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use('/api', api_router_1.default);
app.get('/', async (req, res) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=6e6b2e182ea05c53b69bdfd7e9932d98`;
    let data = await axios_1.default.get(url);
    let celsius = Math.floor(data.data.main.temp - 273.15);
    res.render('weather', { celsius });
});
app.listen(port, () => {
    console.log('Server listening ' + port);
});
//# sourceMappingURL=index.js.map