"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var _1686700690208_CriarTabelas_1 = require("./migration/1686700690208-CriarTabelas");
var Produto_1 = __importDefault(require("../modules/Produtos/entities/Produto"));
var Categoria_1 = __importDefault(require("../modules/Categoria/entities/Categoria"));
var Usuario_1 = __importDefault(require("../modules/Usuarios/entities/Usuario"));
var Pedidos_1 = __importDefault(require("../modules/Pedidos/entities/Pedidos"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DBNAME,
    synchronize: true,
    logging: false,
    entities: [Produto_1.default, Categoria_1.default, Usuario_1.default, Pedidos_1.default],
    migrations: [_1686700690208_CriarTabelas_1.CriarProdutoCategoriaTabela1686159829779],
    subscribers: [],
});
