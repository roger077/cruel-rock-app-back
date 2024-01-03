import User from "../../models/User.js";
import { Admin, Artist, Viewer } from "../../models/index.js";

export const getUser = async(req,res)=>{
    const {filters} = req.body;
    try{
        const foundUsers= await User.findAll({
            where:{
                ...filters,
                isBanned:false
            }
        })
        return res.status(200).send(foundUsers)
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const postUser = async(req,res)=>{
    try{
        const {description,spotify,youTube,pictures,...props}=req.body;
        const createdUser = await User.create(props.roles==="ARTIST"?{...props,description,spotify,youTube,pictures}:props)
        return res.status(200).send({message:"Loaded successfully!",createdUser})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const postFollower = async(req,res)=>{
    try{
        const {userFollowed,idFollower} = req;
        const userFollower = await User.findByPk(idFollower)
        const currentFollowed=await userFollowed.addFollower(userFollower)
        
        return res.status(200).send({"message":"Artist followed successfully","userFollowed":currentFollowed})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const getUserByEmail = async (req,res)=>{
    try{
        const {email} = req.params;
        if(!email) return res.status(400).send({"error":"Email is required"})
        const currentUser=await User.findOne({
            where:{email},             
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
        if(!currentUser) return res.status(404).send({"error":"User not found"})
        return res.status(200).send(currentUser)
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
} 

export const banUser = async (req,res)=>{
    try{
        const {emailUser} = req.params;
        
        if(!emailUser)
            throw Error("User email is required");
       
        const foundUser = await User.findOne({
            where:{
                email:emailUser
            }
        });
        
        if(!foundUser)
            throw Error("User not found")

        foundUser.isBanned=true;
        await foundUser.save();
        
        return res.status(200).send({message:"successfully banned user"})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}