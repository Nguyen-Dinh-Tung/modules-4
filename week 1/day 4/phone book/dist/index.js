"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhoneBook_1 = require("./src/entity/PhoneBook");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const AppDataSource_1 = require("./src/database/AppDataSource");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
AppDataSource_1.AppDataSource.initialize().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('connecting success');
}));
const phoneBook = AppDataSource_1.AppDataSource.getRepository(PhoneBook_1.PhoneBook);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield phoneBook.find();
    res.render('home', { data: data });
}));
app.get('/create', upload.none(), (req, res) => {
    res.render('create');
});
app.post('/create', upload.none(), (req, res) => {
    let name = req.body.name;
    let phoneNumber = req.body.phone;
    let phoneBookElement = new PhoneBook_1.PhoneBook();
    phoneBookElement.name = name;
    phoneBookElement.phoneNumber = phoneNumber;
    phoneBook.save(phoneBookElement);
    res.redirect('/');
});
app.get('/edit', upload.none(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.query.id;
    let data = yield phoneBook.findOneBy({
        id: Number(id)
    });
    res.render('edit', { data: data });
}));
app.post('/edit', upload.none(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.body.id);
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber;
    let phoneBookElement = yield phoneBook.findOneBy({
        id: id
    });
    phoneBookElement.name = name;
    phoneBookElement.phoneNumber = phoneNumber;
    phoneBook.save(phoneBookElement);
    res.redirect('/');
}));
app.get('/delete', upload.none(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.query.id);
    let phoneBookElement = yield phoneBook.findOneBy({
        id: id
    });
    phoneBook.remove(phoneBookElement);
    res.redirect('/');
}));
app.listen(3000);
//# sourceMappingURL=index.js.map