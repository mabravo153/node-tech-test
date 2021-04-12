"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conect_1 = __importDefault(require("../db/conect"));
const Category = conect_1.default.define('Categories', {
    CategoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    Picture: {
        type: sequelize_1.DataTypes.BLOB
    }
});
exports.default = Category;
//# sourceMappingURL=categorias.js.map