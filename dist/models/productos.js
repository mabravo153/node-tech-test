"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conect_1 = __importDefault(require("../db/conect"));
const Product = conect_1.default.define('Products', {
    ProductName: {
        type: sequelize_1.DataTypes.STRING
    },
    SupplierID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    CategoryID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    QuantityPerUnity: {
        type: sequelize_1.DataTypes.STRING
    },
    UnitPrice: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    UnitsInStock: {
        type: sequelize_1.DataTypes.SMALLINT
    },
    UnitsOnOrder: {
        type: sequelize_1.DataTypes.SMALLINT
    },
    ReorderLevel: {
        type: sequelize_1.DataTypes.SMALLINT
    },
    Discontinued: {
        type: sequelize_1.DataTypes.TINYINT
    },
});
exports.default = Product;
//# sourceMappingURL=productos.js.map