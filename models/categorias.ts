import { DataTypes } from "sequelize";
import conectDB from "../db/conect";


const Category = conectDB.define('Categories', {
    CategoryName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Picture: {
        type: DataTypes.BLOB
    }
})

export default Category