import { DataTypes } from "sequelize";
import conectDB from "../db/conect";


const Supplier = conectDB.define('Suppliers', {
    CompanyName: {
        type: DataTypes.STRING
    },
    ContactName: {
        type: DataTypes.INTEGER
    },
    ContactTitle: {
        type: DataTypes.INTEGER
    },
    Address: {
        type: DataTypes.STRING
    },
    City: {
        type: DataTypes.DECIMAL
    },
    Region: {
        type: DataTypes.SMALLINT
    },
    PostalCode: {
        type: DataTypes.SMALLINT
    },
    Country: {
        type: DataTypes.SMALLINT
    },
    Phone: {
        type: DataTypes.TINYINT
    },
    Fax: {
        type: DataTypes.TINYINT
    },
    HomePage: {
        type: DataTypes.TEXT
    },
})


export default Supplier