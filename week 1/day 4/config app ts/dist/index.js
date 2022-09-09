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
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const Staff_1 = require("./src/entity/Staff");
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
const staffRepo = AppDataSource_1.AppDataSource.getRepository(Staff_1.Staff);
app.get('/', upload.none(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield staffRepo.find();
    res.render('home', { data: data });
}));
app.get('/create', (req, res) => {
    res.render('create');
});
app.post('/create', upload.none(), (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let position = req.body.position;
    const staff = new Staff_1.Staff();
    staff.name = name;
    staff.age = age;
    staff.position = position;
    staffRepo.save(staff);
    res.redirect('/');
});
app.get('/delete', upload.none(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.query.id;
    const staff = yield staffRepo.findOneBy({
        id: Number(id)
    });
    yield staffRepo.remove(staff);
    res.redirect('/');
}));
app.get('/edit', upload.none(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.query.id;
    const staff = yield staffRepo.findOneBy({
        id: Number(id)
    });
    console.log(staff.id);
    res.render('edit', { staff: staff });
}));
app.post('/edit', upload.none(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;
    let position = req.body.position;
    const staff = yield staffRepo.findOneBy({
        id: Number(id)
    });
    staff.name = name;
    staff.age = age;
    staff.position = position;
    staffRepo.save(staff);
    res.redirect('/');
}));
app.listen(3000);
//# sourceMappingURL=index.js.map