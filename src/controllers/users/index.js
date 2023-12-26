import User from "../../models/User.js";

export const getUser = async(req,res)=>{
    try{
        const foundUsers= await User.findAll()
        return res.status(200).send(foundUsers)
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const postUser = async(req,res)=>{
    try{
        const {description,spotify,youTube,pictures,...props}=req.body;
        console.log({...props,description,spotify,youTube,pictures})
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
        const currentUser=await User.findOne({where:{email}})
        if(!currentUser) return res.status(404).send({"error":"User not found"})
        return res.status(200).send(currentUser)
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
} 