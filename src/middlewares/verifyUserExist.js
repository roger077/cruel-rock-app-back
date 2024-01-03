import { jwtDecode } from 'jwt-decode';
import {User,Artist,Admin,Viewer} from '../models/index.js'

export const verifyUserExist = async (req,res,next)=>{
    
    const {email,username} = req.body;
    try{
        if(!email)
            throw Error("email is required");

        if(await User.findOne({
            where:{
                email
            }
        }))
            throw Error("There is already a registered user with this email");

        if(await User.findOne({
            where:{
                username
            }
        }))
            throw Error("There is already a registered user with this username");
            
        next();
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const verifyUserByToken = async (req,res,next)=>{
    try{
        const token = req.headers["credential"];
        if(!token) 
            throw Error("No token provided")

        const decoded = jwtDecode(token);
        
        if(decoded.isBanned)
            throw Error("User is banned");

        const foundUser = await User.findOne({
            where:{
                email:decoded.email,            
            },
            include:[
                { model: Admin },
                { 
                    model: Artist,    
                    include:[
                        {
                            model: Viewer,
                            as:"follower",
                            through:"follow_followed" 
                        },
                    ]               
                },
                { 
                    model: Viewer, 
                    include:[
                        {
                            model: Artist,
                            as: 'followed', 
                            through: 'follow_followed',
                        }
                    ]
                }           
            ]            
        })
        
        if(!foundUser)
            throw Error("User not found");
        
        req.currentUser = foundUser;
        next();
    }catch(error){
        
    }
}


//export default verifyUserExist;