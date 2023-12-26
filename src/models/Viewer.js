import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js"
import Artist from "./Artist.js";

const ViewerSchema = sequelize.define("Viewer",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false,
    },
    genresFavorites : {
        type: DataTypes.TEXT,
        allowNull:false
    }
})

User.hasOne(ViewerSchema);
export default ViewerSchema

