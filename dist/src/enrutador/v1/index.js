"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../configuraciones/logger"));
var test_ctr_1 = __importDefault(require("../../controladores/test.ctr"));
var numeros_primos_1 = __importDefault(require("../../controladores/numeros-primos"));
var enrutador = express_1.default.Router();
enrutador.use('/test', test_ctr_1.default);
enrutador.use('/primos', numeros_primos_1.default);
logger_1.default.info('TEST: SERVIDOR', '     /test');
exports.default = enrutador;
