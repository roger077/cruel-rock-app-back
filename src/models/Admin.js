import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { User } from "./index.js"

const AdminSchema=sequelize.define('Admin',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false,
    }
},{
    timestamps: false,
})

User.hasOne(AdminSchema,{ foreignKey: 'UserEmail' });

export default AdminSchema;