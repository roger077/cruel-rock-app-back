import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import bcryptjs from "bcryptjs"
//string
const UserSchema = sequelize.define('User',{
    /*
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
    },
    */
    userName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        set(value){
            const passwordHash =  bcryptjs.hashSync(value,10);
            this.setDataValue('password',passwordHash)
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    },
    pictures:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    isBanned:{
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull: false

    },
    profilePicture:{
        type: DataTypes.STRING,
        allowNull: false
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
})

export default UserSchema;
