import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

let dbHost = process.env.DB_HOST;
let dbName = process.env.DB_NAME;
let dbUserName = process.env.DB_USERNAME;
let dbPassword = process.env.DB_PASSWORD;

const conectDB = new Sequelize(`${dbName}`, `${dbUserName}`, `${dbPassword}`, {
  host: `${dbHost}`,
  dialect: "mariadb",
  port: 3306,
  logging: false,
});

export default conectDB;
