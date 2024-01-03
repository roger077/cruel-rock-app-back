import server from "./src/app.js";
import db from './src/db.js';

const {PORT} = process.env
db.sync({ force: false })
.then(()=>server.listen(PORT,()=>console.log(`Server listen on port ${PORT}`)))
.catch(error=>console.log({error}))