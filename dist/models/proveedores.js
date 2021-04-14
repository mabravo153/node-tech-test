"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conect_1 = __importDefault(require("../db/conect"));
const Supplier = conect_1.default.define("Suppliers", {
    SupplierID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        key: "SupplierID",
    },
    CompanyName: {
        type: sequelize_1.DataTypes.STRING,
    },
    ContactName: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    ContactTitle: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Address: {
        type: sequelize_1.DataTypes.STRING,
    },
    City: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    Region: {
        type: sequelize_1.DataTypes.SMALLINT,
    },
    PostalCode: {
        type: sequelize_1.DataTypes.SMALLINT,
    },
    Country: {
        type: sequelize_1.DataTypes.SMALLINT,
    },
    Phone: {
        type: sequelize_1.DataTypes.TINYINT,
    },
    Fax: {
        type: sequelize_1.DataTypes.TINYINT,
    },
    HomePage: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    paranoid: true,
    timestamps: true,
});
exports.default = Supplier;
//# sourceMappingURL=proveedores.js.map