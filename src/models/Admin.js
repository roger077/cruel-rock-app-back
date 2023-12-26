import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const AdminSchema=sequelize.define('Admin',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false,
    }
})

export default AdminSchema;