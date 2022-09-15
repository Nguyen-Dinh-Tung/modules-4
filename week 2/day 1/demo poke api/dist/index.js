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
let limit = 10;
let offset = 0;
let url = `https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`;
app.get('/', async (req, res) => {
    let data = await axios_1.default.get(url);
    let dataGame = data.data.results;
    let container = {
        dataGame: dataGame,
        next: {
            limit: limit,
            offset: offset
        }
    };
    res.render('home', { container: container });
});
app.get('/next', async (req, res) => {
    limit = Number(req.query.limit);
    offset = Number(req.query.offset);
    let data = await axios_1.default.get(url);
    let dataGame = data.data.results;
    let container = {
        dataGame: dataGame,
        next: {
            limit: limit,
            offset: offset
        }
    };
    res.render('home', { container: container });
});
app.listen(port, () => {
    console.log('Server listening ' + port);
});
//# sourceMappingURL=index.js.map