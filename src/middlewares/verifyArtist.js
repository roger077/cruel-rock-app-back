import {User} from '../models/index.js'

export const verifyArtist = async (req,res,next)=>{
    const {idFollowed,idFollower}=req.body;
    if(!idFollowed||!idFollower) return res.status(400).send({"message":"idFollowed and idFollower cannot be null"})
    const currentFollowed=await User.findByPk(idFollowed);
    
    if(currentFollowed.roles!=="ARTIST") 
        return res.status(404).send({"message":"Only artists can be followed"})

    req.userFollowed=currentFollowed;
    req.idFollower=idFollower
    next()
}

//export const verifyEvent  