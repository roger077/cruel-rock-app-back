import { Sequelize } from "sequelize";

import dotenv from "dotenv"
dotenv.config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const sequelize = new Sequelize(
  {
    database: DB_NAME,
    dialect: "sqlite",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  }  
)

export default sequelize