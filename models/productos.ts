import { DataTypes } from "sequelize";
import conectDB from "../db/conect";


const Product = conectDB.define('Products', {
    ProductName: {
        type: DataTypes.STRING
    },
    SupplierID: {
        type: DataTypes.INTEGER
    },
    CategoryID: {
        type: DataTypes.INTEGER
    },
    QuantityPerUnity: {
        type: DataTypes.STRING
    },
    UnitPrice: {
        type: DataTypes.DECIMAL
    },
    UnitsInStock: {
        type: DataTypes.SMALLINT
    },
    UnitsOnOrder: {
        type: DataTypes.SMALLINT
    },
    ReorderLevel: {
        type: DataTypes.SMALLINT
    },
    Discontinued: {
        type: DataTypes.TINYINT
    },
})


export default Product