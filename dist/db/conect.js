"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let dbHost = process.env.DB_HOST;
let dbName = process.env.DB_NAME;
let dbUserName = process.env.DB_USERNAME;
let dbPassword = process.env.DB_PASSWORD;
const conectDB = new sequelize_1.Sequelize(`${dbName}`, `${dbUserName}`, `${dbPassword}`, {
    host: `${dbHost}`,
    dialect: "mariadb",
    port: 3306,
    logging: false,
});
exports.default = conectDB;
//# sourceMappingURL=conect.js.map