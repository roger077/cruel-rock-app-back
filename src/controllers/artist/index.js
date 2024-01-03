import {Artist,New,User, Viewer} from "../../models/index.js";
import { Op } from "sequelize";
//import { users } from "../../users.js" 
export const getArtist = async(req,res)=>{
    const { filters } = req.body
    try{
        const auxFilters = {};
        const auxUserFilters = {};
        
        for(const key in filters){
            if(Artist.rawAttributes[key]){                
                auxFilters[key]=filters[key];            
            }
            else if(User.rawAttributes[key]){
                if(key === "username")
                    auxUserFilters[key]={[Op.like]:`%${filters[key]}%`}
                else
                    auxUserFilters[key] = filters[key];
            }
        }
        const foundArtist = await Artist.findAll({
            where:{
                ...auxFilters
            },
            include:[
                {
                    model: User,
                    where:{
                        isBanned: false,
                        ...auxUserFilters
                    }
                },
                {
                    model: Viewer,
                    as:"follower",
                    through: 'follow_followed',
                    include:[
                        {
                            model: User,
                            where:{
                                isBanned: false,                                
                            }
                        }
                    ]
                }
            ]
        });
        return res.status(200).send({artists: foundArtist})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const postArtist = async(req,res)=>{
    try{        
        const {
            //User fields
            username,
            password,
            email,
            profilePicture,
            locationLatitude,
            locationLongitude,
            
            //Artist fields
            description,
            spotify,
            youTube,
            genres,
            ...props
        }=req.body;
        
        const user = await User.create({
            username,
            password,
            email,
            profilePicture,
            locationLatitude,
            locationLongitude
        })
        
        await Artist.create({
            description,
            spotify,
            youTube,
            genres,
            UserEmail:user.email
        })

        return res.status(200).send({message: "User created successfully!"})
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

export const getArtistById = async (req,res)=>{
    try{
        const {artistId} = req.params;
        if(!artistId)
            throw new Error("Artist id is required");
        const foundUser = await Artist.findByPk(
            artistId,
            {
                include:{
                    model: User
                }
            }
        ); 
        if(!foundUser)
            throw new Error("User not found");

        res.status(200).send({
            user:foundUser
        });
    }catch(error){
        return res.status(500).send({"error":error.message})
    }
}

