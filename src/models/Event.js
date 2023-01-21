import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const EventSchema = sequelize.define("Event",{
    id: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false,
        ticketPrice: DataTypes.INTEGER
    },
    time:{
        type:DataTypes.TIME,
        allowNull:false
    },
    adress:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ticketPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    isFinished:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    poster_path:{
        type:DataTypes.STRING,
        allowNull:false
    },
    title_description:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

export default EventSchema