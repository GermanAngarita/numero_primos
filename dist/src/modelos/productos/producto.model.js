"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ProductoSchema = new Schema({
    id: { type: Number },
    brand: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
});
exports.default = mongoose_1.default.model('producto', ProductoSchema);
