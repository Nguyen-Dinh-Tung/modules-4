"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123123',
    database: 'company',
    synchronize: true,
    logging: false,
    entities: ["./dist/src/entity/*.js"],
    migrations: ["./dist/src/migration/*js"]
});
//# sourceMappingURL=AppDataSource.js.map