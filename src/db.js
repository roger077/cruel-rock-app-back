import { Sequelize } from "sequelize";

import dotenv from "dotenv"
dotenv.config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env

const sequelize = new Sequelize(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
  logging: false, 
  native: false, 
})


export default sequelize