import User from "../../models/User.js";

export const getUser = async(req,res)=>{
    try{
        const foundUsers= await User.findAll()
        return res.status(200).send(foundUsers)
    }catch(error){
        return res.status(400).send({"error":error.message})
    }
}

export const postUser = async(req,res)=>{
    try{
        const {description,spotify,youTube,pictures,...props}=req.body;
        console.log({...props,description,spotify,youTube,pictures})
        const createdUser = await User.create(props.roles==="ARTIST"?{...props,description,spotify,youTube,pictures}:props)
        return res.status(200).send({msg:"Loaded successfully!",createdUser})
    }catch(error){
        return res.status(400).send({"error":error.message})
    }
}

export const postFollower = async(req,res)=>{
    try{
        const {userFollowed,idFollower} = req;
        const userFollower = await User.findByPk(idFollower)
        const currentFollowed=await userFollowed.addFollower(userFollower)
        
        return res.status(200).send({"message":"Artist followed successfully","userFollowed":currentFollowed})
    }catch(error){
        return res.status(400).send({"error":error.message})
    }
}