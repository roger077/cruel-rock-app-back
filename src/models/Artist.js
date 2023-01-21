import { DataTypes } from "sequelize";
import sequelize from "../db.js";
//string
const ArtistSchema = sequelize.define('Artist',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    spotify:{
        type:DataTypes.STRING,
        allowNull:false
    },
    youTube:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pictures:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default ArtistSchema