import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";
//string
const ArtistSchema = sequelize.define('Artist',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    spotify:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    youTube:{
        type:DataTypes.STRING,
        defaultValue:null
    }
})

User.hasOne(ArtistSchema);

export default ArtistSchema;