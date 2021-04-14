import { DataTypes } from "sequelize";
import conectDB from "../db/conect";
import Category from "./categorias";
import Supplier from "./proveedores";

const Product = conectDB.define("Products", {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    key: "ProductID",
  },
  ProductName: {
    type: DataTypes.STRING,
  },
  SupplierID: {
    type: DataTypes.INTEGER,
  },
  CategoryID: {
    type: DataTypes.INTEGER,
  },
  QuantityPerUnit: {
    type: DataTypes.STRING,
  },
  UnitPrice: {
    type: DataTypes.DECIMAL,
  },
  UnitsInStock: {
    type: DataTypes.SMALLINT,
  },
  UnitsOnOrder: {
    type: DataTypes.SMALLINT,
  },
  ReorderLevel: {
    type: DataTypes.SMALLINT,
  },
  Discontinued: {
    type: DataTypes.STRING,
  },
});

Product.belongsTo(Category, { foreignKey: "CategoryID" });
Category.hasMany(Product, { foreignKey: "CategoryID" });
Product.belongsTo(Supplier, { foreignKey: "SupplierID" });
Supplier.hasMany(Product, { foreignKey: "SupplierID" });

export default Product;
