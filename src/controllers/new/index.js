import { Artist, New } from "../../models/index.js";

export const postNew = (req,res)=>{
    try{
        
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}