import { DataTypes } from "sequelize";
import conectDB from "../db/conect";
import Product from "./productos";

const Category = conectDB.define("Categories", {
  CategoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    key: "CategoryID",
  },
  CategoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Picture: {
    type: DataTypes.BLOB,
  },
});

// Category.belongsTo(Product);

export default Category;
