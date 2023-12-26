import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";
import Viewer from "./Viewer.js";
import { Artist } from "./index.js";
const ReviewSchema = sequelize.define("Review",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    puntuation:{
        type: DataTypes.INTEGER,
        allowNull:false,
        set(value){
            if(value>0&&value<6)
                this.setDataValue('puntuation',value);
        }
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    ViewerId:{
        type:DataTypes.UUIDV4,
        references:{
            model:Viewer,
            key:'id'
        }
    },
    ArtistId:{
        type:DataTypes.UUIDV4,
        references:{
            model:Artist,
            key:'id'
        } 
    }
});

export default ReviewSchema;