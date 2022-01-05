"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var opciones = {
    timestampFormat: 'YYYYMMDD h:mm:ss a',
    color: 'red'
};
var simpleNodeLogger = require('simple-node-logger');
var log = simpleNodeLogger.createSimpleLogger(opciones);
exports.default = log;
