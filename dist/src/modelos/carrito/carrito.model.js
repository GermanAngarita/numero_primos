"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var producto_model_1 = __importDefault(require("../productos/producto.model"));
var Schema = mongoose_1.default.Schema;
var CarritoSchema = new Schema({
    total: { type: Number, default: 0 },
    sub_total: { type: Number, default: 0 },
    mensaje: { type: String, default: '' },
    descuento: {
        valor: { type: Number, default: 0 },
        mensaje: { type: String, default: '' }
    },
    productos: [{
            producto: { type: Schema.Types.ObjectId, ref: producto_model_1.default },
            cantidad: { type: Number, default: 1 },
            total: { type: Number, default: 0 }
        }]
});
exports.default = mongoose_1.default.model('carrito', CarritoSchema);
