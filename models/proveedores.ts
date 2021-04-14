import { DataTypes, Sequelize } from "sequelize";
import conectDB from "../db/conect";
import Product from "./productos";

const Supplier = conectDB.define(
  "Suppliers",
  {
    SupplierID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      key: "SupplierID",
    },
    CompanyName: {
      type: DataTypes.STRING,
    },
    ContactName: {
      type: DataTypes.INTEGER,
    },
    ContactTitle: {
      type: DataTypes.INTEGER,
    },
    Address: {
      type: DataTypes.STRING,
    },
    City: {
      type: DataTypes.DECIMAL,
    },
    Region: {
      type: DataTypes.SMALLINT,
    },
    PostalCode: {
      type: DataTypes.SMALLINT,
    },
    Country: {
      type: DataTypes.SMALLINT,
    },
    Phone: {
      type: DataTypes.TINYINT,
    },
    Fax: {
      type: DataTypes.TINYINT,
    },
    HomePage: {
      type: DataTypes.TEXT,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

export default Supplier;
