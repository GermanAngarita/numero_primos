"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var variablesCargadas = dotenv_1.default.config().parsed;
var variablesEntorno = {
    dominio: process.env.DOMINIO ? process.env.DOMINIO : 'http://localhost:5050',
    baseDeDatos: process.env.BDD ? process.env.BDD : 'mkplus-prod',
    entorno: process.env.ENTORNO ? process.env.ENTORNO : 'Produccion',
    puerto: process.env.PORT ? process.env.PORT : '3000',
    pathPrincipal: process.env.ROOT_PATH ? process.env.ROOT_PATH : '/api/v1',
    urlBaseDatos: process.env.URL_BDD ? process.env.URL_BDD : 'No disponible',
    zonaHoraria: process.env.ZONA_HORARIA ? process.env.ZONA_HORARIA : 'America/Bogota',
    frontend: process.env.FRONTEND ? process.env.FRONTEND : 'http://localhost:4201',
};
exports.default = variablesEntorno;
