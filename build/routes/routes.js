"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProdutoControllers_1 = __importDefault(require("../modules/Produtos/controllers/ProdutoControllers"));
var CategoriaControllers_1 = __importDefault(require("../modules/Categoria/controllers/CategoriaControllers"));
var UsuarioControllers_1 = __importDefault(require("../modules/Usuarios/controllers/UsuarioControllers"));
var PedidoControllers_1 = __importDefault(require("../modules/Pedidos/controllers/PedidoControllers"));
var AuthController_1 = __importDefault(require("../modules/Usuarios/Auth/AuthController"));
var Authenticate_1 = __importDefault(require("../middleware/Authenticate"));
var routers = (0, express_1.Router)();
routers.use('/produto', ProdutoControllers_1.default);
routers.use('/categoria', CategoriaControllers_1.default);
routers.use('/pedido', Authenticate_1.default, PedidoControllers_1.default);
routers.use('/usuario', UsuarioControllers_1.default);
routers.use('/login', AuthController_1.default);
exports.default = routers;
