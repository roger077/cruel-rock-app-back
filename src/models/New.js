import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const NewSchema = sequelize.define("New",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    date : {
        type: DataTypes.DATEONLY,
        allowNull:false
    },
    time:{
        type: DataTypes.TIME,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    type:{
        type:DataTypes.ENUM("EVENT","MATERIAL","MERCH&DESING","OTHER"),
        allowNull:false
    },
    pictures:{
        type: DataTypes.STRING,
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }

})

export default NewSchema;