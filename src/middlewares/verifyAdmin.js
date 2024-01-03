import { jwtDecode } from 'jwt-decode';
import { User, Admin } from '../models/index.js'

export const verifyIsAdmin = async (req,res,next)=>{
    try{
        const token = req.headers["credential"];
        if(!token) 
            throw Error("No token provided")

        const decoded = jwtDecode(token);
        
        if(decoded.isBanned)
            throw Error("User is banned");

        const foundAdmin = await Admin.findOne({
            include:[
                {
                    model: User,
                    where:{
                        email:decoded.email
                    }
                }
            ]
        })

        if(!foundAdmin)
            throw Error("User is not admin");

        req.currentUser = foundAdmin;        
        next();
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
} 