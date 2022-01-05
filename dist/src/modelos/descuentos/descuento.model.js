"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var DescuentoSchema = new Schema({
    brand: { type: String },
    threshold: { type: Number },
    discount: { type: Number },
    valorComprado: { type: Number, default: 0 },
    aplicaDescuento: { type: Boolean, default: false }
});
exports.default = mongoose_1.default.model('descuento', DescuentoSchema);
