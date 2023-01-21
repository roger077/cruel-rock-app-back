import server from "./src/app.js";
import dotenv from "dotenv"
import db from './src/db.js'
dotenv.config();

const {PORT} = process.env
db.sync({ force: true }).then(()=>server.listen(PORT,()=>console.log(`Server listen on port ${PORT}`)))