"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Usuario_1 = __importDefault(require("../../Usuarios/entities/Usuario"));
var Produto_1 = __importDefault(require("../../Produtos/entities/Produto"));
var Pedido = /** @class */ (function () {
    function Pedido() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], Pedido.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('int'),
        __metadata("design:type", Number)
    ], Pedido.prototype, "usuarioId", void 0);
    __decorate([
        (0, typeorm_1.Column)('int'),
        __metadata("design:type", Number)
    ], Pedido.prototype, "produtoId", void 0);
    __decorate([
        (0, typeorm_1.Column)('int'),
        __metadata("design:type", Number)
    ], Pedido.prototype, "quantidade", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuario_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'usuarioId' }),
        __metadata("design:type", Usuario_1.default)
    ], Pedido.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Produto_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'produtoId' }),
        __metadata("design:type", Produto_1.default)
    ], Pedido.prototype, "produto", void 0);
    Pedido = __decorate([
        (0, typeorm_1.Entity)('pedidos')
    ], Pedido);
    return Pedido;
}());
exports.default = Pedido;
