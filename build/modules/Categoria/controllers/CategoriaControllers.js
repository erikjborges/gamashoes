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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CategoriaRepository_1 = __importDefault(require("../repositories/CategoriaRepository"));
var Authenticate_1 = __importDefault(require("../../../middleware/Authenticate"));
var categoriaRouter = (0, express_1.Router)();
categoriaRouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, pagina, _c, limite, categoria, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _a = req.query, _b = _a.pagina, pagina = _b === void 0 ? 1 : _b, _c = _a.limite, limite = _c === void 0 ? 10 : _c;
                return [4 /*yield*/, CategoriaRepository_1.default.getCategoria(Number(pagina), Number(limite))];
            case 1:
                categoria = _d.sent();
                return [2 /*return*/, res.status(200).json(categoria)];
            case 2:
                error_1 = _d.sent();
                console.error(error_1);
                return [2 /*return*/, res.status(500).json({ error: 'Internal Server Error' })];
            case 3: return [2 /*return*/];
        }
    });
}); });
categoriaRouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, categoria;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                return [4 /*yield*/, CategoriaRepository_1.default.getCategoriaById(id)];
            case 1:
                categoria = _a.sent();
                if (categoria) {
                    return [2 /*return*/, res.status(200).json(categoria)];
                }
                else {
                    return [2 /*return*/, res.status(404).json({ error: 'Categoria não encontrada' })];
                }
                return [2 /*return*/];
        }
    });
}); });
categoriaRouter.post('/', Authenticate_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nome, categoria, categoriaNova;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nome = req.body.nome;
                categoria = {
                    nome: nome,
                };
                return [4 /*yield*/, CategoriaRepository_1.default.postCategoria(categoria)];
            case 1:
                categoriaNova = _a.sent();
                return [2 /*return*/, res.status(201).json(categoriaNova)];
        }
    });
}); });
categoriaRouter.put('/:id', Authenticate_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, nome, categoria, categoriaAtualizada;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                nome = req.body.nome;
                categoria = {
                    nome: nome,
                };
                return [4 /*yield*/, CategoriaRepository_1.default.updateCategoria(id, categoria)];
            case 1:
                categoriaAtualizada = _a.sent();
                if (categoriaAtualizada) {
                    return [2 /*return*/, res.status(200).json(categoriaAtualizada)];
                }
                else {
                    return [2 /*return*/, res.status(404).json({ error: 'Categoria não encontrada' })];
                }
                return [2 /*return*/];
        }
    });
}); });
categoriaRouter.delete('/:id', Authenticate_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, categoriaDeletada;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                return [4 /*yield*/, CategoriaRepository_1.default.deletarCategoria(id)];
            case 1:
                categoriaDeletada = _a.sent();
                if (categoriaDeletada) {
                    return [2 /*return*/, res.status(200).json({ message: 'Categoria excluída com sucesso' })];
                }
                else {
                    return [2 /*return*/, res.status(404).json({ error: 'Categoria não encontrada' })];
                }
                return [2 /*return*/];
        }
    });
}); });
exports.default = categoriaRouter;
