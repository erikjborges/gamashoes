"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var express_1 = require("express");
var Authenticate = (0, express_1.Router)();
Authenticate.use('/', function (req, res, next) {
    var _a;
    try {
        var token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!token) {
            res.status(401).json({ error: 'Please authenticate' });
        }
        else {
            var decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET));
            console.log(decoded);
            next();
        }
    }
    catch (err) {
        res.status(401).json({ error: 'Please authenticate' });
    }
});
exports.default = Authenticate;
